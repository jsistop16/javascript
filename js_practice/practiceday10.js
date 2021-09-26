function show(){
    setTimeout(function () {
        var ring = document.getElementsByClassName("calling");      
        ring[0].innerHTML = "쭈구ri";
        ring[1].innerHTML = "010-xxxx-xxxx";
    }, 2000);
}
  
var temp = document.getElementsByClassName("click_button");
temp[0].addEventListener("click", show);    
