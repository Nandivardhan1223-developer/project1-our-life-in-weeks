let ageinp=document.querySelector("#ageinp");
let calcbtn=document.querySelector("#calcbtn");
let resetbtn=document.querySelector("#resetbtn");
let refreshtag=document.querySelector("#refreshtag");
let result=document.querySelector("#result");
let displayanswer=document.querySelector("#displayanswer");
let age;
let timer;
calcbtn.addEventListener("click",function(){
    // alert("no");
    age=ageinp.value.trim();
    if(age==""){
        clearInterval(timer);
        let alert1=document.querySelector('.alert1');
        alert1.classList.add('active');
        timer=setInterval(function(){
            alert1.classList.remove('active');
        },3000)
    }else if(isNaN(age)){
        clearInterval(timer);
        let alert2=document.querySelector('.alert2');
        alert2.classList.add('active');
        timer=setInterval(function(){
            alert2.classList.remove('active');
        },3000)

    }else{
        let answer=document.querySelector('.answer');
        answer.classList.add('active');
        let remeining_years=90-age;
        let remaining_weeks=numberWithCommas(remeining_years*52);
        result.innerHTML=remaining_weeks;
        ageinp.value="";
    }
})
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
resetbtn.addEventListener("click",function(){
    refreshtag.click();
})