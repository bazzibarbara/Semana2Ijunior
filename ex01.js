function checkPalindrome(str) {     
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
function lista(num){
    num.sort(function(a, b){return a-b});
    var m1 = num[num.length-1];
    var m2 = num[num.lenght-2];
    return(console.log("o maior valor é m1 e o segundo maior valor é m2"));
    }

function prime(numero){
    for(let i = 2; i<numero; i++){
        if(numero % i == 0){
        return false;
        }
        return true;
    } 


