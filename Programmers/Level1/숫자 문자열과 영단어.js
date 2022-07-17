function solution(s) {
    var answer = 0;
    let number = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    for(let i = 0; i<number.length; i++){
    let numberreg = RegExp(number[i],"g")
    s = s.replace(numberreg,i)
    answer = Number(s)
    }
    return answer;
}