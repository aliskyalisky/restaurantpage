function createHome() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    // Big Floating Liski Food Logo
    let bigLogo = new Image();
    bigLogo.src = '../img/Liskifoodbig.png';
    bigLogo.classList.add('floatlogo');
    content.appendChild(bigLogo);

    // Background Images and a + seperator between them
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('images');
    content.appendChild(imageContainer);

    let bgImg1 = new Image();
    bgImg1.src = '../img/pic2.jpg';
    imageContainer.appendChild(bgImg1);
    let seperator = document.createElement('p');
    seperator.textContent = '+';
    imageContainer.appendChild(seperator);
    
    let bgImg2 = new Image();
    bgImg2.src = '../img/food1.jpg';
    imageContainer.appendChild(bgImg2);
    seperator = document.createElement('p');
    seperator.textContent = '+';
    imageContainer.appendChild(seperator);

    let bgImg3 = new Image();
    bgImg3.src = '../img/food2.jpg';
    imageContainer.appendChild(bgImg3);
    seperator = document.createElement('p');
    seperator.textContent = '+';
    imageContainer.appendChild(seperator);
    
    let bgImg4 = new Image();
    bgImg4.src = '../img/food3.jpg';
    imageContainer.appendChild(bgImg4);
    seperator = document.createElement('p');
    seperator.textContent = '+';
    imageContainer.appendChild(seperator);
    
    let bgImg5 = new Image();
    bgImg5.src = '../img/pic1.jpg';
    imageContainer.appendChild(bgImg5);
    seperator = document.createElement('p');
    seperator.textContent = '+';
    imageContainer.appendChild(seperator);
    
    let bgImg6 = new Image();
    bgImg6.src = '../img/pic3.jpg';
    imageContainer.appendChild(bgImg6);

    // Floating address text
   const bgTextContainer = document.createElement('div');
   bgTextContainer.classList.add('bgtext');
   content.appendChild(bgTextContainer);

   const text1 = document.createElement('p');
   text1.classList.add('bgtext1');
   text1.innerHTML = `102 Sumner Street <br>
   Los Angeles <br>
   CA <br>
   90046 <br>`;
   bgTextContainer.appendChild(text1);

   const text2 = document.createElement('p');
   text2.classList.add('bgtext2');
   text2.innerHTML = ` 34.019066 <br>
   -118.422684`;
   bgTextContainer.appendChild(text2);
}

export { createHome };