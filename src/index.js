// npm imports at the top of the file!

const breeds = [
  'mastiff',
  'affenpinscher',
  'australian',
  'mexicanhairless',
  'cocker',
]

// 👉 TASK 1- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = null


// 👉 TASK 2- `dogCardMaker` is a function that takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the document body.
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
