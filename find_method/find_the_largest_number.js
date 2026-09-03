let arr = [10, 25, 15, 40, 30, 55];
let largest = arr.reduce((prev, current) => {
    if(current>prev)
    {
        prev=current
    }
    return prev;
});

console.log(largest);

