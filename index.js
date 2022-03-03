const fs = require('fs');
var items = null;
var jsonData = null;
fs.readFile('products-ecommerce.json', 'utf-8', (err, data) => {
  const jsonData = JSON.parse(data);
  fs.writeFile('output.json', '', function (err) {
    if (err) throw(err);
  });  jsonData.items.forEach(element => {
    if(element.price.amount < 10000){
      fs.appendFile('output.json', JSON.stringify(element, null , 4) + '\n', function (err) {
        if (err) throw err;
      });
    }
  });
 
})
