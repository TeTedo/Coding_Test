function solution(N, stages) {
    var answer = [];
    let failrate = [];
    //실패율 계산
    for (let i = 0; i<N; i++){
        //stage 통과 인원
        let stagepass = stages.filter((stage)=> stage>=i+1).length
        //현재 스테이지
        let currentstage = stages.filter((stage)=> stage==i+1).length
        //실패율 조건
        let fail = stagepass !== 0 ?  currentstage/stagepass : 0;
        
        failrate.push([fail,i+1])
        //실패율 정렬
        failrate.sort((a,b)=>b[0]-a[0])
    }
    for (let k = 0;k<N; k++){
        answer.push(failrate[k][1])
    }
    return answer;
}