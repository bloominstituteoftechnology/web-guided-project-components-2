// npm imports at the top of the file!


const breeds = [
  'mastiff',
  'affenpinscher',
  'australian',
  'mexicanhairless',
  'cocker',
]


// Declaration of a function that returns a promise.
// It's not common that we would need to do this.
function onlyLikeEvenNumbers(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve(`Good: ${number} is even`)
      } else {
        reject(`Bad: ${number} is odd`)
      }
    }, 1000)
  })
}

// Usage of a function that returns a promise.
// Very common to use utility functions that return promises:
// axios.get('URL') // returns a promise


// 👉 TASK 1- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = null


// 👉 TASK 2- Complete the `dogCardMaker` component,
// which takes an object { imageURL, breed } as its argument
// and creates the following elements:

// <div class="dog-card">
//   <img src={imageURL} class="dog-image">
//   <h3>Breed: {breed}</h3>
// </div>
function dogCardMaker(/* what here? */) {
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')

  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')

  // ?

  return null
}


// 👉 TASK 3- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file


// 👉 TASK 4- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console
//    (instructor will demo fetching a random dog from `https://dog.ceo/api/breeds/image/random`)


// 👉 TASK 5- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 TASK 6- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 TASK 7- Loop over the breeds array, fetching a dog at each iteration
