function aceptedEs(text){
    for(let i = 0; i< text.length; i++){
        let charac =  text.charCodeAt(i);
        if(charac < 97 || charac > 122){
            if(charac !== 241 && charac !== 32){
                return false;
            }
        }
    }
    return true;
}


function aceptedEn(text){
    for(let i = 0; i< text.length; i++){
        let charac =  text.charCodeAt(i);
        if(charac < 97 || charac > 122){
            if(charac !== 32){
                return false;
            }
        }
    }
    return true;
}

function aceptedNo(text){
    for(let i = 0; i< text.length; i++){
        let charac =  text.charCodeAt(i);
        if(charac < 97 || charac > 122){
            if(charac !== 145 && charac !== 155 && charac !== 134 && charac !== 32){
                return false;
            }
        }
    }
    return true;
}

function cryptEs(text, key, operation){
    let alphabet = "abcdefghijklmnñopqrstuvwxyz ";
    let result = "";
    for(let i = 0; i < text.length; i++){
        let index = alphabet.indexOf(text[i]);
        if(index !== alphabet.length-1) {
            if (operation === 0) {
                index = (index + key) % alphabet.length;
            } else {
                index = (index - key + alphabet.length - 1) % alphabet.length - 1;
            }
        }
        result += alphabet[index];
    }
    return result;
}
function cryptEn(text, key, operation){
    let result = "";
    for(let i = 0; i < text.length; i++){
        let num = text.charCodeAt(i);
        if (num === 32) {
           result += String.fromCharCode(num);
        } else {
            if (operation === 0) {
                num = num + key - 97;
            } else {
                num = num - key - 97;
            }
            result += String.fromCharCode(num % 26 + 97);
        }
    }
    return result;
}
function cryptNo(text, key, operation){
    let result = "";
    if(operation === 0){
        for (let i = 0; i < text.length; i++) {
        }
    } else {
        for (let i = 0; i < text.length; i++) {
        }
    }
}

