var count1 = 0;
var count2 = 0;
var count3 = 0;

function likePlus1(){
    let countElement = document.querySelector("#likesID1")
    count1++;
    countElement.innerText = count1;
}

function likePlus2(){
    let countElement = document.querySelector("#likesID2")
    count2++;
    countElement.innerText = count2;
}

function likePlus3(){
    let countElement = document.querySelector("#likesID3")
    count3++;
    countElement.innerText = count3;
}