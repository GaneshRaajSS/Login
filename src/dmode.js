// const sec = document.querySelector('.sec');
// const toggle = document.querySelector('.toggle');

// toggle.onclick = function(){
//     sec.classList.toggle('dark')
// }




// const sec = document.querySelector(".sec");
// const toggle = document.querySelector(".toggle");
// const theme = document.querySelector('#theme')
// toggle.onclick=function(){
//     if(sec.classList.contains("sec")){
//         console.log("SSSSSSS");
//         sec.classList.replace('sec','dark');
//         theme.classList.replace("fa-moon", "fa-sun");
//     }
//     else
//     {
//         sec.classList.replace('dark','sec');
//         theme.classList.replace("fa-sun", "fa-moon");
//         console.log("vvvvvvvvvvvv")
//     }
// }


// D/L mode ------------------------------------------------------------------------------------------


const toggle = document.querySelector('.toggle');
const sec = document.querySelector('.sec');

const darkMode = () => {
    sec.classList.toggle('dark')
}

// let setDarkMode = localStorage.getItem('dark');

toggle.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        // Set the value of the item to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
        theme.classList.replace("fa-moon", "fa-sun");
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
        theme.classList.replace("fa-sun", "fa-moon");
        
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
    theme.classList.replace("fa-moon", "fa-sun");
  
}



