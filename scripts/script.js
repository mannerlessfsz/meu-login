var login = document.getElementById("email");
var password = document.getElementById("password");
var foto = document.getElementById("foto");

/*
function entrar() {
    for (var user of userslist) {
        if (user.email === email.value && user.login.password === password.value) {
            alert("Tudo certo");
            return;
        }
    }
    alert("Usuario ou senha incorreta");
}*/

function buscaUser(identificacao) {
    var posicao = usersList.findIndex(user => user.email === login.value || user.login.username === login.value);

    if (posicao === -1) {
        return null;
    }

    return usersList[posicao];

}

function entrar(event) {
    event.preventDefault();

    var usuario = buscaUser(email.value);

    if (usuario === null) {
        alert("Usuario não encontrado");
        return;
    }

    if (usuario.login.password !== password.value) {
        alert("Senha incorreta");
        return;
    }

    alert("Tudo certo");
}

function trocaFoto() {
    
    foto.src = "./images/user.jpg";
    if (login.value === "") {
        return;
    }

    var usuario = buscaUser(email.value);

    if (usuario === null) {
        alert("Usuario não encontrado");
        login.value = "";
        login.focus();
        return;
    }

    //troca o email da pessoa na tela pelo nome de usuario dela
    login.value = usuario.login.username;
    //troca a foto do usuario, conforme seu nome de user ou e-mail.
    foto.src = usuario.picture.large;
}

/*
function entrar() {
    for (var user of userslist) {
        if (user.email !== email.value) {
            alert("Usuario nao encontrado");
        } else {
            if (user.email === email.value & user.login.password === password.value) {
                alert("Tudo certo");
            }
        }
    }
}*/