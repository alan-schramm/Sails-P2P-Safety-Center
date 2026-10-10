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
  <link rel="alternate" type="application/json" title="Sails safety knowledge catalogue" href={base+'knowledge/index.json'}/>
  <link rel="alternate" type="text/plain" title="AI reading index" href={base+(i18n.currentLocale==='en'?'':i18n.currentLocale+'/')+'llms.txt'}/>
 </Head>{children}</>;
}
