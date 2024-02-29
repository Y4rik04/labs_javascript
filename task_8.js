const task5Function = (array, propertyName) => {
    return array.map(obj => ({
      ...obj,
      [propertyName]: obj[propertyName].charAt(0).toUpperCase() + obj[propertyName].slice(1)
    }));
  };
  
  const inputArray = [
    { name: 'john', age: 25 },
    { name: 'mark', age: 28 },
    {  name: 'sean', age: 12 }
  ];
  
  const outputArray = task5Function(inputArray, 'name');
  console.log(outputArray);