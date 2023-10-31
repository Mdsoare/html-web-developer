function enviar(event) {
	// impede o envio padrão do formulário
	event.preventDefault();
	// exibe uma caixa de confirmação com a mensagem
	var resposta = confirm("Você tem certeza que quer enviar este formulário?");
	// se o usuário clicou em OK, envia o formulário
	if (resposta) {
		document.signup.submit();
	}
}

function limpar(event) {
	// exibe uma caixa de confirmação com a mensagem
	var resposta = confirm("Você tem certeza que quer limpar este formulário?");
	// se o usuário clicou em OK, limpa o formulário
	if (resposta) {
		document.signup.reset();
	}
	// se o usuário clicou em Cancelar, impede o reset padrão do formulário
	else {
		event.preventDefault();
	}
}

function msg(){
	alert('Evento de passagem do mouse. Clique em ok!');
}