import "./style.css"


const books = [
    {
        title: "Assistant to the Villain",
        author: "Hannah Nicole Maehrer",
        genre: ["Romance", "Fantasy"],
        link: "https://www.barnesandnoble.com/w/assistant-to-the-villain-hannah-nicole-maehrer/1143222643?ean=9781649375803"
    },
    {
        title: "Apprentice to the Villain",
        author: "Hannah Nicole Maehrer",
        genre: ["Romance", "Fantasy"],
        link: "https://www.barnesandnoble.com/w/apprentice-to-the-villain-hannah-nicole-maehrer/1144444055?ean=9781649377609"
    },
    {
        title: "Accomplice to the Villain",
        author: "Hannah Nicole Maehrer",
        genre: ["Romance", "Fantasy"],
        link: "https://www.barnesandnoble.com/w/accomplice-to-the-villain-hannah-nicole-maehrer/1146458535?ean=9781649379092"
    },
    {
        title: "If Cats Disappeared from the World",
        author: "Genki Kawamura",
        genre: ["Fiction"],
        link: "https://www.barnesandnoble.com/w/if-cats-disappeared-from-the-world-genki-kawamura/1127834244?ean=9781250257680"
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        genre: ["Allegory", "YA"],
        link: "https://www.barnesandnoble.com/w/lord-of-the-flies-william-golding/1100154846?ean=9780399501487"
    },
    {
        title: "I Am Rebel",
        author: "Ross Montgomery",
        genre: ["Adventure"],
        link: "https://www.barnesandnoble.com/w/i-am-rebel-ross-montgomery/1144510238?ean=9781536246803"
    },
]

//make an array for books (done)
//light/dark mode (done)
//filter by search (done)
//upload books not on site

function show(book) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", 
    `<div class="card">
        <h2 class="card-header">${book.title}</h2>
        <h3 class="card-author">${book.author}</h3>
        <h4 class="card-genre">${book.genre}</h3>
        <a href="${book.link}">
          <button>Read</button>
        </a>
    </div>`
    );
}
books.forEach((books) => show(books));

function filter(input) {
    const cards = document.querySelectorAll(".card");
    const search = input.toLowerCase();
    cards.forEach((card) => {
        const title = card.querySelector(".card-header").textContent.toLowerCase();
        const author = card.querySelector(".card-author").textContent.toLowerCase();
        const genre = card.querySelector(".card-genre").textContent.toLowerCase();
        if (title.includes(search) || author.includes(search) || genre.includes(search)) {
            card.style.display = "inline-block"
        } else {
            card.style.display = "none";
        }
    })
}
document.querySelector(".searchBar").addEventListener("click", () => {
    const input = document.querySelector(".search input").value;
    filter(input);
});


/* function uploadCards() {
    const container = document.querySelector(".container");
    const form = document.querySelector(".upload-form");
    title = document.getElementById("bookTitle");
    author = document.getElementById("bookAuthor");
    genre = document.getElementById("bookGenre");
    link = document.getElementById("bookLink");
    form.insertAdjacentHTML("beforeend", 
    `<div class="card">
        <h2 class="card-header">${books.title}</h2>
        <h3 class="card-author">${books.author}</h3>
        <h4 class="card-genre">${books.genre}</h3>
        <a href="${books.link}">
          <button>Read</button>
        </a>
    </div>`
    );
} */
document.getElementById("upload").addEventListener("submit", function(add) {
    add.preventDefault();
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const genre = document.getElementById("bookGenre").value;
    const link = document.getElementById("bookLink").value;
    const newBook = [title, author, genre, link];
    books.push(newBook);
    show(newBook);
    document.getElementById("upload").reset();
})


////////////////////////////////////

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

// (in public folder) "/img/imagename"