let nums = [10, 20, 30, 40, 50, 60, 70];

function find_ind(arr){
    return nums.findIndex(function(el){
        return el==50;
    })
}

console.log("index is ",find_ind(nums));
