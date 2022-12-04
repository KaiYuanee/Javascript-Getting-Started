// 製作一個問答程式
var question = [
    {
        prompt: "Miko是不是很可愛？\n(1) 是\n(2) 不是",
        answer: 1
    },
    {
        prompt: "Suisei是不是很可愛？\n(1) 不是\n(2) 是",
        answer: 2
    },
    {
        prompt: "Suisei和Miko是不是都很可愛\n(1) 都不是\n(2) 只有Suisei是\n(3) 只有Miko是\n(4) 都很可愛",
        answer: 4
    }
]
var score = 0;
for (var i=0;i<question.length;i++){
    var input = prompt(question[i].prompt);
    if (input==question[i].answer){
        score++;
        alert("答對了！");
    } else{
        alert("答錯了！");
    }
}
alert("總共答對了" + score + "題"); // Javascript可將字串與數字做相加