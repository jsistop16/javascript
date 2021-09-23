var ssg_info={title:"신세계", year:"2012", director:"박훈정", genre:"noir"};
var gostop_info={title:"타짜", year:"2006", director:"최동훈", genre:"noir, drama"};
var man_info={title:"아저씨", year:"2010", director:"이정범", genre:"noir, drama, action"};


var title = document.getElementsByClassName("title");
var info = document.getElementsByClassName("info");
var total = document.getElementsByClassName("total");
var i = 0;


function show(movie_title){
    title[0].innerHTML = movie_title.title;
    info[0].innerHTML = movie_title.year;
    info[1].innerHTML = movie_title.director;
    info[2].innerHTML = movie_title.genre;

    i++;
    if(i%2!=0){
        total[0].classList.remove('hide');
    }
    else{
        total[0].classList.add('hide');
    }
}