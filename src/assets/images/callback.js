

function result(callback){


console.log("result is");
callback(2,5)


}
function sum(a,b){
    let sum=a+b;
    console.log(sum);
 
}

result(sum);