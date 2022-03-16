function createAbout() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    
    let bigLogo = new Image();
    bigLogo.src = '../img/about2.png';
    bigLogo.classList.add('floatmenu');
    content.appendChild(bigLogo);

    let aboutBanner = new Image();
    aboutBanner.src = '../img/aboutban.jpg';
    aboutBanner.classList.add('menubanner');
    content.appendChild(aboutBanner);

    let infoBox = document.createElement('div');
    infoBox.classList.add('infobox');

    let infoText = document.createElement('p');
    infoText.innerHTML = 'We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food in LA.  We offer limited capacity onsite events in our restaurant kitchen space. And worry not, our krewe will travel to your destination of choice – from hotel ballrooms to private kitchens – to entertain groups of all sizes. We cook, we tell stories, we deliver informative culinary demonstrations and lectures, but most of all … we treat every event like you’re a guest at our dinner table. Join us!';
    infoBox.appendChild(infoText);

    let infoBtn = document.createElement('button');
    infoBtn.type = 'button';
    infoBtn.textContent = 'Book a table'
    infoBox.appendChild(infoBtn);

    let infoMap = document.createElement('iframe');
    infoMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.7958795375175!2d-90.09353068487411!3d30.49852668171944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86275dc72f2be9b5%3A0x45631c5cfb4bbdd2!2s102%20Sumner%20St%2C%20Covington%2C%20LA%2070433%2C%20USA!5e0!3m2!1sen!2sfi!4v1647469505022!5m2!1sen!2sfi';
    infoMap.classList.add('infomap')
    infoBox.appendChild(infoMap);

    content.appendChild(infoBox);
}

export { createAbout };