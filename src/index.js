import Logo from "./logo.svg";

let root

function init(){
  const button = document.getElementById("root");
  const root = document.getElementById("root");
  root.innerHTML = `
  <img src="${Logo}" alt="build icon"/>
  <h1> Yay! Learning Web Tooling Today! </h1>
  <button id="#about>About</button>
  ${App({name:"Amruta"})}
  `;
}

init();

const button = doc.querySelector("#about");
button.addEventListener("click", loadAbout);

function loadAbout(){
  return ("./App").then(({default: App}) => {
    const about = App({name: "Amruta"});
    document.querySelector("route").innerHTML = about
  })
}