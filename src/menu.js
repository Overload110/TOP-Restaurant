export default function createMenuDiv() {
    const menuDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    descDiv.classList.add('descDiv');

    const header = document.createElement('h2');
    header.innerHTML = 'Menu';

    const desc = document.createElement('p');
    desc.classList.add('description');
    desc.innerHTML = 'Breads, cakes, sweets. Anything you would want from a bakery.';

    const img = document.createElement('img');
    img.src = './assets/desserts-1868181_640.jpg'

    const source = document.createElement('p');
    source.classList.add('source');
    source.innerHTML = 'Image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1868181">Pexels</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1868181">Pixabay</a>';
    
    menuDiv.appendChild(header);
    descDiv.appendChild(desc);
    descDiv.appendChild(img);
    menuDiv.appendChild(descDiv);
    menuDiv.appendChild(source);

    return menuDiv;
}