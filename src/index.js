import 'normalize.css'

import homePageMaker from './home/home.js'


homePageMaker.createHeader();
homePageMaker.homeMain();


document.querySelector(".homePera").addEventListener('click',()=>{
    homePageMaker.removeMainContainer();
    homePageMaker.homeMain();
});
