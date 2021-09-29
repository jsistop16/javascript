var dial = [ /*dial.length = 5*/
    {
        go:"이름이 뭐야?",
        ans:"심바"
    },
    {   
        go:"몇살이야?",
        ans:"4살"
    },
    {
        go:"어디살아?",
        ans:"사바나"
    },
    {
        go:"안녕",
        ans:"안녕 반가워~"
    },
    {
        go:"불꺼줘",
        ans:"딸깍"
    }

]

var k = 0;
var cnt = 0;

function check_text() {

    var con = document.getElementById("console").value;
    var says = document.getElementsByClassName("says");

    for(i=0; i<dial.length; i++){
        if(dial[i].go==con){
            says[0].innerHTML=dial[i].ans;
            document.getElementById("back").style.backgroundColor="white";
            k+=1;
            if(con=="불꺼줘"){
                document.getElementById("back").style.backgroundColor="grey";            
            }
            cnt++;
        }
        
    }
        
    if (cnt==0){
        if(con == "불꺼도 나 보여?"){
            says[0].innerHTML = "나는 보인다ㅎㅎ";
            document.getElementById("back").style.backgroundColor="grey";
            k+=1;
        }
        else if(con == "거짓말~"){
            says[0].innerHTML = "나는 밤에도 잘보여";
            k+=1;
        }
        else if(con == "내가 지금 뭐하고 있게?"){
            says[0].innerHTML = "밥먹고있네?";
            document.getElementById("back").style.backgroundColor="grey";
            k+=1;
        }
        else if (con == "잘자~"){
            says[0].innerHTML = "너도 잘자~";
            k+=1;
        }
        else{
            says[0].innerHTML = "뭐라고?";
            document.getElementById("back").style.backgroundColor="white";
            k+=1;
        }
    }

    if (k==4){
        var btn = document.getElementsByClassName("button");
        btn[0].addEventListener("click", stop);
    }
    
    function stop(){
        setTimeout(function(){
            says[0].innerHTML="나는 5번까지만 대답할수있어...";
        }, 2000);
    }
}

