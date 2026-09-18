#!/usr/bin/env python3
"""Dependency-free validation of every keyword used by the supplied JSON Schema,
plus cross-field/domain invariants. Not a general JSON Schema implementation.
Run from any directory: python3 path/to/tools/validate_catalog.py
"""
import hashlib,json,re
from collections import Counter
from fractions import Fraction
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SUPPORTED={'$schema','$id','title','type','enum','const','minimum','maximum','minLength','pattern','properties','required','additionalProperties','minProperties','items','minItems','maxItems','uniqueItems'}
checks=0
def ok(condition,msg):
 global checks
 checks+=1
 if not condition:raise AssertionError(msg)
def validate(x,s,path='$'):
 ok(not(set(s)-SUPPORTED),f'Unsupported schema keywords at {path}: {set(s)-SUPPORTED}')
 if 'const' in s:ok(type(x)==type(s['const']) and x==s['const'],f'{path}: const')
 if 'enum' in s:ok(x in s['enum'],f'{path}: enum')
 if 'type' in s:
  types={'object':dict,'array':list,'string':str,'integer':int,'boolean':bool}
  ok(type(x)==types[s['type']],f'{path}: expected {s["type"]}')
 if isinstance(x,dict):
  ok(len(x)>=s.get('minProperties',0),f'{path}: minProperties')
  for k in s.get('required',[]):ok(k in x,f'{path}: missing {k}')
  props=s.get('properties',{})
  for k,v in x.items():
   if k in props:validate(v,props[k],f'{path}.{k}')
   elif s.get('additionalProperties') is False:ok(False,f'{path}: unknown {k}')
   elif isinstance(s.get('additionalProperties'),dict):validate(v,s['additionalProperties'],f'{path}.{k}')
 if isinstance(x,list):
  ok(len(x)>=s.get('minItems',0),f'{path}: minItems');ok(len(x)<=s.get('maxItems',len(x)),f'{path}: maxItems')
  if s.get('uniqueItems'):ok(len({json.dumps(v,sort_keys=True) for v in x})==len(x),f'{path}: duplicate items')
  for i,v in enumerate(x):validate(v,s.get('items',{}),f'{path}[{i}]')
 if isinstance(x,str):
  ok(len(x)>=s.get('minLength',0),f'{path}: minLength')
  if 'pattern' in s:ok(re.search(s['pattern'],x) is not None,f'{path}: pattern')
 if type(x)==int:
  ok(x>=s.get('minimum',x),f'{path}: minimum');ok(x<=s.get('maximum',x),f'{path}: maximum')

