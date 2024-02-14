//global variables
const apiKeyNews = "279af1cee48e4712b7084f304765fcde";

function getTheCurrentLocalNews(){
    //make the url for Sweden
    const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=se&apiKey=${apiKeyNews}`

    //fetech the data
    fetch(newsApiUrl).then(response => response.json()).then(newDetailsData => {
        //get the ul
        const newsOutlet = document.querySelector('.newsOutlet');
        // console.log(newDetailsData.articles[2])
        for(var i=0; i< newDetailsData.articles.length; i++){
            //create list element
            const newsThumbnail = document.createElement('li');
            newsThumbnail.className = 'newsThumbnail';
            //create list element image
            
            //create image if any
            const newsImage = document.createElement('div');
            newsImage.className = 'newsImage';
            if(newDetailsData.articles[i].urlToImage != null){
                newsImage.setAttribute('src', `${newDetailsData.articles[i].urlToImage}`);
                newsThumbnail.appendChild(newsImage);
            }
            //create details
            const newsDetails = document.createElement('div');
            newsDetails.className = 'newsDetails';
            newsThumbnail.appendChild(newsDetails);

            //add news content
            const newsContent = document.createElement('div');
            newsContent.className = 'newsContent';
            newsContent.textContent = `${newDetailsData.articles[i].title}`
            newsDetails.appendChild(newsContent)


            //add source Details
            const sourceDeatils = document.createElement('div');
            sourceDeatils.className ='sourceDeatils';
            sourceDeatils.innerHTML = `<div class="author"><a href=${newDetailsData.articles[i].url}>${newDetailsData.articles[i].author}</a></div>
            
            <div class="newsDate">${new Date(newDetailsData.articles[i].publishedAt).getFullYear()}-${(new Date(newDetailsData.articles[i].publishedAt).getMonth() < 10 ? '0' : '') + new Date(newDetailsData.articles[i].publishedAt).getMonth()}-${(new Date(newDetailsData.articles[i].publishedAt).getDate() < 10 ? '0' : '') + new Date(newDetailsData.articles[i].publishedAt).getDate()}</div>`
            newsDetails.appendChild(sourceDeatils);            



            newsOutlet.appendChild(newsThumbnail);
            
            
        }

    }).catch(() => alert('no news'))

};

getTheCurrentLocalNews();