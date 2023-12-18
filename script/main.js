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
  }

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
        imageReloader(i, wallpaper, time)
        console.log(i)

    });

    
};

refreshBackgound()
