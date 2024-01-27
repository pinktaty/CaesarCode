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
    document.querySelector(".text").placeholder = dataLanguage.placeholderText;
    document.querySelector(".instructions").innerHTML = dataLanguage.instructions;
    document.querySelector(".especifications").innerHTML = dataLanguage.especifications;
    document.querySelector(".key").innerHTML = dataLanguage.key;
    document.querySelector(".numberKey").placeholder = dataLanguage.placeholderKey;
    document.querySelector(".encrypt").innerHTML = dataLanguage.encrypt;
    document.querySelector(".decrypt").innerHTML = dataLanguage.decrypt;
    location.hash = dataLanguage.label;
}

assignLanguage("es");

function checkText(operation){
    let text = document.querySelector(".text").value;
    let key = document.querySelector(".numberKey").value;
    if(text === "" || key === ""){
        return;
    }

    let aceptedText;
    switch (dataLanguage.label) {
        default:
            aceptedText = aceptedEs(text);
            break;
        case "en":
            aceptedText = aceptedEn(text);
            break;
        case "no":
            aceptedText = aceptedNo(text);
            break;
    }

    if(!aceptedText){
        alert(dataLanguage.alert);
        return;
    }
    send(text, parseInt(key), operation);
}

function send(text, key, operation){
    let result;
    switch (dataLanguage.label) {
        default:
            result = cryptEs(text, key, operation);
            break;
        case "en":
            result = cryptEn(text, key, operation);
            break;
        case "no":
            result = cryptNo(text, key, operation);
            break;
    }

    document.querySelector(".message").innerHTML = result;
    if(operation === 0){
        document.querySelector(".result").innerHTML = dataLanguage.encryptDone;
    } else {
        document.querySelector(".result").innerHTML = dataLanguage.decryptDone;
    }
}

