function one(arr, fun) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(fun(arr[i])) sum++;
    }
    if(sum==1) return true;
    return false;
}

function letterCheck(arr) {
    let dict = new Map();
    for(let i=0; i<arr[0].length; i++){
        dict.set(arr[0].charAt(i),1);
    }
    for(let i=0; i<arr[1].length; i++){
        if(!dict.get(arr[1].charAt(i))) return false
    }
return true;
}

function splitOddAndEven(n) {
    let arr=[],odd=0,even=0,str='';
    while(n){
        digit=n%10;
        if(digit%2==0){
            if(odd){
                arr.unshift(str);
                str=digit.toString();
                even=1
            }else if(even){
                str=digit.toString()+str;
            }
            else{
                even=1;
                str+=digit.toString();
            }
        }else{
            if(odd){
                str=digit.toString()+str;
            }else if(even){
                arr.unshift(str);
                str=digit.toString();
                odd=1;
            }
            else{
                odd=1;
                str+=digit.toString();
            }
        }
        n=parseInt(n/10);
    }
    arr.unshift(str);

return arr;
}

function complete(str) {
    for(let i=0; i<str.length; i++){
        str+=str[i];
        let reversed=str.split('').reverse().join('');
        // console.log(str);
        // reversed=arr.reverse;
        if(str === reversed)break;
    }
return str;
}

function shorterestTime(n,m,speeds) {
    let ele=2*speeds[1]+speeds[2]+(Math.abs(m-n))*speeds[0]+n*speeds[0];
    let ele_walk=2*speeds[1]+speeds[2]+(Math.abs(m-n))*speeds[3]+m*speeds[0];
    let walk=n*speeds[3];
return Math.min(ele,ele_walk,walk);
}


console.log(one([1,2,3,4,5], function(item){ return item%2 !== 0 }));
console.log(letterCheck(["drapes", "compadres"]))
console.log(splitOddAndEven(135246))
console.log(complete("aba"))
console.log(shorterestTime(4,3,[2,3,4,5]))