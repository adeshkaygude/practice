let arr = [12, 17, 23, 31, 45, 52];
let ans=arr.some((el)=>{
    return el%2==0&&el>40;
})

console.log(ans);
