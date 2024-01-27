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
            if(charac !== 248 && charac !== 230 && charac !== 229 && charac !== 32){
                console.log(charac)
                return false;
            }
        }
    }
    return true;
}

function cryptEs(text, key, operation){
    return cryptAlphabet(text, key, operation, "abcdefghijklmnopqrstuvwxyz ");
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
    return cryptAlphabet(text, key, operation, "abcdefghijklmnopqrstuvwxyzæøå ");
}

function cryptAlphabet(text, key, operation, alphabet){
    let result = "";
    for(let i = 0; i < text.length; i++){
        let index = alphabet.indexOf(text[i]);
        if(index !== alphabet.length-1) {
            if (operation === 0) {
                index = (index + key) % alphabet.length;
            } else {
                index = (index - key + alphabet.length - 1) % alphabet.length ;
            }
            if(index === alphabet.length-1){
                index = 0;
            }
        }
        result += alphabet[index];
    }
    return result;
}
