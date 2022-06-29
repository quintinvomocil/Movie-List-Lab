console.log("Hello world!");

const message = document.querySelector('#message');

//Step 1: Grab the HTML element you are working with.


//Step 2: Write your function!

const addMovie = (event) => {
    event.preventDefault();
    
    const inputField = document.querySelector('input')
    
    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)
    
    const unorderedList= document.querySelector('ul')
    unorderedList.appendChild(movie)

    inputField.value = ''
}

const movieForm = document.querySelector('form')
movieForm.addEventListener('submit', addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`

    revealMessage()
}


const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    
    if (event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} Watched!`
    }   else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}


const revealMessage = () => {
    
    message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')}, 2000
    )
}