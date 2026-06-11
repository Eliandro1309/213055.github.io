const btnDarkMode = document.getElementById("btn-dark-mode");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");

let tamanhoFonteAtual = 100;

if (btnDarkMode) {
    btnDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
        } else {
            btnDarkMode.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        }
    });
}

if (btnAumentar) {
    btnAumentar.addEventListener("click", function () {
        if (tamanhoFonteAtual < 140) {
            tamanhoFonteAtual += 10;
            document.body.style.fontSize = tamanhoFonteAtual + "%";
        }
    });
}

if (btnDiminuir) {
    btnDiminuir.addEventListener("click", function () {
        if (tamanhoFonteAtual > 80) {
            tamanhoFonteAtual -= 10;
            document.body.style.fontSize = tamanhoFonteAtual + "%";
        }
    });
}

function validateForm() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome == "") {
        alert("O campo 'Nome' é obrigatório.");
        return false;
    }
    if (email == "") {
        alert("O campo 'E-mail' é obrigatório.");
        return false;
    }
    if (mensagem == "") {
        alert("O campo 'Mensagem' não pode ficar em branco.");
        return false;
    }

    alert("🎉 Sucesso! Sua mensagem foi enviada com êxito!");
    return true;
}