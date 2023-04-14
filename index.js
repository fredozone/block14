/***********************************************
                    Only Odds
***********************************************/

console.log("----------Only Odds----------");

const onlyOdds = [2, 4, 6, 8, 10, 11, 12] ;

for(let i = 0; i < onlyOdds.length; i++){
    if(onlyOdds[i] % 2 != 0)
    console.log(onlyOdds[i]);
}

/***********************************************
            Vowel versus Consonant
***********************************************/

console.log("----------Vowel versus Consonant----------");

let stringText = 'onomonopia';
let vowels = ['a','e','i','o','u'];
let Consonat = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let vowelsCount = 0;
let ConsonatCount = 0;


for(let k = 0; k < stringText.length; k++){
    //for to count the vowels
    for(let l = 0; l < vowels.length; l++){
        if(stringText[k] == vowels[l]){
            vowelsCount += 1;
        }
    }
    // for to count the Consonat
    for(let c=0; c < Consonat.length; c++){
        if(stringText[k] == Consonat[c]){
            ConsonatCount += 1;
        }
    }
}

console.log(stringText + " has " + ConsonatCount + " consonants and " + vowelsCount + " vowels");


/***********************************************
                Reverse Array
***********************************************/

console.log("----------Reverse Array----------");

const reversearray = [1, 2, 3];
console.log(reversearray.reverse());

/***********************************************
                    FizzBuzz
***********************************************/

console.log("----------FizzBuzz----------");

for(let j=1; j <= 100; j++){
    if(j % 3 == 0 && j % 5 == 0){
        console.log('FizzBuzz', j);
    }else if(j % 3 == 0){
        console.log('Fizz', j);
    }else if(j % 5 == 0){
        console.log('Buzz', j);
    }
}