$(function() {
    console.log("doc is ready");

    let userName; 

    $("#btnGetFacts").click(function () {
    
        //get value of input
        var userName = $('#userName').val();
        var chars = userName.split('');

        //call my function 
        let thisString = userName;

        //print back the result
        if(userName.length < 5){

            alert("Less than 5");
            var lastLetter = userName.slice(-1); // Get the last letter
            var letterToFront = lastLetter + userName.slice(0, -1); // Move the last letter to the front
            $('#userName').val(letterToFront); // Set the updated string back to the input field
            thisString = 'This is your name, but with the last letter first ' + letterToFront;

        } else {

            alert("BOOOOOOO, I HATE LONG NAMES!");
            for (var i = chars.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
            
            // Convert the array of characters back to a string
            var shuffledInput = chars.join('');
            thisString = "Hello " + userName + ' here is your shuffled name: ' + shuffledInput;

        }


        $('body').append(thisString);
    });  
}); 
