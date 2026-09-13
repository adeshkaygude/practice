function count(n){
    if(n===0){
        return n;
    }
    console.log(n);
    count(n-1);
    
}
count(10);