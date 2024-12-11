const wordEl = document.querySelector(".word");
const oldwordEl = document.querySelector(".old-words");

let words = [];
let currentword = "";
let previousword =[];



fetch("Word.txt")
.then(function  (response)  {
   return response.text();
})
.then(function(text)    {
    words=text.split(",");
    console.log(words);
});

//Das passiert, wenn wir auf den Button clicken
function onClick() {
    if(currentword){
previousword.push(currentword);
//gibt das letzte Wort im HTML aus
oldwordEl.innerHTML=previousword.join(', ');


    }
    //neues Wort generieren und als currentWord speichern
currentword = getRandomWord ();
// Danach aktualisieren wir die Website, um das neue Wort
wordEl.innerHTML=currentword;
}

function getRandomNumber (maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getRandomWord(){
return words[getRandomNumber(words.length)];


}