if(true){
let balance=5000;
function withdrawal(requested){
    requested=Number(requested);
    if(isNaN(requested) || requested<=0){
        return "Invalid amount";
    }
    if(requested%50!=0){
        return "Please enter a multiple of 50";
    }
    if(requested>balance){
        return "Insufficient ATM funds";
    }
    balance-=requested;

    let b200=parseInt(requested/200);
    requested=requested%200;
    let b100=parseInt(requested/100);
    requested=requested%100;
    let b50=parseInt(requested/50);
    requested=requested%50;

    return "The Count of each bill is 200*"+b200+" , 100*"+b100+" , 50*"+b50 +"The New Balance is "+balance +"$";

}

console.log(withdrawal("6000"));

}
