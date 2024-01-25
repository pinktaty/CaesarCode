var language = new XMLHttpRequest();
var hash;

function loadLanguage(){
    let data = JSON.parse(language.responseText);
    document.title = data.title;
    document.querySelector(".welcome").innerHTML = data.welcome;
    document.querySelector(".instructions").innerHTML = data.instructions;
    location.hash = hash;
}

function changeLanguage(lan){
    switch (lan) {
        case "es":
            language.open('GET', './assets/json/espaniol.json', true);
            hash = "es";
            break;
        case "en":
            language.open('GET', './assets/json/english.json', true);
            hash = "en";
            break;
        case "no":
            language.open('GET', './assets/json/norsk.json', true);
            hash = "no"
            break;
    }
    language.send();
    language.onload = function () {
        loadLanguage();
    }
}

changeLanguage("es");