let arr = [12, 45, 7, 89, 23, 56];
let largest=0;

for(let value of arr)
{
    if(value> largest)
    {
        largest=value;
    }
}
console.log(largest);
