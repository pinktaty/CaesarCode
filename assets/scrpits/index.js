function loadLanguage(xhr, lan){
    let data = JSON.parse(xhr.responseText);
    document.querySelector(".welcome").innerHTML = data.welcome;
    location.hash = lan;
}

function changeLanguage(lan){
    switch (lan) {
        case "es":
            const es  = new XMLHttpRequest();
            es.open('GET', './assets/json/espaniol.json', true);
            es.send();
            es.onload = function () {
                loadLanguage(es, "es");
            }
            break;
        case "en":
            const en  = new XMLHttpRequest();
            en.open('GET', './assets/json/english.json', true);
            en.send();
            en.onload = function () {
                loadLanguage(en, "en");
            }
            break;
        case "no":
            const no  = new XMLHttpRequest();
            no.open('GET', './assets/json/norsk.json', true);
            no.send();
            no.onload = function () {
                loadLanguage(no, "no");
            }
            break;
    }
}