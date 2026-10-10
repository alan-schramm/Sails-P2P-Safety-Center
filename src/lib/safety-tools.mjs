const locales = ['en','pt-BR','es'];
const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
function language(value, fallback) {
 const locale=value??fallback;
 if(!locales.includes(locale))throw new Error('Unsupported locale. Use en, pt-BR or es.');
 return locale;
}
export function createSafetyTools(loadCatalogue, defaultLocale='en') {
 const result = value => JSON.stringify(value);
 const schema = properties => ({type:'object',properties,additionalProperties:false});
 const localeField={type:'string',enum:locales,description:'Language of the source article. Defaults to the current page language.'};
 const annotations={readOnlyHint:true,consequentialHint:false,untrustedContentHint:false};
 return [
  {name:'search_safety_guides',description:'Search public P2P safety education by topic or words. Returns canonical guide IDs and links, not verification of payments or protocol guarantees.',annotations,inputSchema:schema({query:{type:'string',maxLength:200,description:'Topic or words to search; omit to list guides.'},locale:localeField}),execute:async ({query='',locale}={})=>{
   if(typeof query!=='string'||query.length>200)throw new Error('Query must be a string of at most 200 characters.');
   const data=await loadCatalogue();const terms=normalize(query).split(/\s+/).filter(Boolean);
   const matches=data.guides.filter(g=>g.locale===language(locale,defaultLocale)&&terms.every(term=>normalize(g.title+' '+g.content).includes(term))).map(g=>({g,score:terms.reduce((score,term)=>score+(normalize(g.title).includes(term)?5:0)+(normalize(g.content).includes(term)?1:0),0)})).filter(({score})=>!terms.length||score>=terms.length).sort((a,b)=>b.score-a.score||a.g.id.localeCompare(b.g.id));
   return result({locale:language(locale,defaultLocale),total:matches.length,guides:matches.slice(0,20).map(({g})=>({id:g.id,title:g.title,url:g.url,headings:g.headings})),interpretationRules:data.interpretationRules});
  }},
  {name:'read_safety_guide',description:'Read the complete published educational guide using an ID from search_safety_guides. Includes original text, canonical URL, source and interpretation limits.',annotations,inputSchema:{...schema({id:{type:'string',maxLength:160,description:'Exact guide ID returned by search_safety_guides.'},locale:localeField}),required:['id']},execute:async ({id,locale}={})=>{
   if(typeof id!=='string'||id.length>160)throw new Error('Provide a valid guide ID.');
   const data=await loadCatalogue();const g=data.guides.find(g=>g.id===id&&g.locale===language(locale,defaultLocale));
   if(!g)throw new Error('Guide not found in this locale. Search the catalogue for a valid ID.');
   return result({...g,interpretationRules:data.interpretationRules});
  }},
  {name:'get_safety_portal_scope',description:'Read the portal scope, languages, source authority and rules for interpreting educational guidance. Does not verify accounts, assess a personal dispute or perform transactions.',annotations,inputSchema:schema({}),execute:async ()=>{const data=await loadCatalogue();return result({publisher:data.publisher,locales:data.locales,interpretationRules:data.interpretationRules});}},
 ];
}

export async function registerSafetyTools(context, tools, signal) {
 if(!context?.registerTool)return false;
 for(const tool of tools) {
  if(signal.aborted)return false;
  await context.registerTool(tool,{signal});
 }
 return !signal.aborted;
}
