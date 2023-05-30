import './aboutMe.css'
function aboutMe() {
    function elementMaker(elementType,elementClassName='',elementContent='') {
        const element =  document.createElement(elementType);
        if (elementClassName) {
            element.classList.add(elementClassName);   
        }
        element.innerHTML = elementContent;
        return element;
    }
    
    function aboutMeBuilder(params) {
        // make a container that has about me section
        const devIntro = `
        <p>About Me:</p>
        Hello, I'm Digvijay, the creator of g_Ronin_Ramen project. I embarked on this project with the goal of implementing and furthering my understanding of webpack modules.
        As a passionate web developer, I constantly seek opportunities to enhance my skills and explore new technologies. g_Ronin_Ramen provided me with the perfect playground to dive into the world of webpack and leverage its powerful module bundling capabilities.
        Throughout the development process, I delved into configuring webpack, managing dependencies, and optimizing the build pipeline. By structuring my project using webpack modules, I was able to organize my codebase into modular and reusable components, making it easier to maintain and extend.
        The g_Ronin_Ramen project represents my commitment to continuous learning and improvement in the field of web development. It serves as a testament to my dedication to mastering webpack and harnessing its potential for building efficient, scalable, and performant web applications.
        I believe in the power of open-source collaboration, and I'm excited to share my project with the community. I invite fellow developers to explore the codebase, provide feedback, and contribute to its growth. Together, we can push the boundaries of what is possible with webpack and deliver exceptional web experiences.
        If you have any questions, suggestions, or would like to collaborate on g_Ronin_Ramen, please don't hesitate to reach out. I'm always eager to connect with fellow developers and learn from their experiences.
        Thank you for taking the time to explore g_Ronin_Ramen, and I hope it inspires you in your own web development journey.`  
        
        // insert this in a div
        const aboutMeDiv = elementMaker('p','aboutMediv',devIntro);
        
        // make another div for all img credit links

        const creditStr = `
        <div class='linkContainer'> Image of Sake by <a href="https://www.freepik.com/free-photo/sake-japanese-beverage-still-life_38169818.htm#&position=1&from_view=undefined">Freepik</a></div>
        <div class='linkContainer'> On Freepik <a href="https://www.freepik.com/free-photo/dorayaki-pancakes-stuffed-with-vanilla-japanese-food_8352096.htm#&position=3&from_view=undefined">Image by jcomp </a>of Dorayaki</div>
        <div class='linkContainer'> On Freepik <a href="https://www.freepik.com/free-photo/food-tomb-sweeping-day-festival-china-green-dumpling_37020246.htm#&position=5&from_view=undefined">Image by dashu83 </a>of Wagashi</div>
        <div class='linkContainer'> On Freepik <a href="https://www.freepik.com/free-photo/spicy-red-soup-beef-noodle-bowl-wooden-table_13497442.htm#&position=7&from_view=undefined">Image by dashu83</a> of Ramen</div>
        <div class='linkContainer'> On Freepik <a href="https://www.freepik.com/free-photo/gourmet-seafood-meal-sushi-sashimi-maki-generated-by-ai_43023301.htm#&position=9&from_view=undefined">Image by stockgiu</a> of Sushi</div>
        <div class='linkContainer'> Image by <a href="https://www.freepik.com/free-photo/asian-food-board-top-view_11312083.htm#&position=15&from_view=undefined">Freepik</a> of Goi Cuon with Peanut Sauce</div>
        <div class='linkContainer'> Image by <a href="https://www.freepik.com/free-photo/top-view-ginger-wasabi-soy-sauce-bowls-with-blank-notebook_6211245.htm#&position=17&from_view=undefined">Freepik</a> for menu backGround</div>
        <div class='linkContainer'> On Freepik <a href="https://www.freepik.com/free-vector/cloud-background-wallpaper-red-oriental-pattern-illustration-vector_18247557.htm#&position=21&from_view=undefined">Image by rawpixel.com</a> of golden Cloud</div>
        <div class='linkContainer'> Image by <a href="https://www.freepik.com/free-vector/hand-drawn-kitsune-illustration_24997008.htm#&position=25&from_view=undefined">Freepik </a>of kitsune Mask</div>
        <div class='linkContainer'> Image by <a href="https://www.freepik.com/free-vector/japanese-flag-background_2465499.htm#&position=29&from_view=undefined">Freepik </a>of red Moon</div>

        <div class='linkContainer'> Image by <a href="https://www.freepik.com/free-photo/japanese-aesthetic-with-branches-pot_36299392.htm#query=japanease%20red&position=23&from_view=search&track=ais">Freepik </a>for about section background</div>
        `;

        const creditDiv = elementMaker('div','creditDiv',creditStr)

        const aboutUsContainer = elementMaker('div','aboutUsContainer','');
        
        aboutUsContainer.append(aboutMeDiv,creditDiv)
        document.querySelector('.content').append(aboutUsContainer);
        // make container that gives all the credits to resouces
    }
    return{
        aboutMeBuilder,
    }
}

const aboutMePageMaker = aboutMe();
export default aboutMePageMaker;