const promise=new Promise(function(resolve,reject){
    let success=false;
    if(success){
        console.log("promise is resolved");
    }else{
        console.log("promise is rejected");
    }
});
promise.then(function(result){
    console.log("result");
});
promise.then(function(error){
    console.log("error");
});