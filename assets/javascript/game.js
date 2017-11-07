var win=0;
var tries=15;
var triedLetters=[];
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q","r","s","t","u","v","w","x","y","z"];


//add function for the randomization, return the variable word.
var word="eleven"



//declare function for turning string into array of characters
function wordToArray(aWord){
    return aWord.split("");
}

//variable storing the letters of the chosen word
var letterArray=wordToArray(word);


//not sure why this isn't working
for(var i=0; i<=letterArray; i++){
    var dashArray=[];
    dashArray.push("__")
}

//need help with this for sure
document.getElementById("currentWord").innerHTML(dashArray.join(" "));


//when a key is pressed 
document.onkeyup = function(event) {
    //making event.key a variable. 
    var letter=event.key;
    //making sure the letter is lowercase for comparison
    letter.toLowerCase();
    //the key is checked to see if it is part of the alphabet.
    if(alphabet.indexof(letter)>=0){
        //then the key is checked to see if it is a unique letter.
        if(triedLetters.indexof(letter)===-1){
            //a new letter is added to the array of attempted letters.
            triedLetters.push(letter);
            //insert the check function here.
            for(var j=0; j<letterArray.length; j++){
                if(letterArray[j]===letter){
                    dashArray[j]=letter;
                    //however I am replacing the dash with the letter. 
                    //Does the method I am using now work?
                }
            } 
        }     
            
    }
    else{
      alert("Enter a letter!");
    }
  }





