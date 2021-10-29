import axios from 'axios';

const Card = (article) => {
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

    // build variables
    let cardDiv = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgcontainerDiv = document.createElement('div');
    let authorPhotoBuild = document.createElement('img');
    let authorNameSpan = document.createElement('span');

    // apply classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgcontainerDiv.classList.add('img-container');

    //apply content....here we need to add article . for each 
    headlineDiv.textContent = article.headline;
    authorPhotoBuild.setAttribute("src", article.authorPhoto); // how to set content for image / hyperlink
    authorNameSpan.textContent=article.authorName;

    // apply hierarchy
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgcontainerDiv);
    authorDiv.appendChild(authorNameSpan);

    //listener event
    cardDiv.addEventListener('click', e => {
      console.log(article.headline);
    })

    return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let placeholder = document.querySelector(selector);

  let cardData = axios.get('http://localhost:5000/api/articles')
    .then(res =>{
      let datapull = res.data.articles;
      console.log(datapull);
      //this leads to the correct variables we are seeking w/headline, authorname, photo...

      //now that we have the data, which is an array of objects... we need to focus on each individual object under bootstrap, jss, etc
      datapull.forEach (item =>{
        item.forEach (itemtwo =>{
          placeholder.appendChild(Card(itemtwo));
        })
      })

    })
    .catch (err => {
      console.error(err);
    })

}

export { Card, cardAppender }
