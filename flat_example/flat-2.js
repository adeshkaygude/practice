let nums = [1, 2, 3];

let result = nums.flatMap((num)=>{
    return [num,num*2]
})
console.log(result);
