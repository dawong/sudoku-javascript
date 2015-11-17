/*for (var i=0; i<81; i++) {
  var block = $('#block' + i);
  block.html(i);
}*/


for (var r=0; r<9; r++) {
  var numPool = [1,2,3,4,5,6,7,8,9];
  var count = 0;
  for (var c=0; c<9; c++) {
   
    var rand = Math.floor(Math.random() * 9) + 1;

    // if number not available in number pool (not in row)
    while (numPool.indexOf(rand) == -1) {
      rand = Math.floor(Math.random() * 9) + 1;
    }

    // if number already in column
    if (inColumn(r, c, rand)) {
      numPool.splice(numPool.indexOf(rand), 1);
      continue;
    }
    
    // if number already in section
    //if (inSection(r, c, rand)) {
    //  numPool.splice(numPool.indexOf(rand), 1);
    //  continue;
    //}
    
    
    numPool.splice(numPool.indexOf(rand), 1);
    var cell = r*9 + c;
    var block = $('#block' + cell);
    block.html(rand);
    
  }

}

function inSection(row, column, num) {
  
}
function inColumn(row, column, num) {
  for (var i=0; i<9; i++) {
    var cell = row*i + column;
    var block = $('#block' + cell);
    if (block.html() == num) {
      return true;
    }
  }
  return false;
}
