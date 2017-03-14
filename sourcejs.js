function mascara(o, f) {
    x_obj = o
    x_fun = f
    setTimeout("execmascara()", 1)
}

function execmascara() {
    x_obj.value = x_fun(x_obj.value)
}

function MascCep(x) {
    x = x.replace(/\D/g, "");
    x = x.replace(/^(\d{5})(\d)/g, "$1-$2");
    return x;
}

function MascCpf(x) {
    x = x.replace(/(\d{3})(\d)/, "$1.$2")
    x = x.replace(/(\d{3})(\d)/, "$1.$2")
    x = x.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
}

function id(el) {
    return document.getElementById(el);
}
window.onload = function() {
    id('cep').onkeypress = function() {
        mascara(this, MascCep);
    }
    id('cpf').onkeypress = function() {
        mascara(this, MascCpf);
    }
}