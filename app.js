// Return number with the most repeats

//   if two numbers are repeated, return the first one
//  if none are repeated return -1


function testRepeat(arr) {
let max = 1;
let position = 0;
let value = -1;


    let tempNumbers = arr.reduce((acc, curr, index) => {
        acc[curr] = acc[curr] ? {
            ...acc[curr],
            amount: acc[curr]['amount'] + 1
        } : {
            amount: 1,
            index
        };
        let amount = acc[curr].amount;
        let place = acc[curr].index;
        if(amount > max || (amount === max && place <= position && amount > 1 )) {
            max = amount;
            value = curr;
            position = place;
        }
       


        return acc;
    }, {});
    return value;
}


console.log(testRepeat([5, 2, 2, 1, 5]));
console.log(testRepeat([6, 5, 5, 10, 10, 10]));
console.log(testRepeat([3, 4, 1, 6, 10]));