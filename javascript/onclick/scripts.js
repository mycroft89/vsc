function login(button) {
    if(button.innerText == "Login") {
        button.innerText = "Logout";
    } else {
        button.innerText = "Login";
    }
}

function alerta(){
    alert("Ninja was liked");
}

function esconder(button){
    button.remove();
}