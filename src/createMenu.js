function createMenu() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    // Header
    let bigLogo = new Image();
    bigLogo.src = '../img/menu.png';
    bigLogo.classList.add('floatmenu');
    content.appendChild(bigLogo);

    let menuBanner = new Image();
    menuBanner.src = '../img/pic2ban.png';
    menuBanner.classList.add('menubanner');
    content.appendChild(menuBanner);

    // Menu
    let menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    // STARTERS
    let starters = document.createElement('div');
    starters.classList.add('starters');

    let startersTitle = document.createElement('h2');
    startersTitle.innerHTML = '+STARTERS';
    starters.appendChild(startersTitle);

        // *1*
        let starter1 = document.createElement('div');
        starter1.classList.add('dishcard');
        let starter1Title = document.createElement('h4');
        let starter1Desc = document.createElement('p');
        let starter1Price = document.createElement('p');
        starter1Price.classList.add('price');
        starter1Title.innerHTML = 'GOAT CHEESE WON TONS';
        starter1Desc.innerHTML = `fresh apples, mushrooms, <br>
        ginger and lime served <br>
        with sour slaw.`;
        starter1Price.innerHTML = '20';
        starter1.appendChild(starter1Title);
        starter1.appendChild(starter1Desc);
        starter1.appendChild(starter1Price);

        // *2*
        let starter2 = document.createElement('div');
        starter2.classList.add('dishcard');
        let starter2Title = document.createElement('h4');
        let starter2Desc = document.createElement('p');
        let starter2Price = document.createElement('p');
        starter2Price.classList.add('price');
        starter2Title.innerHTML = 'POTATO SKINS';
        starter2Desc.innerHTML = `stuffed with avocado, <br>
        bacon, sourcream and <br>
        scallops.`;
        starter2Price.innerHTML = '15';
        starter2.appendChild(starter2Title);
        starter2.appendChild(starter2Desc);
        starter2.appendChild(starter2Price);

        // *3*
        let starter3 = document.createElement('div');
        starter3.classList.add('dishcard');
        let starter3Title = document.createElement('h4');
        let starter3Desc = document.createElement('p');
        let starter3Price = document.createElement('p');
        starter3Price.classList.add('price');
        starter3Title.innerHTML = 'COMBINATION PLATTER';
        starter3Desc.innerHTML = `pork charcaterie from <br>
        France with a hint of <br>
        roquefort.`;
        starter3Price.innerHTML = '25';
        starter3.appendChild(starter3Title);
        starter3.appendChild(starter3Desc);
        starter3.appendChild(starter3Price);

        starters.appendChild(starter1);
        starters.appendChild(starter2);
        starters.appendChild(starter3);
        menu.appendChild(starters);

    // MAINS
    let mains = document.createElement('div');
    mains.classList.add('mains')
   
    let mainsTitle = document.createElement('h2');
    mainsTitle.innerHTML = '+MAINS';
    mains.appendChild(mainsTitle);

        // *1*
        let main1 = document.createElement('div');
        main1.classList.add('dishcard');
        let main1Title = document.createElement('h4');
        let main1Desc = document.createElement('p');
        let main1Price = document.createElement('p');
        main1Price.classList.add('price');
        main1Title.innerHTML = 'NEW YORK STEAK';
        main1Desc.innerHTML = `sterling silver premium<br>
        aged beef topped with almon <br>
        butter and mushrooms.`;
        main1Price.innerHTML = '35';
        main1.appendChild(main1Title);
        main1.appendChild(main1Desc);
        main1.appendChild(main1Price);

        // *2*
        let main2 = document.createElement('div');
        main2.classList.add('dishcard');
        let main2Title = document.createElement('h4');
        let main2Desc = document.createElement('p');
        let main2Price = document.createElement('p');
        main2Price.classList.add('price');
        main2Title.innerHTML = 'BEEF RIBS';
        main2Desc.innerHTML = `roasted rib of beef <br>
        served with bourbon black <br>
        pepper glaze.`;
        main2Price.innerHTML = '30';
        main2.appendChild(main2Title);
        main2.appendChild(main2Desc);
        main2.appendChild(main2Price);

        // *3*
        let main3 = document.createElement('div');
        main3.classList.add('dishcard');
        let main3Title = document.createElement('h4');
        let main3Desc = document.createElement('p');
        let main3Price = document.createElement('p');
        main3Price.classList.add('price');
        main3Title.innerHTML = 'SALMON ROLLS';
        main3Desc.innerHTML = `slow-cooked salmon <br>
        rolled in ginger beurre<br>
        blanc and bourbon.`;
        main3Price.innerHTML = '30';
        main3.appendChild(main3Title);
        main3.appendChild(main3Desc);
        main3.appendChild(main3Price);

        mains.appendChild(main1);
        mains.appendChild(main2);
        mains.appendChild(main3);
        menu.appendChild(mains)

    // DRINKS
    let drinks = document.createElement('div');
    drinks.classList.add('drinks')

    let drinksTitle = document.createElement('h2');
    drinksTitle.innerHTML = '+DRINKS';
    drinks.appendChild(drinksTitle);

        // *1*
        let drink1 = document.createElement('div');
        drink1.classList.add('dishcard');
        let drink1Title = document.createElement('h4');
        let drink1Desc = document.createElement('p');
        let drink1Price = document.createElement('p');
        drink1Price.classList.add('price');
        drink1Title.innerHTML = 'HOUSE WINE';
        drink1Desc.innerHTML = `made in our basement <br>
        imitating the 1954<br>
        Jearre Ouimerci.`;
        drink1Price.innerHTML = '15';
        drink1.appendChild(drink1Title);
        drink1.appendChild(drink1Desc);
        drink1.appendChild(drink1Price);

        // *2*
        let drink2 = document.createElement('div');
        drink2.classList.add('dishcard');
        let drink2Title = document.createElement('h4');
        let drink2Desc = document.createElement('p');
        let drink2Price = document.createElement('p');
        drink2Price.classList.add('price');
        drink2Title.innerHTML = 'LOCAL BEER';
        drink2Desc.innerHTML = `smokey handcrafted <br>
        light beer made in<br>
        our local brewery.`;
        drink2Price.innerHTML = '5';
        drink2.appendChild(drink2Title);
        drink2.appendChild(drink2Desc);
        drink2.appendChild(drink2Price);

        // *3*
        let drink3 = document.createElement('div');
        drink3.classList.add('dishcard');
        let drink3Title = document.createElement('h4');
        let drink3Desc = document.createElement('p');
        let drink3Price = document.createElement('p');
        drink3Price.classList.add('price');
        drink3Title.innerHTML = 'HOMEMADE LEMONADE';
        drink3Desc.innerHTML = `a special limited edition <br>
        lemonade made by our<br>
        friends daughter.`;
        drink3Price.innerHTML = '5';
        drink3.appendChild(drink3Title);
        drink3.appendChild(drink3Desc);
        drink3.appendChild(drink3Price);

    drinks.appendChild(drink1);
    drinks.appendChild(drink2);
    drinks.appendChild(drink3);
    menu.appendChild(drinks)

    menu.appendChild(drinks)
}

export { createMenu };