function mascara(o, f) {
    x_obj = o
    x_fun = f
    setTimeout("Mascara()", 1)
}

function Mascara() {
    x_obj.value = x_fun(x_obj.value)
}

function MascCep(x) {
    alert("ATUALIZA");
    x = x.replace(/\D/g, "");
    x = x.replace(/^(\d{5})(\d)/g, "$1-$2");
    alert(x);
    return x;
}

function MascCPF(x) {
    alert("ATUALIZA");
    x = x.replace(/\D/g, "");
    x = x.replace(/^(\d{2})(\d)/g, "($1) $2");
    x = x.replace(/(\d)(\d{4})$/, "$1-$2");
    return x;
}

function id(el) {
    return document.getElementById(el);
}
window.onload = function() {
    id('cep').onkeypress = function() {
        mascara(this, MascCep);
    }
    id('cpf').onkeypress = function() {
        mascara(this, MascCPF);
    }
}