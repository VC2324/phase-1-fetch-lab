function fetchBooks() {
  return fetch ("https://anapioficeandfire.com/api/books")
.then (response => response.json()) 
.then (response => {
  renderBooks(response)

  
})
};


// }

// .then(jsonData => {
//   renderBooks(jsonData);
// });
  // To pass the tests, don't forget to return your fetch!


// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then (response => response.json()) 
//     .then (data => {
//       return data
//     })
// };

// function renderBooks() {
//   const books = fetchBooks()

//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   renderBooks();
// });
