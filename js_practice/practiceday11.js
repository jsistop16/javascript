var dial = [
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
    }
]

function check_text() {
    var con = document.getElementById("console").value;
    for(i=0; i<dial.length; i++){
        if(dial[i].go==con){
            console.log(dial[i].ans);
        }
    }
}