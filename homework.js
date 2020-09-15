const repeatNumbers = function(data) {
  let x = "";
  for (m = 0 ; m < data.length ; m++) {
   
  // let y = String(data[m][0]);
  for ( i = 0 ; i < data[m][1] ; i++) {
x = x + String(data[m][0]);
  }
 
}
return x;
};


// console.log(repeatNumbers([[1, 10]]));

console.log(repeatNumbers([[1, 2], [2, 3]]));

