import createHomeDiv from './home.js';
import createContactDiv from './contact.js';
import createMenuDiv from './menu.js';

const tabs = ['home', 'contact', 'menu'];
const mainDiv = document.getElementById('main');

function switchTab(tab) {
    mainDiv.innerHTML = '';
    if (tab === 'home') {
        mainDiv.appendChild(createHomeDiv());
    } else if (tab === 'contact') {
        mainDiv.appendChild(createContactDiv());
    } else if (tab === 'menu') {
        mainDiv.appendChild(createMenuDiv());
    }
}

// Setup event listeners
tabs.forEach(tab => {
    document.getElementById(tab).addEventListener('click', () => switchTab(tab));
});

// Switch to the first tab by default
switchTab(tabs[0]);