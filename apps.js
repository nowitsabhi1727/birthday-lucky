const form=document.querySelector(".form");
var luckyNo= document.querySelector("#luckyno");
var dateOfBirth=document.querySelector("#date");

var checkBtn=document.querySelector("#btn-check");
var iconCross=document.querySelector(".icon");
var alertRed=document.querySelector(".privacy-alert");
var luckyShow=document.querySelector(".lucky");
var unLuckyShow=document.querySelector(".unlucky");

var myArr;


iconCross.addEventListener("click",function crossEventHandler(){
    alertRed.style.display="none";
});

function clickEventHandler(e){
    e.preventDefault();
    var sum=0;
    var str=dateOfBirth.value;
    console.log(str);
    myArr=str.split('-').join('');
    console.log(myArr);
    for(var i=0;i<8;i++){
        sum=Math.floor(sum+myArr%10);
        myArr=myArr/10;
    }
    console.log(sum);
    if(sum % Number(luckyNo.value)===0){
        luckyShow.style.display="block";
        unLuckyShow.style.display="none";
    
    }
    else{
        unLuckyShow.style.display="block";
        luckyShow.style.display="none";
    
    }


}

form.addEventListener("submit",clickEventHandler);

