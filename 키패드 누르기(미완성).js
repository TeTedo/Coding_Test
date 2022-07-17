function solution(numbers, hand) {
    var answer = '';
    let keyPad = [[1,4,7,"*"],[2,5,8,0],[3,6,9,"#"]];
    let leftHand = "*";
    let rightHand = "#";
    let leftIndex;
    let rightIndex;
    
    for(let i = 0 ; i<numbers.length; i++){
        //3가지 경우로 나눔
        if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7){
            answer += "L";
            leftHand = numbers[i];
        }
        else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9){
            answer += "R";
            rightHand = numbers[i];
        }
        else{
            //왼손 인덱스값 추가
            if(keyPad[0].indexOf(leftHand) !== -1){
                leftIndex = keyPad[0].indexOf(leftHand);
            }
            else{
                leftIndex = keyPad[1].indexOf(leftHand);
            }
            //오른손 인덱스값 추가
            if(keyPad[2].indexOf(rightHand) !== -1){
                rightIndex = keyPad[2].indexOf(rightHand);
            }
            else{
                rightIndex = keyPad[1].indexOf(rightHand);
            }
            //numbers 인덱스값 구하기
            let numbers_index = keyPad[1].indexOf(numbers[i]);
            
            //거리계산
            if(Math.abs(leftIndex - numbers_index)>Math.abs(rightIndex - numbers_index)){
                answer += "R";
                rightHand = numbers[i];
            }
            else if(Math.abs(leftIndex - numbers_index)<Math.abs(rightIndex - numbers_index)){
                answer += "L";
                leftHand = numbers[i];
            }
            else{
                if(hand == "right"){
                    answer += "R";
                    rightHand = numbers[i];
                }
                else{
                    answer += "L";
                    leftHand = numbers[i];
                }
            }
            
            
        }
        
    }
    
    
    return answer;
}