// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
// Examples:
// // must return 0
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1000, sugar: 1200, eggs: 5, milk: 200}); 


// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// cakes({flour: 500}, {flour: 1000}); 

function cakes(recipe, available){

  //declare empty arrays for comparison and interger manipulation
  let recipeArr = []
  let availableArr = []
  let howManyCakes = []

    //push keys of recipe and avaiable into empty arrays
    for (let key in recipe) {
      // console.log(`${key} in ${obj1[key]}`)
      recipeArr.push(key)
    }
    for (let key in available) {
      availableArr.push(key)
    }

    //check to see if avaiable includes recipe
    if(!availableArr.includes(...recipeArr)){
      //if it doesnt, 0 cakes can be made
      console.log('0')
      } else {
        //if everything exists, divide and store numbers
        for (let val in avaiable) {
        howManyCakes.push(avaiable[val]/recipe[val])
      
      }
    }
    //sort the numbers in order to print the lowest number
    howManyCakes.sort((a,b)=> a-b)
    //return lowest number in sorted list
    console.log(howManyCakes[0])


}