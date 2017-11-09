var win=0;
var tries=15;
var triedLetters=[];
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q","r","s","t","u","v","w","x","y","z"];
var dashArray=[];  
var strangerThings=["eleven", "demogorgon", "hawkins", "eggos", "netflix", "madmax", "pollywog", "theupsidedown", ]  
var letterArray=[];
var word=randomWord();


//declare function for turning string into array of characters
function wordToArray(aWord){
    letterArray = aWord.split("");
}

//function for the randomization, return the variable word.
function randomWord(){
    return strangerThings[Math.floor(Math.random()*strangerThings.length)];
    console.log(word);
   
 }

 //function for printing out dashes and letters
 function replaceDash(){
    document.getElementById("currentWord").innerHTML = dashArray.join(" ");
        
    }

//declared function for creating dashes
function dashes(){ 
    wordToArray(word);    
    for(var i=0; i<letterArray.length; i++){
        if(alphabet.indexOf(letterArray[i]>=0)){
        dashArray.push("__");
        }
       
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
                    if(dashArray.toString()==letterArray.toString()){
                        win++;
                        document.getElementById("wins").innerHTML=win;
                        
                        restart();
                    }
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
    tries=15;
    document.getElementById("remainingTries").innerHTML=tries;
    triedLetters=[];
    dashArray=[];
    dashes();
    guessLetter();    
    
}

//calling my functions
randomWord();
console.log(letterArray);
dashes();
guessLetter();








