let app = require('./app/config/server');

require('./app/routes/professores')(app);

app.listen(3000, function(){
    console.log('servidor iniciado');
});

