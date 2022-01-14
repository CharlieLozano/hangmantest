//////////////////
/// Variables ////
//////////////////
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let words = ['cat','lion','panda'];
let word = words[Math.floor(Math.random() * words.length)].toUpperCase();
let hiddenWord = ''
let rightGuesses = []
let wrongGuesses = []
let opportunities = 6
let gameOn = true

//////////////////
/// Functions ///
/////////////////
    
// Generate hidden and revealed letters
function generateHiddenWord(){
    hiddenWord = ''
    for(let i = 0; i < word.length; i++){
        if(rightGuesses.includes(word[i])){
            hiddenWord += word[i] + ' '
        } else {hiddenWord += '_ '}        
    }   
}
 
generateHiddenWord()

//Update html by id
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("hidden").innerHTML = `${hiddenWord}`;  
    document.getElementById("right").innerHTML = `Right Letters: ${rightGuesses.join(' ')}`;  
    document.getElementById("wrong").innerHTML = `Wrong Letters: ${wrongGuesses.join(' ')}`; 
    document.getElementById("opportunities").innerHTML = `Opportunities: ${opportunities}`;  
});

////////////////
/// Events ////
//////////////

document.addEventListener('keypress', (event) => {
    // Get Key
    var key = event.key.toUpperCase();

    if(gameOn && opportunities){
        
        if(alphabet.includes(key)){
            // Register Input on HTML
            document.getElementById("input").innerHTML = `Input: ${key}`;
            // If key in hiddenWord
            if(word.includes(key)){

                if(!rightGuesses.includes(key)){
                    rightGuesses.push(key)
                    document.getElementById("right").innerHTML = `Right Letters: ${rightGuesses.join(' ')}`; 
                   }

                generateHiddenWord()
                document.getElementById("hidden").innerHTML = `${hiddenWord}`;  
                
                if(!hiddenWord.includes('_')){
                        document.getElementById("input").innerHTML = `You Won`;
                        document.getElementById("input").style.color = 'green';
                        gameOn = false
                   }

               }
            
            // if key not in hiddenWord
            else{

                if(!wrongGuesses.includes(key)){
                    wrongGuesses.push(key)
                    document.getElementById("wrong").innerHTML = `Wrong Letters: ${wrongGuesses.join(' ')}`; opportunities --;
                    document.getElementById("opportunities").innerHTML = `Opportunities: ${opportunities}`; 
                    if(!opportunities){
                        document.getElementById("input").innerHTML = `You Lost`;
                        document.getElementById("input").style.color = 'red';
                    }
                    
                   }

               }

        }

        
    }
    
    
    // If key in alphabet

}, false); // This is the end of function, don't be confused by the false argument.