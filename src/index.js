import 'normalize.css'

import homePageMaker from './home/home.js'
import menuPageBuilder from './menu/menu.js'


homePageMaker.createHeader();
homePageMaker.homeMain();


document.querySelector(".homePera").addEventListener('click',()=>{
    homePageMaker.removeMainContainer();
    homePageMaker.homeMain();
});

document.querySelector(".menuPera").addEventListener('click',()=>{
    homePageMaker.removeMainContainer();

    //make menu page
    menuPageBuilder.fillMenuContainer();
});