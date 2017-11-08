var win=0;
var tries=15;
var triedLetters=[];
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q","r","s","t","u","v","w","x","y","z"];
var dashArray=[];  
var strangerThings=["eleven", "demogorgon", "hawkins", "eggos", "netflix", "madmax", "pollywog", "theupsidedown", ]  


//add function for the randomization, return the variable word.
var word=strangerThings[7];



//declare function for turning string into array of characters
function wordToArray(aWord){
    return aWord.split("");
}


//variable storing the letters of the chosen word
var letterArray= wordToArray (word);
console.log(letterArray);

//function for printing out dashes and letters
function replaceDash(){
    document.getElementById("currentWord").innerHTML = dashArray.join(" ");
        
    }

//declared function for creating dashes
function dashes(){ 
    for(var i=0; i<letterArray.length; i++){
        if(alphabet.indexOf(letterArray[i]>=0)){
        dashArray.push("__");
        }
        // else{
            // dashArray.push("&nbsp;");
        // }
    }
    replaceDash();
    }

    //declared function for displaying the letters pressed by user.
    function displayLetters(){
        document.getElementById("lettersTried").innerHTML = triedLetters.join(", ");
    }

    //conditions for ending the game.
    function gameEnds(){
        if(dashArray.indexOf("__")===-1){
            win++;
            //check to see if there are still words in the stranger things array
            //the starting function for randomization should remove words used so no repeats
            //when no words are left, the game ends.
            //call the starting function at the end of this function. 
            //there needs to be another if condition if they run out of letters. It should then
            //display the word that they were trying to guess.
        }

    }

//when a key is pressed 
function guessLetter(){
document.onkeyup = function(event) {
    //making event.key a variable. 
    var letter=event.key;
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
                    console.log(dashArray[j]);
                    //however I am replacing the dash with the letter. 
                }
            replaceDash();
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

dashes();
guessLetter();



