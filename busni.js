// let btn=document.getElementById("loginForm");
document.getElementById("main").addEventListener('click',function(){
  loginForm.style.display="none";
  
})
const loginForm = document.getElementById("loginForm");
window.onload=()=>{
    loginForm.style.display="none";
}
const loginbtn = document.getElementById("loginbtn");
loginbtn.onclick = function () {
  if (loginForm.style.display !== "none") {
    loginForm.style.display = "none";
  } else {
    loginForm.style.display = "block";
  }
};


