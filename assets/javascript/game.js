//number of wins
var win=0;
//number of tries available
var tries=15;
//an array of the tried letters
var triedLetters=[];
//an array of the alphabet for data validation
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q","r","s","t","u","v","w","x","y","z"];
//an array of the possible answers
//I have used an array of objects instead of using a constructor with two arrays because 
//I use constructors to build a node.js version of hangman
//which can be found on my github, bewitchedfencer
var strangerThings=[
    {
        word:"eleven",
        image:'assets/images/eleven.png',
        used:false
    }, 
    {
        word:"demogorgon", 
        image:'assets/images/demogorgon.jpeg',
        used:false
    },
    {
        word:"hawkins", 
        image:'assets/images/hawkins.png',
        used:false
    },
    {
        word:"eggos", 
        image:'assets/images/eggos.jpg',
        used:false
    },
    {
        word:"netflix",
        image:'assets/images/netflix.jpg',
        used:false
    }, 
    {
        word:"madmax",
        image:'assets/images/madmax.png',
        used:false
    },
    {
        word:"pollywog",
        image:'assets/images/dart.jpg',
        used:false
    },
    {
        word:"the upside down",
        image:'assets/images/theupsidedownThumb.jpg',
        used:false
    },
    {
        word:"will",
        image:'assets/images/willByers.jpg',
        used:false
    },
    {   word:"dart",
        image:'assets/images/dart.jpg',
        used:false
    },
    {
        word:"dustin",
        image:'assets/images/dustin.jpg',
        used:false
    },
    {   word:"mike",
        image:'assets/images/mikeWheeler.jpg',
        used:false
    }];
//an array of the letters in the solution
var letterArray=[];
//the chosen word
var word='';
//an array for the number of dashes to guess the word
var dashArray=[];
//index number of the chosen word in the strangerThings array
var indexNum = -1;
//background music
var myTheme;
var randomObject;


//function for the randomization, return the variable word.
function randomWord(){
    randomObject = strangerThings[Math.floor(Math.random()*strangerThings.length)];
    if(randomObject.used === false){
        randomObject.used=true;
        return randomObject.word;
    }
    else{
        randomWord();
    }
 }
 

 //function for printing out dashes and letters
 function replaceDash(){
     if(dashArray){
        document.getElementById("currentWord").innerHTML = dashArray.join(" ");        
     }
        
}

//declared function for creating dashes
function dashes(word){ 
    myTheme = new Sound('assets/audio/themeMusic.mp3');
    myTheme.play();
    letterArray=word.split("");  
    //finding the index number of the word in the original array
    //fix the removal of the words from the list. Or add an element to the object that is a boolean and changes
    //when the word is reset
    indexNum = strangerThings.indexOf(word);
    for(var i=0; i<letterArray.length; i++){
        if(letterArray[i]===" "){
            dashArray.push(" ");
        }
        else{
            dashArray.push("__")
        }
    }
    replaceDash();
    console.log(dashArray);
}
   

//declared function for displaying the letters pressed by user.
function displayLetters(){
    document.getElementById("lettersTried").innerHTML = triedLetters.join(", ");
}

//a constructor for the audio
function Sound(src){
    this.sound=document.createElement("audio");
    this.sound.src=src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play=function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
};

//when a key is pressed 
function guessLetter(){
document.onkeyup = function(event) {
    //making event.key a variable. 
    var letter=event.key;
    console.log(event);
    //making sure the letter is lowercase for comparison
    letter.toLowerCase();
    //the key is checked to see if it is part of the alphabet.
    if(alphabet.indexOf(letter)>=0){
        //then the key is checked to see if it is a unique letter.
        if(triedLetters.indexOf(letter)===-1){
            //a new letter is added to the array of attempted letters.
            triedLetters.push(letter);
            displayLetters();
            tries=tries-1;
            document.getElementById("remainingTries").innerHTML=tries;
            //check letter input against letterArray.
            for(var j=0; j<letterArray.length; j++){
                if(letterArray[j]===letter){
                    //when a letter matches a certain letter in the letterArray
                    //the letter will replace the equivalent spot in the dashArray.
                    dashArray[j]=letter;
                    // console.log(dashArray[j]); for debugging
                }
                //win condition
                    if(dashArray.toString()==letterArray.toString()){
                        win++;
                        document.getElementById("wins").innerHTML=win;
                        document.getElementById("imagesForWords").setAttribute("src", randomObject.image);
                        document.getElementById("imagesForWords").style.visibility = "visible";
                        document.getElementById("currentWord").innerHTML=word;
                         //removes the chosen word from the array of choices
                        console.log(strangerThings);
                        //removing the word that was guessed correctly
                        strangerThings.splice(indexNum, 1);
                        myTheme.stop();
                        restart();
                    }
            //losing condition
            replaceDash();
            if(tries===0){
                document.getElementById("currentWord").innerHTML = word;   
                myTheme.stop();    
                restart();
            }
            } 
        }     
       else{
           alert("Enter a new letter!")
       }     
    }
    else{
      alert("Enter a letter!");
    }
  }
}
//for when the game is restarted after a word has been guessed.
function restart(){
    word=randomWord(); 
    dashArray=[]; 
    dashes(word);    
    triedLetters=[];    
    tries=15;
    document.getElementById("remainingTries").innerHTML=tries;
    document.getElementById("lettersTried").innerHTML=triedLetters;
    guessLetter();    
}

//calling my functions
word = randomWord();
dashes(word);
console.log(word);
guessLetter();
console.log(word);








