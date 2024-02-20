$(function() {
    console.log("doc is ready"); 

    $("#btnGetFacts").click(function () {
    
        //get value of input
        let userName = $('#userName').val();
        let chars = userName.split('');
        let thisString = userName;

        //print back the result
        if(userName.length < 5){

            //The function moveThatLetter has "var username" letting it reference the script
            thisString = moveThatLetter(userName);

            shortAnimal = `We don't like short names, but here's a complementary spirit animal anyways --> ` + shortArray[Math.floor(Math.random() * shortArray.length)];   

        } else {

            for (let i = chars.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }

            // Convert the array of characters back to a string
            let shuffledInput = chars.join('');
            thisString = "Welp, " + userName + ", you've gotten your premium shuffled name go show the bouncer: " + shuffledInput;

            longAnimal = `This is the length we like to see so here's a long  spirit animal to match--> ` + longArray[Math.floor(Math.random() * longArray.length)];
            $('body').append("<p class = 'longTxt'>" + longAnimal + "</p>");
        }

        $('body').append("<p class = 'txtAdj'>" + thisString + "</p>");
        $('body').append("<p class = 'shortTxt'>" + shortAnimal + "</p>");
    });  
}); 

function moveThatLetter(userName){
    
    var lastLetter = userName.slice(-1); // Get the last letter
    var letterToFront = lastLetter + userName.slice(0, -1); // Move the last letter to the front
    thisString = `Now we're gonna punish you by moving a letter HAHAHAHAH: ${letterToFront}`;
    return thisString;
}

var shortArray = ["Dolphin", "Tuscan", "Monkey", "Ant"];
    console.log(shortArray);

function random_short_animal() {
    return shortAnimal;
}


var longArray = ["Whale", "Ferret", "Giraffe", "Lion"];
    console.log(longArray);

function random_long_animal() {
    return longAnimal;
}