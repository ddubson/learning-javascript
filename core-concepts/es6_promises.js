var fs = require('fs');

var file = fs.readFileSync('./es6_promises.js');
//console.log(file.toString())
/*====*/

fs.readFile('./es6_promises.js', (err, data) => {
  if(err) { console.log(err); return; }
  //console.log(data.toString());
});

/** Creating a Promise **/
var myPromise = new Promise((resolve, reject) => {
    // async code
    var noErrors = true;
    if(noErrors) { resolve(); }
    else { reject(); }
});

myPromise.then(() => {
  console.log("success!");
}).catch(() => {
  console.log("failure!");
})

/** Creating a file read operation **/
function promiseFs(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data)=> {
      if(err) reject(err);
      else resolve(data);
    });
  })
}

promiseFs('./es6_promises.js').then(data => {
  console.log(data.toString());
  return promiseFs('./es6_args.js');
}).then(data => {
  console.log(data.toString());
}).catch(err => {
  console.log(err);
})

/** Concise promise chaining **/
promiseFs('./es6_promises.js')
  .then(data => promiseFs('./es6_args.js'))
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err));
