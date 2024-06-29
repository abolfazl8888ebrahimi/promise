
function add (number1 , number2){
return new Promise((resolve , reject) => {
    setTimeout(() => {
        if(number1 >= 0 && number2 >= 0){
            resolve(number1 + number2)
        }
        else{
            reject(new Error('مقدار منفی قابل قبول نیست'));
        }
    }, 1000);
})
}

add(-5 , -1).then(function(result) {
    console.log('Result :' + result);
})
.catch((err)=>{

    console.log(err)
})
