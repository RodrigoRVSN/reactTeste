let show=true;
const menu=document.querySelector(".menu")
const toggle=document.querySelector(".toggle")
toggle.addEventListener("click",()=>{
    document.body.style.overflow=show ? "hidden" :"initial"
    menu.classList.toggle("on",show)
    show=!show;
})