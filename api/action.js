//normal function api

// function getdata(data){
//     console.log("getting data",data,"...");
//    console.log("data ",data);
// }

// getdata(1);
// getdata(2);
// getdata(3);

//callback dome api 

// function getdata(data,getnextdata){
    
//    setTimeout(()=>{
//     console.log("data ",data);
//    if(getnextdata){
//     getnextdata();
//    }
//    },2000);
// }

// getdata(1,()=>{
//     console.log("getting data 2....");
//     getdata(2,()=>{
//         console.log("getting data 3....");
//         getdata(3,()=>{
//             console.log("getting data 4...");
//             getdata(4);
//         })
//     })
// });

//getting data through promise api

function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("successfull");
        },3000)
        });
};

// getdata(1).then((res)=>{
//     console.log("getting data 2.../");
//     getdata(2).then((res)=>{
//         console.log("getting data 3.../");
//         getdata(3);
//     });
//     });

// getdata(1).
//        then((res)=>{
//         console.log("getting data 2.../")
//         return getdata(2);
//        }).
//        then((res)=>{
//         console.log("getting data 3.../")
//         return getdata(3);
//        });

// async function getting(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);
// };

(async function(){
    await getdata(1);
    await getdata(3);
    await getdata(2);
    await getdata(4);
    await getdata(5);
})();


       

