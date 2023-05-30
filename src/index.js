import 'normalize.css'

import homePageMaker from './home/home.js'
import menuPageBuilder from './menu/menu.js'
import aboutMePageMaker from './aboutMe/aboutMe.js'


homePageMaker.createHeader();
homePageMaker.homeMain();


document.querySelector(".homePera").addEventListener('click',()=>{
    homePageMaker.removeMainContainer();
    homePageMaker.homeMain();
});

document.querySelector(".menuPera").addEventListener('click',()=>{
    homePageMaker.removeMainContainer();
    menuPageBuilder.fillMenuContainer();
});
document.querySelector(".aboutMe").addEventListener('click',()=>{
    const parentDiv = document.querySelector('.content');
    if (parentDiv.children.length >= 2) {
        const secondChild = parentDiv.children[1];
        secondChild.remove();
    }
    aboutMePageMaker.aboutMeBuilder();
});
