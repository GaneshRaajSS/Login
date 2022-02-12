// USING IMG
// var a;
// function pass()
// {
// if(a==1)
// {
// document.getElementById('password').type='password';
// document.getElementById('pass-icon').src='pass-hide.png';  
// a=0;
// }
// else
// {
// document.getElementById('password').type='text';
// document.getElementById('pass-icon').src='pass-show.png';
// a=1;    
// } }



const myPassword = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");
 
eyeIcon.addEventListener("click", () => {
    if(eyeIcon.classList.contains("fa-eye")){
        myPassword.setAttribute("type","text");
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }else{
        myPassword.setAttribute("type","password");
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
}); 



