import "./homeStyle.css"

import yinYangImg from './homeImg/yin-and-yang-152829_1920.png';
import ninjaImg from './homeImg/ninja.png';
import samuraiImg from './homeImg/whiteSamurai.png';
import ninjaHeadbandImgSrc from './homeImg/ninjaheadBand1-1.png';
import samuraiMaskSrc from './homeImg/KitsuneMaskNotKabutoNotMempo.png';
function homePage() {
    const body = document.querySelector('body');

    const divContent = document.createElement('div');
    divContent.classList.add('content');

    const createHeader = () => {
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header');

        const homeDiv = document.createElement('div');
        homeDiv.classList.add('home');
        homeDiv.innerHTML = '<p class="homePera wobble">Home</p>';

        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        menuDiv.innerHTML = '<p class="menuPera wobble">Menu</p>';

        const aboutMeDiv = document.createElement('div');
        aboutMeDiv.classList.add('aboutMe');

        aboutMeDiv.innerHTML = '<p class="mePera wobble">About Me</p>';
        
        headerDiv.append(homeDiv,menuDiv,aboutMeDiv);
        divContent.append(headerDiv);
    }
    function enterLeftSideInHomeMain () {
        const leftSubMain = document.createElement('div');
        leftSubMain.classList.add('leftSubMain');

        const ninja = new Image();
        ninja.src = ninjaImg;
        ninja.alt = 'ninja in black clothes';
        ninja.classList.add('ninja');

        leftSubMain.append(ninja);
        return leftSubMain
    }
    function enterRightSideInHomeMain () {
        const rightSubMain = document.createElement('div');
        rightSubMain.classList.add('rightSubMain');

        const samurai = new Image();
        samurai.src = samuraiImg;
        samurai.alt = 'samurai in white clothes';
        samurai.classList.add('samurai');
        rightSubMain.append(samurai);
        return rightSubMain;
    }
    function enterMidSideInHomeMain() {
        const yinYangContainer = document.createElement("div");
        yinYangContainer.classList.add('yinYangdiv');

        const yinYang = new Image();
        yinYang.src = yinYangImg;
        yinYang.alt = 'Yin Yang';
        yinYang.classList.add('yinYang');
        yinYangContainer.append(yinYang);
        return yinYangContainer;
    }
    function enterWeaponInHomeMain() {
        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add('weaponDiv');

        const headbandDiv = document.createElement("div");
        headbandDiv.classList.add('headbandDiv');

        const headband = new Image();
        headband.src = ninjaHeadbandImgSrc;
        headband.alt = 'ninja headBand'
        headbandDiv.append(headband);


        const maskDiv = document.createElement("div");
        maskDiv.classList.add('maskDiv');
        const mask = new Image();
        mask.src = samuraiMaskSrc;
        mask.alt = 'Samurai Kitsune'
        maskDiv.append(mask);
        
        weaponDiv.append(headbandDiv,maskDiv)
        return weaponDiv;
    }
    function makeMainContainer() {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('mainContainer');
        divContent.append(mainDiv);
    }

    function fillMainContainerHome(params) {
        const leftSideOfMain = enterLeftSideInHomeMain();
        const rightSideMain = enterRightSideInHomeMain();
        const yinYang = enterMidSideInHomeMain();
        const weaponDiv = enterWeaponInHomeMain();

        document.querySelector('.mainContainer').append(leftSideOfMain,yinYang,rightSideMain,weaponDiv);
    }

    const homeMain = () =>{
        makeMainContainer();
        fillMainContainerHome();
    }
    body.append(divContent);
    return{
        createHeader,homeMain,makeMainContainer
    }    
}
const homePageMaker = homePage();
export default homePageMaker;