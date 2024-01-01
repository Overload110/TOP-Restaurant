export default function createContactDiv() {
    //changed it to an about page
    const contactDiv = document.createElement('div');
    const header = document.createElement('h2');
    header.innerHTML = "About Us"

    const desc = document.createElement('p');
    desc.classList.add('description');
    desc.innerHTML = "Tiramisu pastry fruitcake tiramisu. Lemon drops sweet lemon drops cotton candy sesame snaps ice cream caramels sweet liquorice. Candy lollipop wafer. Oat cake jelly-o toffee. Jelly biscuit souffl&eacute; gummi bears jelly tart topping. Sesame snaps pudding cookie muffin muffin apple pie cookie jujubes. Croissant cotton candy sweet roll chocolate cake apple pie candy canes sesame snaps danish. Bear claw jujubes dessert jelly beans chocolate cupcake chocolate cake. Oat cake jelly beans cupcake bonbon marzipan jujubes bonbon. Bonbon tart ice cream icing souffl&eacute; bonbon oat cake sesame snaps dessert."

    contactDiv.appendChild(header);
    contactDiv.appendChild(desc);
    return contactDiv;
}