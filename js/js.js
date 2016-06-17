/**
 * Created by Soichiro on 6/13/2016.
 */

$(document).ready(function(){

/*----------------------------------------------------------------------------------

    Solutions

 ----------------------------------------------------------------------------------*/

    //Question 1
    function sumOfMod3and5(){
        var total = 0;
        for(var i=0 ; i<1000; i++) {
            if((i%3 == 0 || i%5 == 0)&&(i !== 1)){
                total += i;
            }
        }
        $('#answer1').append('<p>'+total+'</p>');
        return total;
    }
    sumOfMod3and5();

    //Question 2
    function sumOfEvenValuedFibonacci(){
        var total = 0;
        var current = 0;
        var previous1 = 1;
        var previous2 = 1;

        do {
            current = previous1 + previous2;
            if (current%2 == 0){
                total += current;
            }
            previous2 = previous1;
            previous1 = current;
        }while(current < 4000000);
        $('#answer2').append('<p>'+total+'</p>');
        return total;
    }
    sumOfEvenValuedFibonacci();

    //Question 3
    function primeFactor(value) {
        var primeFactorsArray = [];
        var i = 2;
        do{
            if(value%i == 0){
                primeFactorsArray.push(i);
                value = value/i;
            }
            i++;
        }while(i <= value);

        var answer = Math.max.apply(Math,primeFactorsArray);
        $('#answer3').append('<p>'+answer+'</p>');
        return answer;
    }
    primeFactor(600851475143);

    //Question 4
    function largestPalindrome(startingNumber1,maxNumber1,startingNumber2,maxNumber2) {
        var eachValueArray = [];
        var answerArray = [];

        //Multiply every combination
        for (var a = startingNumber1; a <= maxNumber1; a++) {
            for (var b = startingNumber2; b <= maxNumber2; b++) {
                var currentMultValue = a * b;
                var currentMultValueString = currentMultValue.toString();

                //Slice every digit and add them individually to an array
                var c = 0;
                do {
                    var eachValue = currentMultValueString.slice(c, c + 1);
                    if (eachValue != '') {
                        eachValueArray.push(eachValue);
                    }
                    c++;
                } while (eachValue !== '');

                var lengthOfValue = eachValueArray.length;
                var lengthOfValueInt = parseInt(lengthOfValue);

                //Increment index to check numbers from both ends
                //Pop from the array if the numbers don't match
                //Push to the array as an answer candidate if palindrome
                for (var d = 0; d <= lengthOfValueInt; d++) {
                    var indexDecrement = lengthOfValueInt - (d + 1);
                    var filter = (eachValueArray[d] == eachValueArray[indexDecrement]);
                    if (filter == false) {
                        for (d = 0; d <= lengthOfValueInt; d++) {
                            eachValueArray.pop();
                        }
                    }
                    if ((d == lengthOfValueInt) && filter == true) {
                        answerArray.push(currentMultValue);
                    }
                }
            }
        }
        var answer = Math.max.apply(Math, answerArray);
        $('#answer4').append('<p>' + answer + '</p>');
        return answer;
    }
  //largestPalindrome(startingNumber1,maxNumber1,startingNumber2,maxNumber2);
    largestPalindrome(900,999,900,999);

/*----------------------------------------------------------------------------------

    Decorations

----------------------------------------------------------------------------------*/

    //Header initial height
     $('header').height($(window).height());

    // Window resize height
    $(window).resize(function() {
        $('header').height($(window).height());
    });

    $('#scrollDownIcon').on('click', function(){
        var windowHeight = $(window).height();
        $('body').not(':animated').animate({scrollTop: windowHeight}, 'slow');
    });


});
