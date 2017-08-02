var _ = {
   map: function(arr, callback) {
     for (let i=0; i<arr.length; i++) {
         array[i] = callback(array[i]);
     }
   },
   reduce: function(arr, callback, memo) {
    var start = 0;
    if (!memo) {
        memo = array[0];
        start = 1;
    }
    for (let i=start; i<arr.length; i++) {
        memo = callback(arr[i], memo);
    }
    return memo;
   },
   find: function(arr, callback) {   
     for (let i=0; i<arr.length; i++) {
         if (callback(arr[i])) {
             return arr[i];
         }
     }
    return undefined;
   },
   filter: function(arr, callback) { 
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i])) {
            new.push(arr[i]);
        }
    }
    return newArr;
   },
   reject: function() { 
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        if (!callback(arr[i])) {
            new.push(arr[i]);
        }
    }
    return newArr;
   }
 }