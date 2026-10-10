const fs = require('node:fs');
const path = require('node:path');
const config = require('../docusaurus.config');
const root = path.resolve(__dirname, '..');
const walk = dir => fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const rules = fs.readFileSync(path.join(root,'static/ai-content-policy.txt'),'utf8').trim();
const guides = [];
for(const locale of config.i18n.locales) {
 const dir = path.join(root,locale==='en'?'docs':`i18n/${locale}/docusaurus-plugin-content-docs/current`);
 const localeBase = config.baseUrl + (locale==='en'?'':locale+'/');
 for(const file of walk(dir).filter(p=>p.endsWith('.md')).sort()) {
  const raw=fs.readFileSync(file,'utf8');
  const front=raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const metadata=Object.fromEntries((front?.[1]||'').split(/\r?\n/).map(line=>line.match(/^(title|id|slug):\s*(.+)$/)).filter(Boolean).map(m=>[m[1],m[2].replace(/^['"]|['"]$/g,'')]));
  const content=raw.slice(front?.[0].length||0).trim();
  const id=metadata.id||path.relative(dir,file).replaceAll(path.sep,'/').replace(/\.md$/,'');
  const route=metadata.slug==='/'?'':metadata.slug?.replace(/^\//,'')||id;
  const url=config.url+localeBase+'guides'+(route?'/'+route:'');
  guides.push({id,locale,title:metadata.title||content.match(/^# (.+)$/m)?.[1]||id,url,content,source:'https://github.com/sails-protocol/Sails-P2P-Safety-Center/blob/main/'+path.relative(root,file).replaceAll(path.sep,'/'),headings:[...content.matchAll(/^#{2,3} (.+)$/gm)].map(m=>m[1]),claimStatus:'Educational article; consult the article’s explicit claim classification. Not evidence of implemented protocol guarantees.'});
 }
}
const output=path.join(root,'static/knowledge');fs.mkdirSync(output,{recursive:true});
fs.writeFileSync(path.join(output,'index.json'),JSON.stringify({schemaVersion:1,publisher:'Sails Protocol',locales:config.i18n.locales,interpretationRules:rules,guides},null,2)+'\n');
for(const locale of config.i18n.locales) {
 const localeDir=path.join(root,'static',locale==='en'?'':locale);fs.mkdirSync(localeDir,{recursive:true});
 const articles=guides.filter(g=>g.locale===locale);
 const base=config.url+config.baseUrl;
 const preface=`# Sails P2P Safety Center — ${locale}\n\n${rules}\n\n## Machine-readable resources\n- Structured catalogue: ${base}knowledge/index.json\n- Full text: ${base}${locale==='en'?'':locale+'/'}llms-full.txt\n- WebMCP documentation: ${base}webmcp.json\n\n`;
 fs.writeFileSync(path.join(localeDir,'llms.txt'),preface+'## Guides\n'+articles.map(g=>`- [${g.title}](${g.url})`).join('\n')+'\n');
 fs.writeFileSync(path.join(localeDir,'llms-full.txt'),preface+articles.map(g=>`## ${g.title}\nCanonical URL: ${g.url}\nSource: ${g.source}\n\n${g.content}`).join('\n\n---\n\n')+'\n');
}
console.log(`Generated ${guides.length} articles across ${config.i18n.locales.length} locales.`);
