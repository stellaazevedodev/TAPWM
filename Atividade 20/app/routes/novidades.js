module.exports = function (app) {
	app.get('/novidades', function (req, res) {
		// res.render() processa um template EJS; res.send() envia a resposta diretamente ao cliente.
		res.send("<h1>Novidades do Evento</h1><p>Confira as novidades do evento: teremos novas atrações, atividades especiais e muitas surpresas.</p>");
	});
}
