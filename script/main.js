//unsplash access key
var ACCESS_KEY = 'WuY93lWYDAWAyJJT4heduiqcrZtCCHGHnBd_LUemTyM'
//unsplash api url
const unsplashApiUrl = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`

//function for showing date and time
function timeDate(){
    var time = new Date();
    let daysList = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
    let monthsList = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

    const timeDisplay = document.querySelector('.timeDispaly');
    timeDisplay.innerHTML = `${(time.getHours() < 10 ? '0' : '') + time.getHours()} : ${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}`

    const dateDisplay = document.querySelector('.dateDispaly');
    dateDisplay.innerHTML = `${daysList[time.getDay()]},&nbsp;${time.getDate()}&nbsp;${monthsList[time.getMonth()]}&nbsp;${time.getFullYear()}`
};


//get a random number between zero and a length of array
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// Make a refreshable background button
function getBackgound(){

    //fetch a random wallpaper
    fetch(unsplashApiUrl).then(response => response.json()).then(wallpaperData => { 
    
        //set up the original baclground
        var el = document.querySelector('#body');
        el.style.backgroundImage = `url(${wallpaperData[getRandomInt(wallpaperData.length)].urls.regular})`;

    });
};

//function to refresh with a random background wallpaper
function randomBackground(){
    //running the image shuffler function based on the numner of background images
    const refreshBtn = document.querySelector('#backgoundReloadBtn');
    refreshBtn.addEventListener('click', event => {
        getBackgound();
    });
}

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

    //making the indicators work
    document.querySelectorAll('.controls li').forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.controls .selected').classList.remove('selected');
            indicator.classList.add('selected');
            tileSlider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlides + '%)'; 
        });
    });
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



getBackgound();
randomBackground();
slideShow();
setInterval(function() {
    timeDate();
  }, 1000);
