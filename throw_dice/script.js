const dice = document.querySelector(".dice");
const dicenum = document.querySelector(".dice-num");
const btn = document.querySelector("button");
const no1 = document.querySelector(".no1>img");
const no2 = document.querySelector(".no2>img");
const no3 = document.querySelector(".no3>img");
const no4 = document.querySelector(".no4>img");
const no5 = document.querySelector(".no5>img");
const no6 = document.querySelector(".no6>img");

dicenum.style.display = "none";

function hideDice(){
    no1.style.display = "none";
    no2.style.display = "none";
    no3.style.display = "none";
    no4.style.display = "none";
    no5.style.display = "none";
    no6.style.display = "none";
}

// 랜덤하게 숫자를 가져오는데 1~6까지의 숫자를 가져온다.
btn.addEventListener("click", 
    function(){
        hideDice();
        const result = `${Math.ceil(Math.random()*6)}`;
        if(result == 1){
            dicenum.style.display = "block";
            no1.style.display = "block";
        }
        else if(result == 2){
            dicenum.style.display = "block";
            no2.style.display = "block";
        }
        else if(result == 3){
            dicenum.style.display = "block";
            no3.style.display = "block";
        }
        else if(result == 4){
            dicenum.style.display = "block";
            no4.style.display = "block";
        }
        else if(result == 5){
            dicenum.style.display = "block";
            no5.style.display = "block";
        }
        else if(result == 6){
            dicenum.style.display = "block";
            no6.style.display = "block";
        }
        else{
            console.log("주사위를 굴릴수 없습니다.");
        }
    }
);