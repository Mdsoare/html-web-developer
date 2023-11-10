function enviar(event) {
	event.preventDefault();
	var resposta = confirm("Você tem certeza que quer enviar este formulário?");

	if (resposta) {
		document.signup.submit();
	}
}

function limpar(event) {	
	var resposta = confirm("Você tem certeza que quer limpar este formulário?");

	if (resposta) {
		document.signup.reset();
	} else {
		event.preventDefault();
	}
}