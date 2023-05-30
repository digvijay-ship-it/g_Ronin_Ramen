import './menuStyle.css'

import goiCuonImg from './menuImg/appetizerImg/goi-cuon.jpg'
import harumakiImg from './menuImg/appetizerImg/fried-spring-rolls-cutting-board.jpg'
import onigiriImg from './menuImg/appetizerImg/rice-ball-6511221_640.jpg';
import sushiImg from './menuImg/mainCourse/suhsiPlate.jpg';
import shabuShabuImg from './menuImg/mainCourse/shubuShubu.jpeg';
import RamenImg from './menuImg/mainCourse/Ramen.jpeg';
import wagashiImg from './menuImg/desserts/wagashi.jpeg';
import dorayakiImg from './menuImg/desserts/dorayaki.jpeg';
import sakeImg from './menuImg/drinks/sake.jpeg';

function menupage() {
    

    function makeContainer(subContainerName) {
        const subcontainer = document.createElement('div');
        subcontainer.classList.add(`${subContainerName}`);
        return subcontainer;
    }
    function elementMaker(elementType,elementClassName='',elementContent='') {
        const element =  document.createElement(elementType);
        if (elementClassName) {
            element.classList.add(elementClassName);   
        }
        element.innerText = elementContent;
        return element;
    }
    function enterDish(containerToInsert,dishName,ingredientsStr,dishIntro,price,img,imgAlt) {
        // make ing Element
        const dishImg = new Image();
        dishImg.src = img
        dishImg.alt = imgAlt

        const dishInfoContainer = makeContainer('dishInfoContainer');
            const dishNameElement = elementMaker('h2','',dishName);
            const ingredientElement = elementMaker('h3','',ingredientsStr);
            const dishIntroElement = elementMaker('p','',dishIntro);
        dishInfoContainer.append(dishNameElement,ingredientElement,dishIntroElement);

        const dishPrice = elementMaker('h4','',price);

        containerToInsert.append(dishImg,dishInfoContainer,dishPrice);
    }
    function appetizerContainerFiller() {
        // add heading
        const heading = elementMaker('h1','menuHeadings','Appetizers')
            // make one container which contains for each dish
        const goiCuon =  makeContainer('goi-cuon');
        const goiCuonIngredients = `Rice paper wrappers, Cooked prawns (shrimp), Lettuce leaves, Carrot cut into thin matchsticks, Fresh mint leaves`;
        const goiCuonIntro = 'Experience the irresistible allure of rice paper rolls! Delight in succulent proteins, crisp veggies, and fragrant herbs wrapped in soft rice paper. Dip them in a tantalizing sauce for a burst of flavors that will leave you craving more.'
        const goiCuonPrice = '2$'
        enterDish(goiCuon,'Goi Cuon with Peanut Sauce',goiCuonIngredients,goiCuonIntro,goiCuonPrice,goiCuonImg,'Goi Cuon with Peanut Sauce');

        // that container has one Img and 1 more container that has NameOfDish(h2),ingredients (h6),price (p)
        const harumaki =  makeContainer('harumaki');
        const harumakiIngredients = `Cabbage, Carrots, Shrimp, Bean Sprouts, Spring Onions, Shiitake Mushrooms`;
        const harumakiIntro = 'Discover the irresistible allure of Onigiri! These delightful Japanese rice balls are a perfect harmony of flavors and textures. Sink your teeth into a delectable combination of seasoned rice, tender fillings like grilled salmon, succulent tuna, or savory pickled plum. Each bite is a culinary adventure, encapsulated in a comforting, portable package. Unwrap the edible artistry and savor the satisfying embrace of this handheld delight.';
        const harumakiPrice = '3$'
        enterDish(harumaki,'Harumaki',harumakiIngredients,harumakiIntro,harumakiPrice,harumakiImg,'harumaki');

        const onigiri =  makeContainer('onigiri');
        const onigiriIngredients = "Japanese Rice, Nori (Seaweed), Salt, Fillings (e.g., Salmon, Tuna, Umeboshi, etc.), Sesame Seeds";
        const onigiriIntro = 'Experience the irresistible allure of rice paper rolls! Delight in succulent proteins, crisp veggies, and fragrant herbs wrapped in soft rice paper. Dip them in a tantalizing sauce for a burst of flavors that will leave you craving more.'
        const onigiriPrice = '2$'
        enterDish(onigiri,'Onigiri',onigiriIngredients,onigiriIntro,onigiriPrice,onigiriImg,'onigiri');

        document.querySelector('.appetizer').append(heading, goiCuon,harumaki,onigiri);//,dish2,dish3)
    }
    function mainCourseContainerFiller() {
        // add heading
        const heading = elementMaker('h1','menuHeadings','Main Course')
            // make one container which contains for each dish
        
        const sushi = makeContainer('sushi');
        const sushiIngredients = `Sushi rice, Nori (seaweed), Fresh fish or vegetables, Soy sauce, Wasabi, Pickled ginger`;
        const sushiIntro = 'Embark on a journey of exquisite flavors with our handcrafted sushi rolls. Indulge in the perfect harmony of vinegared rice, fresh fish or vegetables, and nori. Enhance each bite with a dip of soy sauce and a touch of wasabi for an unforgettable sushi experience.';
        const sushiPrice = '5$';
        enterDish(sushi, 'Sushi Rolls', sushiIngredients, sushiIntro, sushiPrice, sushiImg, 'Assorted Sushi Rolls');
            
        // that container has one Img and 1 more container that has NameOfDish(h2),ingredients (h6),price (p)
        const shabuShabu = makeContainer('shabu-shabu');
        const shabuShabuIngredients = `Thinly sliced beef or pork, Assorted vegetables (such as napa cabbage, mushrooms, carrots), Tofu, Udon noodles, Dipping sauces (ponzu sauce, sesame sauce)`;
        const shabuShabuIntro = 'Dive into the delightful experience of Shabu Shabu, a Japanese hot pot dish. Cook tender slices of meat, fresh vegetables, and noodles in a flavorful broth right at your table. Dip each morsel in tangy ponzu sauce or creamy sesame sauce for a comforting and satisfying meal.';
        const shabuShabuPrice = '15$';
        enterDish(shabuShabu, 'Shabu Shabu Hot Pot', shabuShabuIngredients, shabuShabuIntro, shabuShabuPrice, shabuShabuImg, 'Shabu Shabu Hot Pot');


        const ramen =  makeContainer('ramen');
        const ramenIngredients = "Noodles, Broth (e.g., Tonkotsu, Shoyu, Miso, etc.), Chashu (Roasted Pork), Ajitsuke Tamago (Marinated Soft-Boiled Egg), Green Onions, Nori (Seaweed), Menma (Bamboo Shoots), Bean Sprouts, Kikurage Mushrooms";
        const ramenIntro = 'Embark on a tantalizing journey with a steaming bowl of Ramen. Dive into the depths of umami-rich broth, accompanied by springy noodles and tender chashu pork. Indulge in the medley of flavors from marinated eggs, crisp bamboo shoots, and fragrant green onions. Let each spoonful transport you to a realm of pure comfort and culinary bliss.';
        const ramenPrice = '10$'
        enterDish(ramen,'Ramen',ramenIngredients,ramenIntro,ramenPrice,RamenImg,'ramen');

        document.querySelector('.main-course').append(heading, sushi,shabuShabu,ramen);//,dish2,dish3)
    }
    function dezzertsContainerFiller(){
        // add heading
        const heading = elementMaker('h1', 'menuHeadings', 'Dezzurts');

        const wagashi = makeContainer('wagashi');
        const wagashiIngredients = 'Sweet bean paste, Mochi, Matcha powder';
        const wagashiIntro = 'Discover the artistry of Wagashi, traditional Japanese sweets. Savor the delicate combination of sweet bean paste, soft mochi, and a hint of matcha powder. Each Wagashi is a masterpiece of flavor and craftsmanship, a delightful treat for the senses.';
        const wagashiPrice = '3$';

        enterDish(wagashi, 'Wagashi', wagashiIngredients, wagashiIntro, wagashiPrice, wagashiImg, 'Assorted Wagashi');

        const dorayaki = makeContainer('dorayaki');
        const dorayakiIngredients = 'Pancake-like batter, Sweet red bean paste';
        const dorayakiIntro = 'Experience the beloved Japanese confection known as Dorayaki. Sink your teeth into fluffy, pancake-like layers filled with sweet red bean paste. Each bite of Dorayaki is a delightful combination of textures and flavors that will transport you to the streets of Japan.';
        const dorayakiPrice = '4$';
        enterDish(dorayaki, 'Dorayaki', dorayakiIngredients, dorayakiIntro, dorayakiPrice, dorayakiImg, 'Dorayaki Pancakes');
    
        document.querySelector('.dezzerts').append(heading, wagashi, dorayaki);
    }
    
    function drinksContainerFiller() {
        // add heading
        const heading = elementMaker('h1', 'menuHeadings', 'Drinks');
      
        // create container for sake
        const sake = makeContainer('sake');
        const sakeDescription = 'Indulge in the rich and refined flavors of sake, a traditional Japanese rice wine. Enjoy the smooth and aromatic taste that pairs perfectly with your meal or as a standalone refreshment.';
        const sakePrice = '8$';
        enterDish(sake, 'Sake','', sakeDescription, sakePrice, sakeImg, 'Sake');
      
        document.querySelector('.drinks').append(heading, sake);
      }
      


    function fillMenuContainer() {
        //cheaker if menu container already exist
            //then remove
        if (document.querySelector('.menuContainer')) {
            document.querySelector('.menuContainer').remove();
        }

        //make menupage container that will be
        const menuContainer = makeContainer('menuContainer')

        //make 4 child divs of menuContainer 
        const appetizerDiv = makeContainer('appetizer');
        const mainCourseDiv = makeContainer('main-course');
        const dezzertDiv = makeContainer('dezzerts');
        const drinkDiv = makeContainer('drinks');

        menuContainer.append(appetizerDiv,mainCourseDiv,dezzertDiv,drinkDiv);
        document.querySelector('.content').append(menuContainer);
        
        appetizerContainerFiller();
        mainCourseContainerFiller();
        dezzertsContainerFiller();
        drinksContainerFiller();
    }

    return{
        fillMenuContainer,
    }
}

const menuPageBuilder = menupage();
export default menuPageBuilder;