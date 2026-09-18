#!/usr/bin/env python3
"""Build handoff data and readable catalog; this is not the game engine."""
import json, re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
LENSES=['consequences','rightsDuties','autonomy','fairness']
SOURCES={
'doing':'https://plato.stanford.edu/entries/doing-allowing/',
'double':'https://plato.stanford.edu/entries/double-effect/',
'consent':'https://plato.stanford.edu/entries/informed-consent/',
'obligations':'https://plato.stanford.edu/entries/special-obligations/',
'luck':'https://plato.stanford.edu/entries/moral-luck/',
'justice':'https://plato.stanford.edu/entries/justice-distributive/',
'future':'https://plato.stanford.edu/entries/justice-intergenerational/',
'variants':'https://academic.oup.com/bioscience/article/75/9/722/8164492'}
# These sources explain concepts; original scenarios and all scores are our authored judgments.
CHAPTER_SOURCES=[['doing'],['doing'],['double'],['consent'],['obligations'],['luck'],['doing','obligations'],['justice'],['future'],['doing','consent','justice']]
# Explicit scene action levels. Remaining two/three-choice scenes are rail selector layouts.
ACTIONS={8,20,24,25,27,30,33,34,35,36,38,43,44,45,46,47,48,51,53,54,55,56,57,59,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,91,92,96,97,103,104,105,106,107,108,111,112,114,115,116,124,126,127,128,129,130,131,133,134,135,136,137,138,139,140,150,151,156,157,163,167,168,171,172,174,175,176,178,179,181,183,184,185,187,188,190,191,192,193,194,196,197,198,199,200}
# Explicit known downstream fatalities; all other fatalities happen during the incident.
DELAYED={(153,'B'):2,(161,'B'):6,(163,'B'):3,(165,'B'):3,(167,'B'):3,(170,'B'):4,(175,'B'):2,(177,'B'):1,(180,'B'):2,(192,'B'):1}
UNCERTAIN={14,101,102,103,104,105,106,107,109,110,111,113,114,115,116,118,119,120,184,190,195,196}
# Only outcome forecasts, not hidden realizations, appear before commitment.
FORECASTS={
101:['80% chance of five human deaths; otherwise zero.','One certain human death; fog-track occupants, if present, survive.'],
102:['10% chance of five human deaths; otherwise zero.','One certain human death.'],
103:['1% chance of 200 human deaths; otherwise zero.','One certain human death.'],
104:['If the untested oracle is right, five die; the siding person survives.','One certainly dies; any people on the main track survive.'],
105:['Two human deaths, certain.','Unknown chance of zero deaths or three deaths.'],
106:['Two human deaths, certain.','Disputed chance of zero deaths or three deaths; no justified probability.'],
107:['Four die while the envelope is opened too late.','50% chance of zero deaths; 50% chance of six deaths.'],
109:['Two certain deaths; hidden siding workers survive.','Unknown number of siding workers may die; two on the main route survive.'],
110:['Three certain deaths.','Between one and five deaths; no justified probability distribution.'],
111:['Five certain deaths.','50% chance of zero deaths; 50% chance of five deaths.','Two certain deaths.'],
113:['Three certain deaths.','Unknown crew occupancy; any workers on the siding die.'],
114:['Three certain deaths.','90% chance of zero deaths; 10% chance of the same three deaths, with no added victims.'],
115:['Three certain deaths.','1% chance of zero deaths; 99% chance of four bystander deaths.','One certain death.'],
116:['Four certain deaths.','50% chance of zero deaths; 50% chance of four deaths, independent of the previous streak.','One certain death.'],
118:['Two certain deaths.','The conflicted witness claims zero; any actual siding occupants die.'],
119:['One certain death.','95% chance of zero deaths; 5% chance of twenty deaths.'],
120:['Four certain deaths.','60% chance of zero deaths; 40% chance of two deaths.','One certain death.'],
184:['Four certain deaths; volunteer survives.','80% chance of one volunteer death and four saved; 20% chance all five die.'],
195:['One certain death: your friend.','90% chance of three stranger deaths; 10% chance of zero deaths.']}
SPOILER_SENTENCES={
102:'The hidden fixed scene is empty.',103:'The actual main route is empty.',105:'It actually works.',106:'The brake actually stops it.',107:'In fact it contains zero.',109:'The siding actually holds three.',110:'it actually holds two.',111:'Here the brake fails.',113:'The siding actually has one worker.',114:'It fails here.',115:'The gimmick succeeds here.',116:'The brake fails.',118:'the siding actually holds one.',119:'The alternate route is actually clear.',120:'it is actually clear.',184:'It works in this fixed scene.',195:'It actually holds three.'}
canonical={4:('canonical-adaptation',['doing']),32:('canonical-adaptation',['variants']),41:('canonical-adaptation',['variants']),45:('canonical-adaptation',['double'])}
levels=[]; chapters=[]; chapter=0
for line in (ROOT/'data/authoring.txt').read_text().splitlines():
 if not line.strip():continue
 if line.startswith('# '):
  _,n,title=line.split(' ',2);chapter=int(n);chapters.append({'id':chapter,'title':title,'firstLevel':(chapter-1)*20+1,'lastLevel':chapter*20});continue
 parts=line.split('|');title,brief,distinction=parts[:3];i=len(levels)+1
 assert 2<=len(parts[3:])<=3,(i,title)
 fullbrief=brief
 if i in SPOILER_SENTENCES:
  brief=brief.replace(SPOILER_SENTENCES[i],'').strip().replace('; .','.').replace(';  ','. ')
  brief=re.sub(r';\s*$', '.',brief)
 if i==109:brief=brief.replace('The siding actually holds three.','')
 if i==118:brief=brief.replace('; .','.').replace('The main route holds two;','The main route holds two.')
 if i==120:brief=brief.replace('otherwise two occupants;','otherwise two occupants.')
 if i==110:brief=brief.replace('distribution;','distribution.')
 layout='fork3' if len(parts[3:])==3 else 'fork2'
 if i in ACTIONS:layout='action3' if len(parts[3:])==3 else 'action2'
 if i in (31,32):layout='footbridge'
 if i in (41,42):layout='loop'
 choices=[]; lenses=None
 for j,p in enumerate(parts[3:]):
  label,counts,summary,reason,tension,scores=p.split('~'); cid=chr(65+j)
  c=list(map(int,counts.split(',')));c=c+[0]*(3-len(c));assert len(c)==3
  ratings={k:int(v) for k,v in zip(LENSES,scores.split(',')) if v!='-'}
  assert len(scores.split(','))==4
  if lenses is None:lenses=list(ratings)
  assert set(lenses)==set(ratings),(i,'inconsistent lenses')
  delayed=DELAYED.get((i,cid),0)
  death={'humans':c[0],'cockroaches':c[1],'butterflies':c[2]}
  outcome={'id':f'L{i:03d}-{cid}','summary':summary,'deaths':death,'delayedHumanDeaths':delayed,'rawDeaths':sum(c),'weightedImpactTenths':10*c[0]+c[1]+2*c[2],
  'ratings':ratings,'scoreNumerator':sum(ratings.values()),'scoreDenominator':len(ratings),'reflection':{'outcome':summary,'strongestReason':reason,'ethicalTension':tension}}
  forecast=FORECASTS.get(i,[])
  preview=forecast[j] if forecast else summary
  choices.append({'id':cid,'label':label,'control':('default' if j==0 else 'select-route' if layout.startswith('fork') or layout=='loop' else 'scene-action'),
  'slot':j,'preview':preview,'outcomeId':outcome['id'],'outcome':outcome})
 prov,src=canonical.get(i,('original',CHAPTER_SOURCES[chapter-1]))
 levels.append({'id':i,'title':title,'chapter':chapter,'domain':chapters[-1]['title'],'philosophicalDistinction':distinction,'premise':brief,
 'provenance':{'kind':prov,'sourceIds':src,'note':('Recognizable thought-experiment structure, rewritten and simplified for this game; ratings and wording are original.' if prov!='original' else 'Original authored scenario; listed sources provide conceptual background, not this scenario or its score.')},
 'layout':{'template':layout,'theme':('bureaucratic-comedy' if any(w in fullbrief.lower() for w in ['coupon','trophy','form','duck','cape','checkbox','umbrella','confetti','hat','oracle']) else 'railway-theatre'),
 'sceneCaption':brief,'routeLabels':[x['label'] for x in choices],'fogOverlay':i in FORECASTS,'actionTarget':('bridge-person' if i==32 else 'trapdoor-control' if i==31 else 'control-console' if layout.startswith('action') else 'rail-switch'),
 'renderMode':'schematic-with-fact-plaques'},
 'timing':{'decisionMs':30000,'resolutionMs':2400,'commitRule':'last-selected-at-deadline','pauseAllowed':True},
 'defaultChoiceId':'A','defaultDisclosure':f"If you do nothing: {choices[0]['label']}. {choices[0]['preview']}",
 'knowledge':{'mode':'epistemic-fixed' if i in FORECASTS else 'moral-status-uncertain' if i in (14,190) else 'deterministic','authorOnlyPremise':fullbrief,'sampling':'none','scoreBasis':'information-available-before-choice'},
 'applicableLenses':lenses,'choices':choices})
