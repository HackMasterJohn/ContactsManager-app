import { useState } from 'react';
import '../styles/App.scss';

const navLinks = [
    { id: 0, url: '/about-us', name: 'Home' },
    { id: 1, url: '/about-us', name: 'Look Up Contact' },
    { id: 2, url: '/projects', name: 'Add Contact' },
    { id: 3, url: '/services', name: 'Edit Contact' },
  ];
  
  const CLOSED_MENU = "menu";
  const OPEN_MENU = "menu active";
  function openOrCloseMenuStyle (menu)
  {
    if (menu === CLOSED_MENU){
      return OPEN_MENU;
    }
    return CLOSED_MENU;
  }

export function SideBarMenu() {
  const [menuStyle, setMenuStyle] = useState(OPEN_MENU);
  return (
    <div className="sideBarMenu">
      <button onClick={()=> setMenuStyle(openOrCloseMenuStyle(menuStyle))}>menu</button>
      <div className={"sideBarMenu " + menuStyle}>               
        <ul>
          {navLinks.map(({ id, url, name }) => (
            <li key={id}>
              <a key={id} href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
