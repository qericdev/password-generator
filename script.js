const lengthSpace = document.getElementById("passwordLength")
let lengthPass = 10


function restLength() {
    if(lengthPass > 7) {
        lengthPass --
        lengthSpace.textContent = lengthPass
    }
    
}

function addLength() {
    if(lengthPass < 20) {
        lengthPass ++
        lengthSpace.textContent = lengthPass
    }
}

function generate() {
    let password1 = ""
    let password2 = ""
    let password3 = ""
    let password4 = ""

    for(let i = 0; i < lengthPass; i++) {
        password1 = password1 + String.fromCharCode(Math.floor(Math.random()*93)+33)
    }
    for(let i = 0; i < lengthPass; i++) {
        password2 = password2 + String.fromCharCode(Math.floor(Math.random()*93)+33)
    }
    for(let i = 0; i < lengthPass; i++) {
        password3 = password3 + String.fromCharCode(Math.floor(Math.random()*93)+33)
    }
    for(let i = 0; i < lengthPass; i++) {
        password4 = password4 + String.fromCharCode(Math.floor(Math.random()*93)+33)
    }

    document.getElementById("passwordOne").textContent = password1
    document.getElementById("passwordOne").style.color = "#F59E0B"
    document.getElementById("passwordTwo").textContent = password2
    document.getElementById("passwordTwo").style.color = "#F59E0B"
    document.getElementById("passwordThree").textContent = password3
    document.getElementById("passwordThree").style.color = "#F59E0B"
    document.getElementById("passwordFour").textContent = password4
    document.getElementById("passwordFour").style.color = "#F59E0B"

}
function copy() {
    console.log(document.getElementById("passwordOne").innerHTML)
    navigator.clipboard.writeText(document.getElementById("passwordOne").innerHTML);
    document.getElementById("copied").className = "copiedAlert"
    setTimeout(() => {
        document.getElementById("copied").classList.remove("copiedAlert")
        document.getElementById("copied").className = "copiedOne"
    },2000)
}

function copyTwo() {
    console.log(document.getElementById("passwordTwo").innerHTML)
    navigator.clipboard.writeText(document.getElementById("passwordTwo").innerHTML);
    document.getElementById("copied").className = "copiedAlert"
    setTimeout(() => {
        document.getElementById("copied").classList.remove("copiedAlert")
        document.getElementById("copied").className = "copiedOne"
    },2000)
}

function copyThree() {
    console.log(document.getElementById("passwordThree").innerHTML)
    navigator.clipboard.writeText(document.getElementById("passwordThree").innerHTML);
    document.getElementById("copied").className = "copiedAlert"
    setTimeout(() => {
        document.getElementById("copied").classList.remove("copiedAlert")
        document.getElementById("copied").className = "copiedOne"
    },2000)
}

function copyFour() {
    console.log(document.getElementById("passwordFour").innerHTML)
    navigator.clipboard.writeText(document.getElementById("passwordFour").innerHTML);
    document.getElementById("copied").className = "copiedAlert"
    setTimeout(() => {
        document.getElementById("copied").classList.remove("copiedAlert")
        document.getElementById("copied").className = "copiedOne"
    },2000)
}