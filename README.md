# First Oracle ONE Program's project

## Description

For this project my objetive was to create a small but easily scalable tool.
Since there was little information shown on the page, I had the idea of keeping the html file only as a structure to follow, the bones, while the information, the meat, is found in json files; one for each language.
It was implemented in this way to make future text modifications a simple process: anyone can do them by modifying only the json file of the language to change.
Likewise, if you want to add more elements to the page, you only have to add them to the structure, since the page works the same for each language.
The structure of the project allows clarity, making its maintenance easy.

## Structure

- `./index.html`: structure archive of the page.

- `./assets/css/`: folder containing the only css file of the project.

- `./assets/json/`: folder containing the files that are the entry point of what will be displayed on the web page.

- `./assets/json/espaniol.json`: file json containing the information to display on the spanish page.

- `./assets/json/english.json`: file json containing the information to display on the english page.

- `./assets/json/norsk.json`: file json containing the information to display on the norwegian page.

- `./assets/scripts/`: folder containing javascript code.

- `./assets/scripts/loadPage.js`: code that loads the page according to the language selected by the user, default language is spanish.

- `./assets/scripts/logic.js`: code that encrypts or decrypts the text provided by the user according to the page's language.

* * *

# Proyecto 01 del programa Oracle ONE

## Descripción

Mi objetivo en este proyecto era hacer una herramienta pequeña pero facilmente escalable.
Al ser poca la información mostrada en la página tuve la idea de mantener al archivo html solamente como una estructura a seguir, los huesos, mientras que la información, la carne, se encuentra en archivos json; uno por cada lenguaje.
Se implementó de esa forma para hacer sencillas las futuras modificaciones de texto que se le quisieran hacer: cualquier persona las puede hacer por medio del archivo json del lenguaje al que se le están creando los cambios.
Asimismo, si se quisiesen añadir más elementos a la página, uno solamente debe añadirlo a la estructura, ya que la página funciona igual para cada lenguaje.
Usando esta estructura se mantiene la claridad del proyecto, haciendo sencillo su mantenimiento.

## Estructura

- `./index.html`: archivo estructura de la página.

- `./assets/css/`: carpeta que contiene el único archivo css del proyecto.

- `./assets/json/`: carpeta que contiene archivos json que son el punto de entrada para cambiar la información mostrada en la página web.

- `./assets/json/espaniol.json`: archivo json con la información a mostrar en la página en español.

- `./assets/json/english.json`: archivo json con la información a mostrar en la página en inglés.

- `./assets/json/norsk.json`: archivo json con la información a mostrar en la página en noruego.

- `./assets/scripts/`: carpeta que contiene al código javascript del proyecto.

- `./assets/scripts/loadPage.js`: código que se encarga de cargar la página según el idioma seleccionado por el usuario, el idioma por defecto es español.

- `./assets/scripts/logic.js`: código que se encarga de encriptar o desencriptar el texto que el usuario ha proporcionado según el idioma de la página.
