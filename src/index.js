// Imports at the top of the file!
// We never nest imports inside blocks of code!
import axios from 'axios'

// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With HTTPie (command-line HTTP Client)
//  * With Postman (HTTP Client with GUI)
//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]

// how to explore an API
// "hit the endpoint" by putting the URL into Chrome, or by using fetch, or by using Postman
// look at the data you get back
// that way you know the shape of the object, or array, etc

// fetch this url:
//  https://lambda-times-api.herokuapp.com/quotes
// get out the data
// console log the data
const quotesPromise = fetch('https://lambda-times-api.herokuapp.com/quotes')

quotesPromise
  .then(response => response.json())
  .then(data => console.log(data))

const dogPromise = fetch('https://dog.ceo/api/breed/retriever/images/random/5')
dogPromise
  .then(response => response.json())
  .then(dogData => console.log(dogData)) // make components inside the .then

// can I use the dogData outside of the .then??
// console.log(dogData)

const dogMockData =[
  "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3315.jpg",
  "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3753.jpg",
  "https://images.dog.ceo/breeds/retriever-curly/n02099429_282.jpg",
  "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_5306.jpg",
  "https://images.dog.ceo/breeds/retriever-golden/n02099601_3414.jpg"
] 


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
// Where to append our components, after we have made them?
const entryPoint = document.querySelector(".entry");


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}

// how do we use our data to make components and attach the components to the DOM?

// loop over our data
// dogMockData.forEach(mockUrl => {
// // use each member of our data to create a component
//   const dogCard = dogCardMaker({ breed: 'retriever', imageURL: mockUrl })
// // attach the component to the DOM
//   entryPoint.appendChild(dogCard)
// })


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file
      // where to look to know if we need to install axios?

// const quotesPromise = fetch('https://lambda-times-api.herokuapp.com/quotes')
axios
  .get('https://lambda-times-api.herokuapp.com/quotes')
  .then(response => console.log(response.data)) // look ma, no response.json()!
  .catch(drama => console.log('handle the drama'))


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console
// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)
function getDogs(breed, count) {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
      .then(response => {
         const actualDogUrls = response.data.message
         actualDogUrls.forEach(dogUrl => {
         const dogCard = dogCardMaker({ breed, imageURL: dogUrl })
        entryPoint.append(dogCard)
         });
        })
      .catch(error => console.error(error))
      .finally(() => console.log('done'))
}
getDogs('lhasa', 6)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration
