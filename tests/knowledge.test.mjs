import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createSafetyTools,registerSafetyTools} from '../src/lib/safety-tools.mjs';
const catalogue=JSON.parse(fs.readFileSync(new URL('../static/knowledge/index.json',import.meta.url),'utf8'));
const tools=createSafetyTools(async()=>catalogue,'pt-BR');
const run=async(name,args)=>JSON.parse(await tools.find(t=>t.name===name).execute(args));

test('every article has a unique locale/id, full content and a canonical source',()=>{
 const keys=catalogue.guides.map(g=>g.locale+':'+g.id);
 assert.equal(new Set(keys).size,keys.length);
 for(const g of catalogue.guides){assert.ok(g.content.length>100);assert.ok(g.url.startsWith('https://sails-protocol.github.io/Sails-P2P-Safety-Center/'));assert.ok(g.source.startsWith('https://github.com/sails-protocol/Sails-P2P-Safety-Center/blob/main/'));}
 for(const locale of catalogue.locales)assert.ok(catalogue.guides.filter(g=>g.locale===locale).length>=18);
});
test('accent-insensitive search uses the page language and ranks receipt guidance',async()=>{
 const result=await run('search_safety_guides',{query:'comprovantes'});
 assert.equal(result.locale,'pt-BR');assert.ok(result.guides.some(g=>g.id==='fraudes/comprovantes-falsos'));
 assert.ok(result.interpretationRules.includes('educational'));
});
test('full article preserves source limitations and works in each language',async()=>{
 for(const locale of catalogue.locales){const result=await run('read_safety_guide',{locale,id:'fraudes/comprovantes-falsos'});assert.equal(result.locale,locale);assert.ok(result.content.length>300);assert.ok(result.claimStatus.includes('Not evidence'));}
});
test('unknown IDs, path traversal, invalid locale and oversized query are rejected',async()=>{
 await assert.rejects(()=>run('read_safety_guide',{id:'../../private'}));
 await assert.rejects(()=>run('read_safety_guide',{id:'intro',locale:'xx'}));
 await assert.rejects(()=>run('search_safety_guides',{query:'x'.repeat(201)}));
});
test('unsupported browsers degrade without registration; supported contexts receive read-only tools and lifecycle signals',async()=>{
 const controller=new AbortController();assert.equal(await registerSafetyTools(undefined,tools,controller.signal),false);
 const registered=[];
 const context={registerTool:async(tool,options)=>registered.push({tool,options})};
 assert.equal(await registerSafetyTools(context,tools,controller.signal),true);assert.equal(registered.length,3);
 for(const entry of registered){assert.equal(entry.tool.annotations.readOnlyHint,true);assert.equal(entry.options.signal,controller.signal);}
 controller.abort();assert.equal(await registerSafetyTools(context,tools,controller.signal),false);
});
test('scope tool returns interpretation boundaries without personal-data inputs',async()=>{
 const scope=await run('get_safety_portal_scope',{});assert.deepEqual(scope.locales,['en','pt-BR','es']);assert.ok(scope.interpretationRules.includes('not protocol policy'));
});

test('search requires every query term even when one matches the title',async()=>{
 const result=await run('search_safety_guides',{query:'comprovantes zzzmissingterm'});assert.equal(result.total,0);
});
