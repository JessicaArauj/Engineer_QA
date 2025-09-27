function indexMinMax(arr) {
    let indexMin = 0;
    let indexMax = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[indexMin]) {
        indexMin = i;
      }
  
      if (arr[i] > arr[indexMax]) {
        indexMax = i;
      }
    }
  
    return [indexMin, indexMax];
  }
  
  const arr = [10, 5, 2, 15, 7, 8];
  const [indexMin, indexMax] = indexMinMax(arr);
  
  console.log(`Índice do menor valor: ${indexMin}`); 
  console.log(`Índice do maior valor: ${indexMax}`); 
  