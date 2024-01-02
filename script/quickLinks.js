function quickLinksTile(){
    // target the quicklinks ul 
    const linkList = document.querySelector('.linkList');

    //create a list element
    const linkElement = document.createElement('li');
    linkElement.className = 'linkListElements';
    // create a div inside the list elemet
    const linkElementDiv = linkElement.createElement('div');
    linkElementDiv.className ='insideDiv';

    linkElement.appendChild(linkElementDiv);


    linkList.appendChild(linkElement);



};

// quickLinksTile();


function deleteQuickLink(){
    let delIcons = document.getElementsByClassName('deleteIcon');
    let linkListElemts = document.getElementsByClassName('linkListElemet');

    for (var i = 0; i < delIcons.length; i++){
        delIcons[i].addEventListener('click', event => {
            if(linkListElemts[i].style.dispaly === 'block'){
                linkListElemts[i].style.display = 'none'
            } else {
                linkListElemts[i].style.dispaly = 'block'
            }
        })
    }
};


function addQuickLinks(){
    const addLink = document.querySelector('.addLinkBtn')
    addLink.addEventListener('click', event => {
        console.log('find me')
    })
};



deleteQuickLink();
addQuickLinks();