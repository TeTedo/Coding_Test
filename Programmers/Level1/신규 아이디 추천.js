function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase()
    .replace(/[^\w\.-]/g,"")
    .replace(/\.*\./g,".")
    .replace(/^\.|\.$/,"")
    
    if(answer == ""){
        answer = "a";
    }

    if(answer.length>15){
        answer = answer.match(/.{15}/).join("").replace(/\.$/,"");
    }
    
    while(answer.length<3){
        answer += answer[answer.length-1]
    }


    return answer;
}