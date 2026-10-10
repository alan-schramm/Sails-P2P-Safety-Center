import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar, useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';

// On mobile, entering Guides must expose the topics rather than dismiss them.
export default function NavbarMobilePrimaryMenu() {
  const {items} = useThemeConfig().navbar;
  const mobileSidebar = useNavbarMobileSidebar();
  const secondaryMenu = useNavbarSecondaryMenu();
  const [guidesExpanded, setGuidesExpanded] = useState(false);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (!location.state?.openGuideTopics || !secondaryMenu.content) return;
    history.replace({...location, state: {...location.state, openGuideTopics: false}});
    if (!mobileSidebar.shown) mobileSidebar.toggle();
  }, [location, history, secondaryMenu.content, mobileSidebar.shown, mobileSidebar.toggle]);
  return <ul className="menu__list">
    {items.map((item, index) => {
      if (item.type === 'docSidebar' && secondaryMenu.content) {
        return <li className="menu__list-item" key={index}>
          <button type="button" className="menu__link clean-btn"
            style={{width: '100%', minHeight: 44, display: 'flex', justifyContent: 'space-between', textAlign: 'start'}}
            aria-expanded={guidesExpanded} aria-controls="mobile-guide-topics"
            onClick={() => setGuidesExpanded(value => !value)}>
            {item.label}<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: guidesExpanded ? 'rotate(90deg)' : undefined}}><path d="m9 5 7 7-7 7" /></svg>
          </button>
          {guidesExpanded && <div id="mobile-guide-topics">{secondaryMenu.content}</div>}
        </li>;
      }
      if (item.type === 'docSidebar') {
        return <NavbarItem mobile {...item} key={index} onClick={event => {
          event.preventDefault();
          const href = event.currentTarget.getAttribute('href');
          history.push(href, {openGuideTopics: true});
        }} />;
      }
      return <NavbarItem mobile {...item} key={index} onClick={() => mobileSidebar.toggle()} />;
    })}
  </ul>;
}
