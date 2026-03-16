let currentLanguage = "en"

const translations = {

en:{

location:"Based in Brazil | Open to Remote Work",

"about-title":"About Me",

"about-text":"Full Stack Developer with 2 years of experience building web systems, mobile applications and modern website interfaces. Focused on scalable solutions and API integrations.",

"tech-title":"Tech Stack",

"projects-title":"Projects",

"contact-title":"Contact",

"terminal-title":"Terminal",

"terminal-start":"Type help to see available commands",

"terminal-placeholder":"> type a command...",

typing:"Full Stack Developer | React • Node • C#",

"Film":"Movie catalog platform that displays movies currently in theaters and allows adding or removing titles.",

"Biblio":"Library management system to control book check-outs and register new books entering the library.",

"Venue":"Corporate productivity platform integrating tools like Teams, Word, Excel and YouTube in one environment.",

"repo":"Private Repository",

},

pt:{

location:"Baseado no Brasil | Aberto para trabalho remoto",

"about-title":"Sobre Mim",

"about-text":"Desenvolvedor Full Stack com 2 anos de experiência criando sistemas web, aplicações mobile e interfaces modernas. Focado em soluções escaláveis e integrações de APIs.",

"tech-title":"Tecnologias",

"projects-title":"Projetos",

"contact-title":"Contato",

"terminal-title":"Terminal",

"terminal-start":"Digite help para ver os comandos disponíveis",

"terminal-placeholder":"> digite um comando...",

typing:"Desenvolvedor Full Stack | React • Node • C#",

"Film":"Plataforma de catálogo de filmes que exibe os filmes atualmente em cartaz nos cinemas e permite adicionar ou remover títulos.",

"Biblio":"Sistema de gestão de biblioteca para controlar o empréstimo de livros e registrar a entrada de novos livros na biblioteca.",

"Venue":"Plataforma de produtividade corporativa que integra ferramentas como Teams, Word, Excel e YouTube em um único ambiente.",

"repo":"Repositório Privado",

}

}

function setLanguage(lang){

currentLanguage = lang

document.querySelectorAll("[data-lang]").forEach(el => {

const key = el.getAttribute("data-lang")

if(translations[lang][key]){
el.innerText = translations[lang][key]
}

})

document.querySelectorAll("[data-lang-placeholder]").forEach(el => {

const key = el.getAttribute("data-lang-placeholder")

if(translations[lang][key]){
el.placeholder = translations[lang][key]
}

})

startTyping(translations[lang].typing)

}

const text = "Full Stack Developer | React • Node • C#";

let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


const terminalCommands = {

en:{
help:"commands: about, skills, projects, contact",
about:"Full Stack Developer with 2 years experience building web systems and apps.",
skills:"React, Node.js, C#, MySQL, SQL Server",
projects:"Filmoteca, Bibliotec, VenueWork",
contact:"Email: phperes019@gmail.com",
notfound:"command not found"
},

pt:{
help:"comandos: about, skills, projects, contact",
about:"Desenvolvedor Full Stack com 2 anos de experiência criando sistemas e aplicações.",
skills:"React, Node.js, C#, MySQL, SQL Server",
projects:"Filmoteca, Bibliotec, VenueWork",
contact:"Email: phperes019@gmail.com",
notfound:"comando não encontrado"
}

}

const input = document.getElementById("terminal-input")
const output = document.getElementById("terminal-output")

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const cmd=input.value.trim().toLowerCase()

const commands = terminalCommands[currentLanguage]

if(commands[cmd]){

output.innerHTML += `<br>> ${cmd}<br>${commands[cmd]}`

}

else{

output.innerHTML += `<br>> ${cmd}<br>${commands.notfound}`

}

input.value=""

}

})



tsParticles.load("particles",{

fullScreen:{enable:false},

particles:{

number:{value:70},

color:{value:"#39ffb6"},

links:{
enable:true,
distance:150,
color:"#39ffb6",
opacity:0.5,
width:1
},

move:{
enable:true,
speed:1
},

size:{
value:{min:1,max:3}
}

},

interactivity:{

events:{

onHover:{
enable:true,
mode:"repulse"
},

onClick:{
enable:true,
mode:"push"
}

},

modes:{

repulse:{distance:60},

push:{quantity:4}

}

},

detectRetina:true

})

function revealOnScroll(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el => {

const windowHeight = window.innerHeight;

const elementTop = el.getBoundingClientRect().top;

const visiblePoint = 100;

if(elementTop < windowHeight - visiblePoint){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

