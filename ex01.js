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


function vog(char) {
    c = char.split();
    var v_a = 0;
    var v_e = 0;
    var v_i = 0;
    var v_o = 0;
    var v_u = 0;
    for (var i = 0; i < char.length; i++) {

        if (char[i] == 'a') {
            v_a++;
        }
        if (char[i] == 'e') {
            v_e++;
        }
        if (char[i] == 'i') {
             v_i++;
        }
        if (char[i] == 'o') {
             v_o++;
        }
        if (char[i] == 'u') {
             v_u++;
        }

    }
    console.log("vogal a="+v_a);
    console.log("vogal e="+v_e);
    console.log("vogal i="+v_i);
    console.log("vogal o="+v_o);
    console.log("vogal u="+v_u);
}


