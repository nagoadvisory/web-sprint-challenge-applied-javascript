import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // create variables
  let topicsBuild = document.createElement('div');

  // assign class
  topicsBuild.classList.add('topics');

  //we need a function that builds a div for each input, with content, and positioning
  topics.forEach( topic => {
    let topicsCreator = document.createElement('div');
    topicsCreator.textContent = topic;
    topicsCreator.classList.add('tab');
    topicsBuild.appendChild(topicsCreator);
  });

  return topicsBuild;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  let tabsData = axios.get('http://localhost:5000/api/topics')
  // once it comes in, what do you want it to do
    .then(res => {
      console.log(res.data.topics) //tested and it works
      let tabsPlaceholder = document.querySelector(selector);
      let Lambdatabs = Tabs(res.data.topics);
      tabsPlaceholder.appendChild(Lambdatabs);

    })
    .catch (err =>{
      console.error(err);
    })


}

export { Tabs, tabsAppender }
