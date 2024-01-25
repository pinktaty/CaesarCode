var dataLanguage;

function assignLanguage(lan){
    let language = new XMLHttpRequest();
    switch (lan) {
        case "es":
            language.open('GET', './assets/json/espaniol.json', true);
            break;
        case "en":
            language.open('GET', './assets/json/english.json', true);
            break;
        case "no":
            language.open('GET', './assets/json/norsk.json', true);
            break;
    }
    language.send();
    language.onload = function () {
        dataLanguage = JSON.parse(language.responseText);
        write();
    }
}

function write(){
    document.title = dataLanguage.title;
    document.querySelector(".welcome").innerHTML = dataLanguage.welcome;
    document.querySelector(".instructions").innerHTML = dataLanguage.instructions;
    document.querySelector(".especifications").innerHTML = dataLanguage.especifications;
    document.querySelector(".encrypt").innerHTML = dataLanguage.encrypt;
    document.querySelector(".decrypt").innerHTML = dataLanguage.decrypt;
    location.hash = dataLanguage.label;
}

assignLanguage("es");

function encrypt(text){
    document.querySelector(".result").innerHTML = dataLanguage.encryptDone;
}
function decrypt(text){
    document.querySelector(".result").innerHTML = dataLanguage.decryptDone;
}
