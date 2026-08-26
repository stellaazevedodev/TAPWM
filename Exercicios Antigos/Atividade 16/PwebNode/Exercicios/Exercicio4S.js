const fs =  require('fs'); //carregando modulo filesystem
const data = fs.readFileSync('file.txt');
//lendo arquivo ...
console.log(data.toString()); 