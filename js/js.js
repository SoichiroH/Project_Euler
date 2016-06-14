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
