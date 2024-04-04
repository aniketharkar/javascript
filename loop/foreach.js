console.log("hello js");

let foreaach=(greet)=>{
    console.log("this function holds the address of function");
    greet(1);
}
foreaach((val)=>{
    console.log("this is block function");
    console.log(val);
});
// for each function calls
// the function by passing one value to it 

let arr=[1,2,3,4,5,6,7,8,9,10];
let arr1=(val)=>{
    console.log(val*val);
};
arr.forEach(arr1);

console.log("map");

let arr2=arr.map((val)=>{
    if(val<7)
    return val;
});
console.log(arr2);

console.log("filter");

let arr3=arr.filter((val)=>{
      if(val%2===0){
        return val;
      }
});
console.log(arr3);

console.log("reduce");

let arr4=arr.reduce((prev,val)=>{
       return prev+val;
});

console.log(arr4);

let h=document.getElementById("1");
h.bgcolor="pink";