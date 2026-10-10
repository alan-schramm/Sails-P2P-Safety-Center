import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {createSafetyTools, registerSafetyTools} from '../lib/safety-tools.mjs';

export default function Root({children}) {
 const {siteConfig,i18n}=useDocusaurusContext();
 // Docusaurus localizes baseUrl. Shared resources always live at the site root.
 const base=siteConfig.customFields.knowledgeBaseUrl;
 useEffect(()=>{
  // Progressive enhancement: no polyfill, remote service or AI credential is needed.
  const context=document.modelContext;
  if(!context?.registerTool)return undefined;
  const controller=new AbortController();let catalogue;
  const loadCatalogue=()=>catalogue??=(fetch(base+'knowledge/index.json',{signal:controller.signal}).then(response=>{
   if(!response.ok)throw new Error('Safety catalogue is unavailable.');return response.json();
  }).catch(error=>{catalogue=undefined;throw error;}));
  registerSafetyTools(context,createSafetyTools(loadCatalogue,i18n.currentLocale),controller.signal).catch(()=>{
   controller.abort();console.warn('Safety Center: WebMCP registration unavailable; static knowledge resources remain accessible.');
  });
  return ()=>controller.abort();
 },[base,i18n.currentLocale]);
 return <><Head>
  <link rel="sitemap" type="application/xml" href={base+'sitemap-index.xml'}/>
  <link rel="alternate" type="application/json" title="WebMCP tool documentation" href={base+'webmcp.json'}/>
  <link rel="alternate" type="application/json" title="Sails safety knowledge catalogue" href={base+'knowledge/index.json'}/>
  <link rel="alternate" type="text/plain" title="AI reading index" href={base+(i18n.currentLocale==='en'?'':i18n.currentLocale+'/')+'llms.txt'}/>
  <link rel="alternate" type="text/plain" title="Complete safety guide text" href={base+(i18n.currentLocale==='en'?'':i18n.currentLocale+'/')+'llms-full.txt'}/>
  <script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@type':'WebSite','@id':siteConfig.url+base+'#website',url:siteConfig.url+base,name:'Sails P2P Safety Center',inLanguage:['en','pt-BR','es'],publisher:{'@type':'Organization',name:'Sails Protocol',url:'https://github.com/sails-protocol'}}).replace(/</g,'\\u003c')}</script>
 </Head>{children}</>;
}
