
let footer = document.querySelector("footer")
let navbarHeader = document.querySelector("#navbarHeader")
let navbarHamburger = document.querySelector(".navbar-toggler")
let firstCard = document.querySelectorAll(".card")[0]
let btnEditFirstCard = document.querySelectorAll(".btn-outline-secondary")[0]
let secondCard = document.querySelectorAll(".card")[1]
let btnEditSecondCard = document.querySelectorAll(".btn-outline-secondary")[1]
let linkBootstrap = document.querySelector("link")
let header = document.querySelector("header")
let viewBtns = document.querySelectorAll('.btn-success')
let cardText = document.querySelectorAll(".card-text")
let cardImage = document.querySelectorAll(".card-img-top")
let changeButtonRight = document.querySelector(".btn-secondary")
let changeButtonLeft = document.querySelector(".btn-primary")
let cards = document.querySelectorAll(".card")
let logo = document.querySelector("strong")
let body = document.querySelector("body")

//Fonctionnalité 1

let nb_click = 0


function clickFooter() {
  nb_click += 1
  console.log(`click numéro ${nb_click}`)
}

footer.addEventListener("click", clickFooter)

//Fonctionnalité 2

navbarHamburger.addEventListener("click", clickHamburger)

function clickHamburger() {
  navbarHeader.classList.toggle("collapse")
}

//Fonctionnalité 3


function colorFirstCard() {

  firstCard.style.color = "red"
}

btnEditFirstCard.addEventListener("click", colorFirstCard)

//Fonctionnalité 4

function colorSecondCard() {

  if (secondCard.style.color == "green") {
    secondCard.style.color = "black"
  } else {
    secondCard.style.color = "green"
  }
}

btnEditSecondCard.addEventListener("click", colorSecondCard)

//Fonctionnalité 5  

function removeBootstrap() {

  if (!linkBootstrap.href) {
    linkBootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  } else {
    linkBootstrap.removeAttribute("href")
  }
}

header.addEventListener("dblclick", removeBootstrap)

//Fonctionnalité 6
// Event bubbling and delegation (cf. vidéos Jo)

viewBtns.forEach((viewBtn, index) => {
  viewBtn.addEventListener('mouseenter', () => {
    if (viewBtns[index].closest('.card').querySelector('p').style.display !== 'none') {
      viewBtns[index].closest('.card').querySelector('p').style.display = 'none'
      viewBtns[index].closest('.card').querySelector('img').style.width = '20%'

    } else {
      viewBtns[index].closest('.card').querySelector('p').style.display = 'block'
      viewBtns[index].closest('.card').querySelector('img').style.width = '100%'
    }
  })
})


//Fonctionnalité 7
function changeCardRight() {

  document.querySelector("div.album div.container div.row").append(document.querySelectorAll("div.album div.container div.row div.col-md-4")[0])

}

changeButtonRight.addEventListener("click", changeCardRight)

//Fonctionnalité 8

function changeCardLeft() {
  changeButtonLeft.removeAttribute("href")
  let newCard = document.querySelectorAll("div.album div.container div.row div.col-md-4")[5]
  document.querySelector("div.album div.container div.row").prepend(newCard)

}

changeButtonLeft.addEventListener("click", changeCardLeft)

document.addEventListener("keydown", function (e) {
  let text = fonctionTest();
  if (text === 'JS & Events') {

    switch (e.key) {
      case 'a':
        body.classList.remove("offset-md-4")
        body.classList.remove("offset-md-8")
        body.classList.remove("col-4")
        body.classList.toggle("col-4")
        break;

      case 'y':
        body.classList.remove("offset-md-4")
        body.classList.remove("offset-md-8")
        body.classList.remove("col-4")
        body.classList.toggle("col-4")
        body.classList.toggle("offset-md-4")


        break;

      case 'p':
        body.classList.remove("offset-md-4")
        body.classList.remove("offset-md-8")
        body.classList.remove("col-4")
        body.classList.toggle("col-4")
        body.classList.toggle("offset-md-8")


        break;

      case 'b':
        body.classList.remove("offset-md-4")
        body.classList.remove("offset-md-8")
        body.classList.remove("col-4")
        break;

    }

    console.log(e)
    console.log(e.key)
  }
})

// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.


// document.addEventListener("keydown", function(){
//     let text=fonctionTest();
//     if (text === 'JS & Events'){
//         logo.style.color="blue";
//     } else {
//         logo.style.color="white";
//     }
// })

function fonctionTest() {
  if (window.getSelection) {
    return window.getSelection().toString();
  }
  return '';
}

// function fonctionTest(){
//     let ecrit = 'JS & Events'
//     return true;
//     // if (window.getSelection){
//     //     return window.getSelection().toString();
//     // } else if (document.selection){
//     //     return document.selection.createRange().text;
//     // } else {
//     //     return null;
//     // }
// }​

