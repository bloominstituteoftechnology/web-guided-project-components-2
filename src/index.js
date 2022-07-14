import axios from "axios";
// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 

// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  /*
    <div class="dog-card">
      <img class="dog-image">
      <h3>
    </div>
  */
  const dogCard = document.createElement("div");
  const image = document.createElement("img");
  const heading = document.createElement("h3");

  // set class names, attributes and text
  dogCard.classList.add("dog-card");
  image.classList.add("dog-image");
  heading.textContent = `Breed: ${breed}`;
  image.src = imageURL;

  // create the hierarchy
  dogCard.appendChild(image);
  dogCard.appendChild(heading);
  // add some interactivity
  // onClick of the dogCard element, I want to toggle the "selected" class on the dogCard element...
  dogCard.addEventListener("click", () => {
    dogCard.classList.toggle("selected");
  })

  // never forget to return!
  return dogCard;
}

// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file

// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console
function getDogs(breed, count, selector) {
  const entryPoint = document.querySelector(selector);
  entryPoint.innerHTML = "";
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
    .then(res => {
      /**
       * 1.) STEP ONEEEEEEEEE: set data to a constant
       * 2.) STEP TWOOOOOOOOO: loop over the array
       * 3.) STEP THREEEEEEEE: call dogCardMaker
       * 4.) STEP FOURRRRRRRR: pass in arr[i] to dogCardMaker
       * 5.) STEP FIVEEEEEEEE: append to the entry point
       */
      const data = res.data.message;
      data.forEach(elem => {
        const dogData = {
          imageURL: elem,
          breed: breed
        }
        const dogElem = dogCardMaker(dogData);
        entryPoint.appendChild(dogElem);
      })
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      console.log("I made it ma!!!");
    })
}


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)

// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`
import breeds from "./breeds";

// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
const dogBtn = document.querySelector("button");
dogBtn.addEventListener("click", () => {
  /**
   * 1.) loop over the breeds array
   * 2.) for every arr[i] pass it into my getDogs function call
   */
  breeds.forEach(breed => {
    getDogs(breed, 1, ".entry");
  })
})