assert len(levels)==200
catalog={'schemaVersion':1,'catalogVersion':'1.0.0','title':'Trolley','sources':SOURCES,'chapters':chapters,
 'rules':{'deathWeightsTenths':{'humans':10,'cockroaches':1,'butterflies':2},'scoreRule':'equal mean of applicable authored lenses; campaign mean of first-completion level means','defaultDecisionMs':30000,'replay':'practice-does-not-change-totals','scoreDisclaimer':'A game interpretation of this choice, not an objective judgment of your character.','weightDisclaimer':'Playful author conventions, not scientific facts or moral exchange rates.'},'levels':levels}
(ROOT/'data/levels.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n')
md=['# Trolley — complete 200-level catalog','', 'Version 1.0.0. This file contains outcome spoilers. The JSON is authoritative; this Markdown is generated from the same authored source. All counts are actual deaths, including explicitly stipulated later deaths. A destroyed robot is described but is not a biological death. Every level uses 30 seconds of active decision time, then 2.4 seconds of resolution; pause and extended timing are available. A is always the disclosed default. Each level has exactly one commitment.','', 'Ratings: C = consequences, D = rights/duties, A = autonomy, F = fairness. Only listed lenses apply; each receives equal weight. Scores are authored interpretations, not measurements of character. Weights: human 1.0, cockroach 0.1, butterfly 0.2; raw deaths count each as one.','']
for ch in chapters:
 md += [f"## Chapter {ch['id']}: {ch['title']}",'']
 for l in [x for x in levels if x['chapter']==ch['id']]:
  md += [f"### {l['id']:03d}. {l['title']}",'',l['premise'],'',f"**Domain:** {l['domain']}. **Distinction:** {l['philosophicalDistinction']}.",'',f"**Layout:** `{l['layout']['template']}`; {l['layout']['renderMode']}; target `{l['layout']['actionTarget']}`. Route/control labels: {' / '.join(l['layout']['routeLabels'])}. **Timing:** 30 s active decision + 2.4 s resolution; last selection at deadline commits. **Default:** {l['defaultDisclosure']}",'',f"**Provenance:** {l['provenance']['kind']}. {l['provenance']['note']} Background: "+', '.join(f'[{s}]({SOURCES[s]})' for s in l['provenance']['sourceIds'])+'.','']
  for c in l['choices']:
   o=c['outcome'];d=o['deaths'];r=o['reflection'];rat=', '.join(f'{k} {v}' for k,v in o['ratings'].items());score=o['scoreNumerator']/o['scoreDenominator']
   md += [f"**{c['id']}. {c['label']}** ({c['control']}, scene slot {c['slot']})",'',f"Before choice: {c['preview']}",'',f"Outcome: {o['summary']}",'',f"Deaths: {d['humans']} human, {d['cockroaches']} cockroach, {d['butterflies']} butterfly; raw **{o['rawDeaths']}**, weighted impact **{o['weightedImpactTenths']/10:.1f}**. Included later human deaths: {o['delayedHumanDeaths']}. Ratings: {rat}. Level score **{score:.1f}/100** (exact {o['scoreNumerator']}/{o['scoreDenominator']}).",'',f"Strongest supporting reason: {r['strongestReason']}",'',f"Ethical tension: {r['ethicalTension']}",'']
  if l['knowledge']['mode']=='epistemic-fixed':md += ['Author-only world note: '+l['knowledge']['authorOnlyPremise']+' Outcomes are fixed reveals, not fresh random draws; do not expose this note or outcome objects before commitment.','']
(ROOT/'LEVEL_CATALOG.md').write_text('\n'.join(md)+'\n')
print(f'Built {len(levels)} levels, {sum(len(x["choices"]) for x in levels)} outcomes.')
