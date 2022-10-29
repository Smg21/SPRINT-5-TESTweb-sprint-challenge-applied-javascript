import axios from "axios";


const Card = (article) => {
  // JSX
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cards = document.createElement("div")
  cards.classList.add("card")
  const headline = document.createElement("div")
  headline.classList.add("headline")
  const author = document.createElement("div")
  author.classList.add("author")
  const image = document.createElement("div")
  image.classList.add("img-container")
  const img = document.createElement("img")
  img.src = article.authorPhoto
  const authorName = document.createElement("span")
  
headline.textContent = article.headline
authorName.textContent = article.authorName

cards.appendChild(headline);
cards.appendChild(author);
author.appendChild(image);
image.appendChild(img);
author.appendChild(authorName);

cards.addEventListener("click", ()=> {
  console.log(article.headline)
})


return cards;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardApp = document.querySelector(selector);

const options = {method: 'GET', url: 'http://localhost:5001/api/articles'};

axios.request(options).then(function (response) {
const dataArt = response.data.articles;
const dataArray =  Object.values(dataArt)
console.log(dataArray)
for (let i = 0; i < dataArray.length; i++){
  for (let j = 0; j < dataArray[i].length ; j++){
    const cardss = Card(dataArray[i][j])
    cardApp.appendChild(cardss)
  }
}
}).catch(function (error) {
  console.error(error);
});
  

}

export { Card, cardAppender }
