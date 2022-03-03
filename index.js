const fs = require('fs');
var items = null;
var jsonData = null;
fs.readFile('Ejercicio-node/products-ecommerce.json', 'utf-8', (err, data) => {
  items = data;
  const jsonData = JSON.parse(data);
  fs.writeFile('Ejercicio-node/output.json', '', function (err) {
    if (err) throw err;
    console.log('Creado!');
  });  jsonData.items.forEach(element => {
    if(element.price.amount < 10000){
      fs.appendFile('Ejercicio-node/output.json', JSON.stringify(element, null , 4) + '\n', function (err) {
        if (err) throw err;
      });
    }
  });
 
})
