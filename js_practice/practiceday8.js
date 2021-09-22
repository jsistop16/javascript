const txt = document.getElementsByTagName('h1');
const letter = '쭈구ri';
let i = 0;
function button(){
    if (i<letter.length){
        txt[0].append(letter[i]);
        i++;  
    }
    else{
        txt[0].innerText = '';
        i=0;
    }
}