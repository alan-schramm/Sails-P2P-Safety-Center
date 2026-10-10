import React from 'react';

// One visual grammar: 24 px viewbox, rounded strokes, no emoji or icon font.
const paths = {
  fraud: <><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3h.01"/></>,
  payment: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></>,
  escrow: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></>,
  evidence: <><path d="M14 3H5v18h14V8l-5-5Z"/><path d="M14 3v5h5M8 12h8M8 16h6"/></>,
  privacy: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
  operations: <><rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 3h6v4H9zM9 12l1 1 2-2M9 17l1 1 2-2M15 12h1M15 17h1"/></>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
};
export default function SafetyIcon({name, className = ''}) {
  return <svg className={`safetyIcon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.arrow}</svg>;
}
