# Proyecto 01 del programa Oracle ONE

## Descripción

El objetivo de este proyecto es poner a prueba los conocimientos adquiridos durante la primer fase del programa.

## Estructura

./index.html: archivo estructura de la página.

./assets/css/: carpeta que contiene el único archivo css del proyecto.

./assets/json/: carpeta que contiene archivos json que son el punto de entrada para cambiar la información mostrada en la página web.
./assets/json/espaniol.json: archivo json con la información a mostrar en la página en español.
./assets/json/english.json: archivo json con la información a mostrar en la página en inglés.
./assets/json/norsk.json: archivo json con la información a mostrar en la página en noruego.

./assets/scripts/: carpeta que contiene al código javascript del proyecto.
./assets/scripts/loadPage.js: código que se encarga de cargar la página según el idioma seleccionado por el esuario, el idioma por defecto es español.
./assets/scripts/logic.js: código que se encarga de encriptar o desencriptar el texto que el usuario ha proporcionado según el idioma de la página.

## Observaciones
Desarrollé este proyecto pensando en hacer una herramient pequeña pero facilmente escalable.
Al ser poca la información mostrada en la página tuve la idea de mantener al archivo html solamente como una estructura a seguir, los huesos, mientras que la información, la carne, se encuentra en archivos json; uno por cada lenguaje.
Se implementó de esa forma para hacer sencillas a las futuras modificaciones de texto que se le quisieran hacer en el futuro: cualquier persona las puede hacer modificando solo el archivo json del lenguaje al que se le están creando cambios.
Asimismo, si se quisiesen añadir más elementos a la página, uno solamente debe añadirlo a la estructura, ya que la página funciona igual para cada lenguaje.
La estructura del proyecto permite claridad al mismo, haciendo sencillo su mantenimiento.


# First Oracle ONE Program's project

## Description

This project objective is to apply the acquired knowledge obtained from the first phase of the program.

## Structure

./index.html: structure archive of the page.

./assets/css/: folder containing the only css file of the project.

./assets/json/: folder containing the files that are the entry point of what will be displayed on the web page.
./assets/json/espaniol.json: file json containing the information to display on the spanish page.
./assets/json/english.json: file json containing the information to display on the english page.
./assets/json/norsk.json: file json containing the information to display on the norwegian page.

./assets/scripts/: folder containing javascript code.
./assets/scripts/loadPage.js: code that loads the page according to the language selected by the user, default language is spanish. 
./assets/scripts/logic.js: code that encrypts or decrypts the text provided by the user according to the page's language.

## Observations
I developed this project thinking about making a small but easily scalable tool.
Since there was little information shown on the page, I had the idea of keeping the html file only as a structure to follow, the bones, while the information, the meat, is found in json files; one for each language.
It was implemented in this way to make future text modifications a simple process: anyone can do them by modifying only the json file of the language to change.
Likewise, if you want to add more elements to the page, you only have to add them to the structure, since the page works the same for each language.
The structure of the project allows clarity, making its maintenance easy.