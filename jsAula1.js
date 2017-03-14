
/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
   setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");//Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeypress = function(){
		mascara( this, mtel );
	}
}

function validaCampos(){
	if(document.getElementById("nome").value === "")
	{
		alert("O campo NOME é obrigatório");
		return false;
	}
	if(document.getElementById("telefone").value === "")
	{
		alert("O campo Telefone é obrigatório");
		return false;
	}
	if(!document.getElementById("M").checked && !document.getElementById("F").checked)
	{
		alert("O campo Sexo é obrigatório");
		return false;
	}
	if(document.getElementById("email").value === "")
	{
		alert("O campo Email é obrigatório");
		return false;
	}
	if(document.getElementById("data").value === "")
	{
		alert("O campo Data de Nascimento é obrigatório");
		return false;
	}
	return true;
}
	