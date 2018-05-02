//number of wins
var win=0;
//number of tries available
var tries=15;
//an array of the tried letters
var triedLetters=[];
//an array of the alphabet for data validation
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q","r","s","t","u","v","w","x","y","z"];
//an array of the possible answers
var strangerThings=["eleven", "demogorgon", "hawkins", "eggos", "netflix", "madmax", "pollywog", "theupsidedown" ];
//an array of the letters in the solution
var letterArray=[];
//the chosen word
var word='';
//an array for the number of dashes to guess the word
var dashArray=[];

//function for the randomization, return the variable word.
function randomWord(){
    return strangerThings[Math.floor(Math.random()*strangerThings.length)];
 }
 

 //function for printing out dashes and letters
 function replaceDash(){
     if(dashArray){
        document.getElementById("currentWord").innerHTML = dashArray.join(" ");        
     }
        
    }

//declared function for creating dashes
function dashes(word){ 
    letterArray=word.split("");   
    for(var i=0; i<letterArray.length; i++){
        dashArray.push("__");
    }
    replaceDash();
    console.log(dashArray);
}
   

    //declared function for displaying the letters pressed by user.
    function displayLetters(){
        document.getElementById("lettersTried").innerHTML = triedLetters.join(", ");
    }

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
                    if(dashArray.toString()==letterArray.toString()){
                        win++;
                        document.getElementById("wins").innerHTML=win;
                        restart();
                    }
            replaceDash();
            if(tries===0){
                document.getElementById("currentWord").innerHTML = word;       
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








