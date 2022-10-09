//remove duplicate array 
//output : 6(4 times)
var arr1 = [1, 2, 3, 3, 6, 6, 6, 6, 7, 7, 9, 10];
var su = 1;
var go = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) go++;
    if (su < go) {
      su = go;
      item = arr1[i];
    }
  }
  go = 0;
}
console.log(item + " ( " + su + " times ) ");