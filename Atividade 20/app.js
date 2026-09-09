let app = require('./app/config/server');

let rotaHome = require('./app/routes/home');
let rotaContato = require('./app/routes/contato');
let rotaInscricao = require('./app/routes/inscricao');
let rotaProgramacao = require('./app/routes/programacao');
let rotaSobre = require('./app/routes/sobre');
let rotaNovidades = require('./app/routes/novidades');

rotaHome(app);
rotaContato(app);
rotaInscricao(app);
rotaProgramacao(app);
rotaSobre(app);
rotaNovidades(app);

app.listen(3000, function(){
    console.log('servidor iniciado');
});

