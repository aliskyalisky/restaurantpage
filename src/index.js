import { createHome } from './createHome.js';
import { createMenu } from './createMenu.js';
import { createAbout } from './createAbout';

const homeLink = document.querySelector('.homelink')
const menuLink = document.querySelector('.menulink')
const aboutLink = document.querySelector('.aboutlink')

homeLink.onclick = createHome;
menuLink.onclick = createMenu;
aboutLink.onclick = createAbout;

createHome();