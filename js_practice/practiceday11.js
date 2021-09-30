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


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
});

/*typewriter 라이브러리
    .typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
*/

function count(){
    if (k==1){
        typewriter
            .typeString("1번물어봤다")
            .pauseFor(2500)
            .deleteAll()
            .start()
    }

    else if (k==2){
        
        typewriter
            .typeString("2번물어봤다")
            .pauseFor(2500)
            .deleteAll()
            .start()
    }
    
    else if (k==3){
        
        typewriter
            .typeString("3번물어봤다")
            .pauseFor(2500)
            .deleteAll()
            .start()
    }
    
    else if (k==4){
        
        typewriter
            .typeString("4번물어봤다")
            .pauseFor(2500)
            .deleteAll()
            .start()
    }
    
    else if (k==5){
        
        typewriter
            .typeString("5번 다 물어봤다 좀 귀찮은가보다")
            .pauseFor(2500)
            .deleteAll()
            .start()
    }
}

document.getElementById("button").addEventListener("click", count);
