let arr = [12, 18, 24, 30, 36, 42];

let ans=arr.every((el)=>{
    return el%2==0&&el>10;
})

console.log(ans);
