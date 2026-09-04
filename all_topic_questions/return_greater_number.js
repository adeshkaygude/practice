let nums = [10, 15, 20, 25, 30, 35, 40, 45, 50];

function greater(arr){
    return arr.filter(function(el){
        return el>30;

    })
}

console.log("greater than 30 : ",greater(nums));
