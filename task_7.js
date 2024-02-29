function TextSearchFunction(textFragments) {
    return function(searchText) {
      return textFragments.includes(searchText);
    };
  }
  
  const textArray = ['car', 'lodge', 'melon', 'mouse'];
  const searchFunction = TextSearchFunction(textArray);
  
  console.log(searchFunction('lodge')); 
  console.log(searchFunction('belt'));    