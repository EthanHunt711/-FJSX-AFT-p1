//global variables
let linkName; 
let linkAddress; 


//targeting the links div
const links = document.querySelector('.links');
//add event listener to each delete icon based on id
links.addEventListener('click', function(evt){
    let id = evt.target.id;
    let divId = id.slice(0, id.length-3);
    document.getElementById(divId).remove();
});
//add event for opening the popup
document.querySelector('#onPageAddBtn').addEventListener('click', event => {
    document.querySelector('.inputForm').style.display = 'flex';
});

//add event for getting the links name
document.querySelector('#linkName').addEventListener('input', event => {
    linkName = document.querySelector('#linkName').value;
});
//add event for getting the link address
document.querySelector('#linkAddress').addEventListener('input', event => {
    linkAddress = document.querySelector('#linkAddress').value;
});

//function for adding new links
function addQuickLink(){
    

    //creating the innerHTML which generates a random unique number for id 
    let newLink = `
        <li class="linkListElemet" id="${Date.now()}">
            <div class="insideDiv">
                <a class="favIcon" href="${linkAddress}"><img src="./icons/links/linkpng.png" alt="Link Icon"></a>
                <a class="favText" href="${linkAddress}">${linkName}</a>
                <button class="deleteIcon" id="${Date.now()}Del"><i class="fa-solid fa-circle-minus"></i></button>
            </div>
        </li>`;
    //adding to the existing list
    document.querySelector('.linkList').innerHTML += newLink;
};

//add event for closing popup and resetting form
document.querySelector('#closeBtnIcon').addEventListener('click', event => {
    document.querySelector('.inputForm').style.display = 'none';
    document.querySelector('#linkName').value = "";
    document.querySelector('#linkAddress').value = "";
});