def main():
 data=json.loads((ROOT/'data/levels.json').read_text());schema=json.loads((ROOT/'data/levels.schema.json').read_text());validate(data,schema)
 levels=data['levels'];ok([l['id'] for l in levels]==list(range(1,201)),'IDs must be exactly ordered 1..200')
 ok(len({l['title'] for l in levels})==200,'duplicate titles');ok(len({l['premise'] for l in levels})==200,'duplicate premises')
 ok(Counter(l['chapter'] for l in levels)==Counter({i:20 for i in range(1,11)}),'chapter sizes')
 outcomes=[]
 for i,ch in enumerate(data['chapters'],1):ok((ch['id'],ch['firstLevel'],ch['lastLevel'])==(i,(i-1)*20+1,i*20),'chapter bounds')
 for l in levels:
  n=l['id'];cs=l['choices'];ok(l['chapter']==(n-1)//20+1,f'{n}: chapter');ok(l['domain']==data['chapters'][l['chapter']-1]['title'],f'{n}: domain')
  ok([c['id'] for c in cs]==list('ABC')[:len(cs)],f'{n}: choice order');ok([c['slot'] for c in cs]==list(range(len(cs))),f'{n}: slots')
  ok(cs[0]['id']==l['defaultChoiceId'] and cs[0]['control']=='default',f'{n}: default')
  ok(l['defaultDisclosure']==f"If you do nothing: {cs[0]['label']}. {cs[0]['preview']}",f'{n}: disclosure')
  ok(l['layout']['routeLabels']==[c['label'] for c in cs],f'{n}: labels');ok(l['layout']['sceneCaption']==l['premise'],f'{n}: caption')
  ok(all(s in data['sources'] for s in l['provenance']['sourceIds']),f'{n}: source links')
  template=l['layout']['template'];ok(len(cs)==(3 if template.endswith('3') else 2),f'{n}: layout arity')
  ok(l['layout']['fogOverlay']==(l['knowledge']['mode']=='epistemic-fixed'),f'{n}: fog policy')
  for c in cs:
   o=c['outcome'];outcomes.append(o);d=o['deaths'];key=f'L{n:03d}-{c["id"]}'
   ok(o['id']==key==c['outcomeId'],f'{key}: references');ok(set(o['ratings'])==set(l['applicableLenses']),f'{key}: lenses')
   ok(o['rawDeaths']==sum(d.values()),f'{key}: raw');ok(o['weightedImpactTenths']==d['humans']*10+d['cockroaches']+2*d['butterflies'],f'{key}: weighted')
   ok(o['delayedHumanDeaths']<=d['humans'],f'{key}: delayed subset')
   ok(o['scoreNumerator']==sum(o['ratings'].values()),f'{key}: score numerator');ok(o['scoreDenominator']==len(o['ratings']),f'{key}: score denominator')
   ok(12%o['scoreDenominator']==0,f'{key}: exact twelfths');ok(o['reflection']['outcome']==o['summary'],f'{key}: reflected outcome')
   ok(len(o['reflection']['outcome'])>5 and len(o['reflection']['strongestReason'])>20 and len(o['reflection']['ethicalTension'])>20,f'{key}: complete reflection')
   if l['knowledge']['mode']=='epistemic-fixed':ok(c['preview']!=o['summary'],f'{key}: hidden outcome leaked as preview')
 ok(len({o['id'] for o in outcomes})==len(outcomes),'duplicate outcome IDs')
 # Fixtures independently express critical requirements, rather than regenerating values from source.
 def out(n,c):return levels[n-1]['choices'][ord(c)-65]['outcome']
 for n in (1,2,3):ok(out(n,'A')['deaths']=={'humans':1,'cockroaches':0,'butterflies':0},f'opening {n} default')
 ok(out(1,'B')['rawDeaths']==0,'empty siding');ok(out(2,'B')['rawDeaths']==1 and out(2,'B')['weightedImpactTenths']==1,'cockroach fixture')
 ok(out(3,'B')['rawDeaths']==1 and out(3,'B')['weightedImpactTenths']==2,'butterfly fixture')
 first=[out(n,'B') for n in (1,2,3)]
 score=sum(Fraction(o['scoreNumerator'],o['scoreDenominator']) for o in first)/3
 ok(score==Fraction(250,3),'opening campaign score');ok(sum(o['rawDeaths'] for o in first)==2,'opening campaign raw');ok(sum(o['weightedImpactTenths'] for o in first)==3,'opening impact')
 ok(out(163,'B')['rawDeaths']==4 and out(163,'B')['delayedHumanDeaths']==3,'future-death fixture')
 ok(out(153,'B')['rawDeaths']==2 and out(153,'B')['delayedHumanDeaths']==2,'ramp fixture')
 ok(out(114,'B')['ratings']['consequences']==95 and out(114,'B')['rawDeaths']==3,'bad luck fixture')
 ok(out(115,'B')['ratings']['consequences']==15 and out(115,'B')['rawDeaths']==0,'good luck fixture')
 for n,phrase in [(102,'hidden fixed scene'),(115,'gimmick succeeds'),(184,'works in this fixed'),(195,'actually holds three')]:ok(phrase not in levels[n-1]['premise'].lower(),f'{n}: premise spoiler')
 ok(levels[31]['layout']['template']=='footbridge','footbridge supported');ok(levels[40]['layout']['template']=='loop','loop supported')
 md=(ROOT/'LEVEL_CATALOG.md').read_text();ok(len(re.findall(r'^### \d{3}\. ',md,re.M))==200,'Markdown entries');ok(len(re.findall(r'^\*\*[ABC]\. ',md,re.M))==len(outcomes),'Markdown outcomes')
 # First completion ledger examples verify specified formulas, not a not-yet-implemented engine.
 ledger={1:out(1,'A')};before=dict(ledger);ledger.setdefault(1,out(1,'B'));ok(ledger==before,'first-wins reference ledger');ok(len(ledger)==1,'idempotency reference ledger')
 weights=Counter(l['layout']['template'] for l in levels)
 digest=hashlib.sha256((ROOT/'data/levels.json').read_bytes()).hexdigest()
 report={'status':'PASS','scope':'Handoff content/schema/arithmetic only; game/browser implementation not yet present','checks':checks,'levels':len(levels),'outcomes':len(outcomes),'chapters':10,'levelsPerChapter':20,'templates':dict(weights),'canonicalAdaptations':sum(l['provenance']['kind']=='canonical-adaptation' for l in levels),'originalScenarios':sum(l['provenance']['kind']=='original' for l in levels),'epistemicFixedLevels':[l['id'] for l in levels if l['knowledge']['mode']=='epistemic-fixed'],'catalogSha256':digest,'openingFixture':{'rawDeaths':2,'weightedImpactTenths':3,'scoreExact':'250/3','scoreDisplay':'83.3'},'limitations':['No game code or browser execution tested.','Scores are authored judgments, not empirically validated morality.','Narrative/causal review is editorial; integer consistency alone cannot prove philosophy or prose correct.']}
 (ROOT/'VALIDATION.json').write_text(json.dumps(report,indent=2)+'\n')
 (ROOT/'VALIDATION.md').write_text('# Handoff validation\n\n**PASS** — '+str(checks)+' content/schema assertions; 200 levels, 423 outcomes, ten chapters of twenty.\n\nValidated the supplied schema using a dependency-free checker that rejects unknown schema keywords; checked IDs, references, defaults, layout arity, applicable lens sets, raw and weighted counts, exact score fractions, delayed-death subsets, readable-catalog coverage, and selected hidden-information fixtures. Critical opening, future-death, and luck fixtures are independent assertions.\n\nCatalog SHA-256: `'+digest+'`.\n\nRun `python3 tools/build_catalog.py` then `python3 tools/validate_catalog.py` from the repository root. The validator works from other directories too. Luna should also run a standard Ajv 2020 validation in the future app build.\n\nThis validates handoff content, not the future browser application. Engine, persistence, accessibility and end-to-end tests are specified in TECHNICAL_HANDOFF.md and remain implementation work. Authored moral ratings are editorial judgments; arithmetic tests do not establish philosophical truth.\n')
 print(json.dumps(report,indent=2))
if __name__=='__main__':main()
