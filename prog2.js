handlefunction=(val,funct)=>{
    if(val<=10){
        return funct(10);}
        else if (val>10){
            return funct(20);
        }
    };
    myfunc=(a)=>{
        return a*10;

    };
    myfunc1=(b)=>{
        return b*10;
    };
var x=handlefunction(10,myfunc);
var y=handlefunction(20,myfunc1);

console.log(x);
console.log(y);


