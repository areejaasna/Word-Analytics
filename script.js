const textareaEle = document.querySelector('.textarea');
const charactersNumberEle = document.querySelector('.stat__number--characters');
const twitterNumberEle = document.querySelector('.stat__number--twitter');
const facebookNumberEle = document.querySelector('.stat__number--facebook');
const wordsNumberEle = document.querySelector('.stat__number--words');

const inputHandler = () =>
{
     //example of input validation
     if (textareaEle.value.includes('<script>')){
          alert('You cannot use <script> in your text');
          //textareaEle.value = 'Wrong Input!!';
          textareaEle.value = textareaEle.value.replace('<script>','');
     }
     
     // get the current the number
     // remove double spaces and spaces from the start and end of the string:
     let numberOfWords = textareaEle.value.replace( /\s\s+/g, ' ' ).trim().split(' ').length;
     //let numberOfWords = textareaEle.value.split(' ').length;
     if (textareaEle.value.length === 0)
     {
          numberOfWords = 0;
     }
     const numberOfCharacters = textareaEle.value.length;
     const twitterCharsLeft = 280 - numberOfCharacters;
     const facebookCharsLeft = 2500 - numberOfCharacters;

     //add visual indicator if limit is exceeded
     if(twitterCharsLeft < 0 ){
          //twitterNumberEle.style.color = 'red';
          twitterNumberEle.classList.add('stat__number--limit');
     }else{
          twitterNumberEle.classList.remove('stat__number--limit');
     }

     if(facebookCharsLeft < 0 ){
          facebookNumberEle.classList.add('stat__number--limit');  
     }else{
          facebookNumberEle.classList.remove('stat__number--limit');
     }

     //set new number
     wordsNumberEle.textContent = numberOfWords;
     charactersNumberEle.textContent = numberOfCharacters;
     twitterNumberEle.textContent = twitterCharsLeft;
     facebookNumberEle.textContent = facebookCharsLeft;
};

textareaEle.addEventListener('input', inputHandler);
