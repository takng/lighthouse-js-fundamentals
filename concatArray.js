function concat(array_1, array_2) {
  if (array_2.length === 0) {
    return(array_1);
  }

  if (array_1.length === 0) {
    return(array_2);
  }

  for (var i = 0; i < array_2.length; i++) {
    array_1.push(array_2[i]);
  }

  return(array_1);
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

