// event listener

// 第一種寫法：從HTML進入Javascript
function handle_click(element){ // 當按鈕被按下欲執行的函式
    alert("叫你按就按啊！");
    element.innerText = "按屁啊！";
    element.style.color = "red";
}

// 第二種寫法：直接在Javascript寫入
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){ // 當按鈕被按下欲執行的函式
    alert("叫你按就按啊！");
    this.innerText = "按屁啊！";
    this.style.color = "red";
});

var chest = document.getElementById("chest");
chest.addEventListener("mouseover", function(){ // 當滑鼠經過圖片欲執行的函式
    this.src = "Open_chest.png";
})
chest.addEventListener("mouseout", function(){ // 當滑鼠離開圖片欲執行的函式
    this.src = "Chest.png";
})