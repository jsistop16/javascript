function show(){
    setTimeout(function onClick() {
        var ring = document.getElementsByClassName("calling");      
        ring[0].innerHTML = "쭈구ri";
        ring[1].innerHTML = "010-xxxx-xxxx";
    },2000);
}
  
document.getElementsByClassName('click_button').addEventListener('click', show);

