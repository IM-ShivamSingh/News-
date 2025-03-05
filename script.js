const API_KEY="ef7c6ebd430641e5855c60ab3bd10b7d";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>fetchNews("India"));

function reload(){
    window.location.reload();
}
async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data=await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const cardsContainer=document.getElementById("cards-container");
    const newsCardTemplate=document.querySelector("#template-news-card")
    cardsContainer.innerHTML="";

    articles.forEach(article=>{
        if(!article.urlToImage)
            return;
        const cardClone=newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);
    })
    function fillDataInCard(cardClone,articles){
        const newsImg = cardClone.querySelector('#news-img');
        const newsTitle = cardClone.querySelector('#news-title');
        const newsSource = cardClone.querySelector('#news-source');
        const newsDesc = cardClone.querySelector('#news-desc');


        newsImg.src=articles.urlToImage;
        newsTitle.innerHTML=articles.title;
        newsDesc.innerHTML=articles.description;

        const date=new Date(articles.publishedAt).toLocaleString("en-US",{
            timeZone:"Asia/Jakarta"
        });
        newsSource.innerHTML=`${articles.source.name} : ${date}`

        cardClone.firstElementChild.addEventListener("click",()=>{
            window.open(articles.url,"_blank");
        });
    }
}
let currSelectNav=null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem=document.getElementById(id);
    currSelectNav?.classList.remove("active");
    currSelectNav=navItem;
    currSelectNav.classList.add('active');
}
const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    currSelectNav?.classList.remove("active");
    currSelectNav = null;
});