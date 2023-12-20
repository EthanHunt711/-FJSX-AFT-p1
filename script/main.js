//function for showing date and time
function timeDate(){
    var time = new Date();
    let daysList = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
    let monthsList = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

    const timeDisplay = document.querySelector('.timeDispaly');
    timeDisplay.innerHTML = `${time.getHours()} : ${time.getMinutes()}`

    const dateDisplay = document.querySelector('.dateDispaly');
    dateDisplay.innerHTML = `${daysList[time.getDay()]},&nbsp;${time.getDate()}&nbsp;${monthsList[time.getMonth()]}&nbsp;${time.getFullYear()}`
};

//function for changing image
function imageReloader(counter, wallpaper, time){
    var el = document.querySelector('#body');
    el.style.backgroundImage = wallpaper[counter];
    if (counter < wallpaper.length -1 ) {
        counter ++;
    } else {
        counter = 0;
    }
    setTimeout('imageReloader', time);
};

//get a random number between zero and a length of array
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// Make a refreshable background button
function refreshBackgound(){
    
    //set up variables
    var wallpaper = [];
    var time = 300;

    //add wallpapers to array
    wallpaper[0] = "url(./img/wallpaper1.jpg)";
    wallpaper[1] = "url(./img/wallpaper2.jpg)";
    wallpaper[2] = "url(./img/wallpaper3.jpg)";
    wallpaper[3] = "url(./img/wallpaper4.jpg)";
    wallpaper[4] = "url(./img/wallpaper5.jpg)";
    wallpaper[5] = "url(./img/wallpaper6.jpg)";
    wallpaper[6] = "url(./img/wallpaper7.jpg)";
    wallpaper[7] = "url(./img/wallpaper8.jpg)";

    //set up the original baclground
    var el = document.querySelector('#body');
    el.style.backgroundImage = wallpaper[0];

    
    //running the image shuffler function based on the numner of background images
    const refreshBtn = document.querySelector('#backgoundReloadBtn');
    refreshBtn.addEventListener('click', event => {
        i = Number(getRandomInt(wallpaper.length));
        //using the reloader function
        imageReloader(i, wallpaper, time);
    });
};

function slideShow(){
    //target the slider
    const tileSlider = document.querySelector('.tileSlider');
    //target the left and right arrows
    const leftArrow = document.querySelector('.leftArrow');
    const rightArrow = document.querySelector('.rightArrow');
    
    //get the number of slides
    let numberOfSlides = tileSlider.children.length; 

    // counter for arrows to make stops at both ends
    let sectionIndex = 0;
    // listener for clicks and counting right arrow
    rightArrow.addEventListener('click', function(){
        sectionIndex = (sectionIndex < (numberOfSlides - 1) ) ? sectionIndex + 1 : (numberOfSlides - 1);
        tileSlider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlides + '%)';    
    });
    // listener for clicks and counting left arrow
    leftArrow.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1 : 0;
        tileSlider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlides + '%)';    
    });

    
};


refreshBackgound();
slideShow();
setInterval(function() {
    timeDate();
  }, 1000);
