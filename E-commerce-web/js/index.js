console.log("kesa h")

let menubar = document.querySelector("#menubar")
let sidenav = document.querySelector("#side-nav")
let navresp = document.querySelector(".nav-resp")

sidenav.style.width="0px"

menubar.addEventListener("click", ()=>{
    navresp.classList.toggle("nav-resp")
    if(sidenav.style.width==="0px"){
        sidenav.style.width="250px"
    }else{
        sidenav.style.width="0px"
    }
})