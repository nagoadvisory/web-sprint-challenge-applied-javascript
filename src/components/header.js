const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //create variables
  let headerDiv = document.createElement('div');
  let dateSpan = document.createElement('span');
  let titleBuild = document.createElement('h1');
  let tempSpan = document.createElement('span');

  //assign classes to variables
  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp')

  //assign variables content
  dateSpan.textContent = date;
  tempSpan.textContent = temp;
  titleBuild.textContent = title;

  //assign positioning
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleBuild);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
  
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

//   <div class="header-container">
//   <!-- index.js injects the header here -->
// </div>
  let headerPlaceholder = document.querySelector(selector);
  let example = Header("Lets go Brandon","October 29, 2021", "11");

  headerPlaceholder.appendChild(example);

}

export { Header, headerAppender }
