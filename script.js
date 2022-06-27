let popupElement = document.querySelector('.window');
let btns = document.querySelectorAll('.open-window');
let btnClose = document.querySelector('.close-window');
let icon = document.querySelector('.icon');
let menu = document.querySelector('.navmenu');
let projects = [{
        name: "Flashcards 1",
        description: "This first project will be created soon... And here is its description :)",
        url: "https://github.com/Luna0788"
    },
    {
        name: "Flashcards 2",
        description: "This second project will be created soon... And here is its description :)",
        url: "https://github.com/Luna0788"
    }];


btns.forEach((el, ind) => {
    el.addEventListener('click', function() {showPopup(ind)}
)});

btnClose.onclick = function () {
    popupElement.style.display = 'none';
};

function showPopup (n){
    popupElement.firstElementChild.firstElementChild.textContent = projects[n].name;
    let addA= popupElement.firstElementChild.querySelector('a');
    addA.href = projects[n].url;
    addA.textContent = projects[n].name;
    document.querySelector('.projectDescription').textContent = projects[n].description;
    popupElement.style.display = 'block';
}

icon.onclick = function () {
    icon.classList.toggle('hamburger');
    menu.classList.toggle('hamburger');
};