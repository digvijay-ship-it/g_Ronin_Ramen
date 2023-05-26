import "./homeStyle.css"

import brach from './homeImg/blossomBranchLR1.png'
import tree from './homeImg/blossomTree.png';
import samurai from './homeImg/samuraiGirl.png';
import menuIconlocation from './homeImg/menuCard.png';
import homeIconLocation from './homeImg/homeIcon.png';
import aboutMeImg from './homeImg/AboutMe.png';
import backImg from './homeImg/cloud_moon.jpg'

function homePage() {
    //select body tag
    const body = document.querySelector('body');
    //
    const divContent = document.createElement('div');
    divContent.style.backgroundImage = `url(${backImg})`





    const sakunaBranch = new Image();
    sakunaBranch.src = brach;
    sakunaBranch.alt = "brach of cherry blossom";
    sakunaBranch.classList.add("branchLR");

    const blossomTree = new Image();
    blossomTree.src = tree;
    blossomTree.alt = 'tree of a cherry blossom';
    blossomTree.classList.add('tree');

    const samuraigirl = new Image();
    samuraigirl.src = samurai;
    samuraigirl.alt = 'samurai girl eating food';
    samuraigirl.classList.add('samurai');

    //
    const homePageAncher = document.createElement("a");
    homePageAncher.classList.add('home')
    homePageAncher.classList.add('wobble')

    const homeIcon = new Image();
    homeIcon.src = homeIconLocation;
    homeIcon.alt = "pink restaurent"
    homePageAncher.append(homeIcon);
    
    //
    const menuPageAncher = document.createElement("a");
    menuPageAncher.classList.add('menu')
    menuPageAncher.classList.add('wobble')
    const menuIcon = new Image();
    menuIcon.src = menuIconlocation;
    menuIcon.alt = "Restaurent menu"
    menuPageAncher.append(menuIcon);

    //
    const aboutMeAncher = document.createElement("a");
    aboutMeAncher.classList.add('aboutMe')
    aboutMeAncher.classList.add('wobble')
    const aboutMeIcon = new Image();
    aboutMeIcon.src = aboutMeImg;
    aboutMeIcon.alt = "About me"
    aboutMeAncher.append(aboutMeIcon);



    divContent.append(sakunaBranch,blossomTree,samuraigirl,homePageAncher,menuPageAncher,aboutMeAncher);
    divContent.classList.add('content');

    body.append(divContent);
    
    
}
homePage();
function makeHead(){
}

function makefooter(){
    
}