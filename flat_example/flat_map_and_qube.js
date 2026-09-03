let nums = [1, 2, 3, 4, 5];

let ans =nums.flatMap((el)=>{
    return [el,el*el*el];
})
console.log(ans);
