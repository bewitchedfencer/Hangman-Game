var win=0;
var tries=15;
var triedLetters=[];
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q","r","s","t","u","v","w","x","y","z"];
var dashArray=[];    


//add function for the randomization, return the variable word.
var word="eleven"



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
        dashArray.push("__")
    }
    replaceDash();
    // document.getElementById("currentWord").innerHTML = dashArray.join(" ");
    }

    function displayLetters(){
        
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



