var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
var setTitles = document.querySelectorAll("h4");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

let h4Tags = [];
h4Tags.concat(site1El.querySelectorAll('h4')).concat(site2El.querySelectorAll('h4')).concat(site3El.querySelectorAll('h4'));

console.log(setTitles);

for (let x = 0; x < h4Tags.length; x++) {
    h4Tags[x].setAttribute('style', 'color: blue');
    h4Tags[x].children[0].setAttribute('style', 'font-size: 30px');
    h4Tags[x].children[0].setAttribute('style', 'font-weight: bold');

}

