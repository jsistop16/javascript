var arr=[{name:"lion", leg:4}, {name:"ant" , leg:6}, {name:"spider" , leg:8}, {name:"human" , leg:2}];

var i = 0;
function print(){
    console.log(arr[i].name);
    i++;

    if (i==arr.length-1){
        i=0;
    }
}