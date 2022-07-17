function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i<n; i++){
        answer[i] = ""
        for(let k =0; k<n; k++){
            if(parseInt(arr1[i]/2**(n-1-k)) !==0){
                arr1[i] -= 2**(n-1-k)
                answer[i] += "#"
                if(parseInt(arr2[i]/2**(n-1-k)) !==0){
                    arr2[i] -= 2**(n-1-k)
                }
            }
            else if(parseInt(arr2[i]/2**(n-1-k)) !==0) {
                arr2[i] -= 2**(n-1-k)
                answer[i] += "#"
            }
            else{
                answer[i] += " "
            }
           
        }
    }
    return answer;
}