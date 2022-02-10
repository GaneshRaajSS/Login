// const sec = document.querySelector('.sec');
// const toggle = document.querySelector('.toggle');

// toggle.onclick = function(){
//     sec.classList.toggle('dark')
// }




const sec = document.querySelector(".sec");
const toggle = document.querySelector(".toggle");
const theme = document.querySelector('#theme')
toggle.onclick=function(){
    if(sec.classList.contains("sec")){
        console.log("SSSSSSS")
        sec.classList.replace('sec','dark');
        theme.classList.replace("fa-moon", "fa-sun");
    }
    else
    {
        sec.classList.replace('dark','sec');
        theme.classList.replace("fa-sun", "fa-moon");
        console.log("vvvvvvvvvvvv")
    }
}