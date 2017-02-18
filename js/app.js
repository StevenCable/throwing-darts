// let score = (
let arr = [-2,6,11,'steven'];
  function getValidNumbers(element, index, array){
    if(typeof element !== 'number'){
      return false;
    }else if(element>=0){
      return parseInt(element); 
    }else{
      return false;
    }
  }
  let stuff = arr.filter(getValidNumbers)
  console.log(stuff)

  function totalScore(prev, curr, index, array){
      return prev + curr;
    }

  // function checkAll(element){
  //   return
  // } NEED TO ADD BONUS WITH THIS CHECK

  function scoreThrows(array){

   return  array.filter(getValidNumbers)
    .map((element, index, array) => {
      if(element>0 && element<5){
        return 10;
      }
      if(element>=5 && element <=10){
        return 5;
      }
      if(element>10){
        return 0
      }
    })
    .reduce(totalScore,0)

    }

// )

console.log('score should be 15: ',scoreThrows([-1,2]))

// module.exports = score; 

