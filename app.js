const texts = ['A Developer.', 'An Artist.', 'An Illustrator.', 'A Student.'];
let count = 0; //selecting each content from texts
let index = 0; //selecting each word letter by letter
let currentText = ''; 
let letter = '';

(function type(){ //wrap in paranthesis for run through infinite
    if(count === texts.length){  //resets count to o when it hits 4ie text.length=4
        count=0;

    }
    currentText=texts[count];  //selecting  a text based on the couont no if count = 3 select 3rd text an illustrator
    letter=currentText.slice(0,++index); //slicing each text letter by letter with the index incrementation
    document.querySelector(".typing").textContent=letter; //select the class "typing" and provide letters one by one with function textContent
    if(letter.length === currentText.length){ //after all iteration check the letter length if letter length = currentText length then
        count++;                               // increment  count to select next word; and set index to 0 to select first letter
        index=0;
    }
    setTimeout(type,800); //repetition  in .8 sec and function acll in this interval

}());