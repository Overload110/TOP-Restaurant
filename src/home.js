export default function createHomeDiv() {
    const homeDiv = document.createElement('div');
    
    const welcome = document.createElement('h2');
    welcome.innerHTML = "Welcome to";

    const header = document.createElement('h1');
    header.innerHTML = "Some Bakery";

    homeDiv.appendChild(welcome);
    homeDiv.appendChild(header);

    return homeDiv;
}