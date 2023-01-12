
function add(a,b){
    let sum=a+b;
    return sum;
}


function sub(a,b){
    let sum=a-b;
    return sum;
}

function div(a,b){
    let sum=a/b;
    sum=sum.toFixed(2);
    return sum;
}

function mult(a,b){
    let sum=a*b;
    return sum;
}

export default add;
export {sub, div,mult}
