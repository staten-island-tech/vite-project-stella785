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

function show(books) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", 
    `<div class="card">
        <h2 class="card-header">${books.title}</h2>
        <h3 class="card-author">${books.author}</h3>
        <h4 class="card-genre">${books.genre}</h3>
        <a href="${books.link}">
          <button>Read</button>
        </a>
    </div>`
    );
}
books.forEach((books) => show(books));


document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});