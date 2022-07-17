function solution(board, moves) {
    var answer = 0;
    var box = [];
    for (let i = 0; i <moves.length; i++){
        var index = moves[i] -1;
        for (let k = 0; k<board.length; k++){
            if(board[k][index]!==0){
                box.push(board[k][index]);
                board[k].splice(index,1,0);
                break;
            }
        }
        for (let j =1; j<box.length;j++){
            if(box.length>=2 && box[j-1] == box[j]){
            box.splice(j-1,2)
            answer +=2;
            }
        }
        
    }
    
    return answer;
}