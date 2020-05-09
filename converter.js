
const path = require('path')
const fs = require('fs')
const csv = require('csvtojson')

csv()
    .fromFile('./customer-data.csv')
    .then((josnobj) => {
        fs.writeFileSync(path.join(__dirname,'customer-data.json'),JSON.stringify(josnobj, null, 2))
    })

console.log('File has been successfully created');
