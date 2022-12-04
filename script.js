document.write("<h1>hello world</h1>"); // 在檔案寫上hello world(可加入標籤)
document.write("<br>");

// 基本資料型態 & 變數

/* 字串(與Python一樣可以用單引號或雙引號) */ "hello world", 'hello world'
/* 數字 */ 1, 2, 3.9
/* 布林值 */ true, false

// 變數
var s = "Javascript";
document.write(s);
document.write("<br>");
var n = 100;
document.write(n);
document.write("<br>");
var bool = true;
document.write(bool);
document.write("<br>");
/* 變數命名規則
1. 只能是英文大小寫、數字、$、_的組合
2. 開頭不能是數字
*/

// 字串的用法
var s = "hello\" world"; // 加上斜線可在字串加入雙引號
var s = "hello" + "world"; // 字串相加表示連接
var t = "AA"
document.write(s + t); // 也可使用變數
document.write("<br>");
document.write(s.length); // 得知字串長度
document.write("<br>");
document.write(s.toUpperCase()); // 將字母全部轉成大寫再回傳
document.write("<br>");
document.write(s.toLowerCase()); // 將字母全部轉成小寫再回傳
document.write("<br>");
document.write(s.charAt(1)); // 回傳字串的第幾位(開頭從0開始算)
document.write("<br>");
document.write(s.indexOf('h')); // 從裡面的內容找出第幾位(字元也可用單引號或雙引號)
document.write("<br>");
document.write(s.indexOf('q')); // 若字串內無該字元則回傳-1
document.write("<br>");
document.write(s.indexOf('l')); // 若該字元在字串中超過2個則回傳最前面的
document.write("<br>");
document.write(s.substring(0, 5)); // 子字串寫法(從第0位至第4位)
document.write("<br>");
document.write(s.substring(2, 10)); // 從第2位至第9位
document.write("<br>");

// 數字的用法
document.write(6.2);
document.write("<br>");
document.write(-6.245687);
document.write("<br>");
document.write(6+3); // 加法
document.write("<br>");
document.write(6-3); // 減法
document.write("<br>");
document.write(6*3); // 乘法
document.write("<br>");
document.write(6/3); // 除法
document.write("<br>");
document.write(2+3*5); // 先乘除後加減
document.write("<br>");
document.write((2+3)*5); // 括號內先做
document.write("<br>");
var n = 6;
document.write((2+3)*n); // 也可使用變數
document.write("<br>");
document.write(8%3); // %為取餘數
document.write("<br>");
document.write(Math.abs(n)); // 取絕對值
document.write("<br>");
document.write(Math.max(2, 3, 4, 55, 85, 12, 456, 215, 2, n)); // 找到最大值(可寫入多個值)
document.write("<br>");
document.write(Math.min(2, 3, 4, 55, 85, 12, 456, 215, 2, n)); // 找到最小值(可寫入多個值)
document.write("<br>");
document.write(Math.round(2.3)); // 四捨五入(注意浮點數誤差)
document.write("<br>");
document.write(Math.pow(2, 4)); // 次方運算
document.write("<br>");
document.write(Math.sqrt(36)); // 開根號
document.write("<br>");
document.write(Math.random()); // 回傳0到1的隨機一個數
document.write("<br>");
document.write(Math.random()*10); // 回傳0到10的隨機一個數
document.write("<br>");
document.write(Math.round(Math.random()*10)); // 混合應用
document.write("<br>");

// 製作一個基本的計算機
var name = prompt("請輸入你的名字："); // 讀取輸入(回傳預設為字串，括號內可寫上字串提示)
var age = prompt("請輸入你的年紀：");
document.write("你好啊" + name);
document.write("你今年" + name + "歲");
document.write("<br>");

var num1 = parseInt(prompt("請輸入數字1："));
var num2 = parseInt(prompt("請輸入數字2：")); // parseInt()將字串轉成整數
document.write(num1 + num2);
document.write("<br>");
var num1 = parseFloat(prompt("請輸入數字1："));
var num2 = parseFloat(prompt("請輸入數字2：")); // parseFloat()將字串轉成浮點數
document.write(num1 + num2);
document.write("<br>");

// 陣列 array
var scores = [80, 60, 20, 30, 50]; // 創建一個陣列
document.write(scores); // 將陣列印出
document.write("<br>");
document.write(scores[0]); // 取得陣列內的元素
document.write("<br>");
scores[2] = 30; // 更改陣列內的元素
document.write(scores);
var alphabet = ["A", "E", "I", "O", "U"]; // 陣列內的元素可以是任何資料型態
var mix = [true, "student", 36]; // 也能多種資料型態混合
document.write("<br>");
document.write(mix.length); // 回傳陣列內元素個數
document.write("<br>");

// 函式 function
function hello(){ // 函式定義
    document.write("你好");
}
hello(); // 函式呼叫
document.write("<br>");
hello();
document.write("<br>");

function hello_(name, age){ // 有參數的函式
    document.write("你好" + name + "你今年" + age + "歲");
}
hello_("小白", 65);
document.write("<br>");

function add(num1, num2){
    return num1 + num2; // 回傳(一碰到return馬上跳出)
    document.write("你好"); // 不會執行
}
document.write(add(3, 5));
document.write("<br>");

// if 判斷

// 如果...
var hungry = true;
if (hungry){
    document.write("我就去吃飯");
}
var hungry = false;
if (hungry){
    document.write("我就去吃飯");
}
document.write("<br>");

// 如果...否則...
var rainy = false;
if (rainy){
    document.write("我就開車去上班");
} else{
    document.write("我就走路去上班");
}
document.write("<br>");


// 如果...否則如果...否則...
var score = 190;
if (score==100){
    document.write("我給你1000元");
} else if (score>=80){
    document.write("我給你500元");
} else if (score>=60){
    document.write("我給你100元");
} else{
    document.write("你給我300元");
}
document.write("<br>");

// 如果...且...否則...
var score=100, rainy=true;
if (score==100 && rainy){
    document.write("我給你1000元");
} else{
    document.write("你給我100元");
}
document.write("<br>");

// 如果...或...否則...
var score=100, rainy=true;
if (score==100 || rainy){
    document.write("我給你1000元");
} else{
    document.write("你給我100元");
}
document.write("<br>");

// 如果...或沒有...否則...
var score=100, rainy=true;
if (score==100 || !rainy){
    document.write("我給你1000元");
} else{
    document.write("你給我100元");
}
document.write("<br>");

// 物件 object
/* 鍵 值
   key value*/
var person = { // 創建一個物件
    name: "KaiYuanee",
    age: 16,
    is_male: true,
    print_name: function(){ // 內部亦可寫函式
        document.write(this.name);
    }
};
document.write(person.name);
document.write("<br>");
document.write(person.age);
document.write("<br>");
document.write(person.is_male); // 取得物件屬性
document.write("<br>");
person.print_name(); // 呼叫函式
document.write("<br>");

var corporation = {
    name: "Hololive Production",
    founded: "2016/06/13",
    talents:[
        {
            name: "Hoshimachi Suisei",
            age: 18,
            is_female: true
        },
        {
            name: "Sakura Miko",
            age: undefined,
            is_female: true
        }
    ]
};
document.write(corporation.name);
document.write("<br>");
document.write(corporation.founded);
document.write("<br>");
document.write(corporation.talents[0].name);
document.write("<br>");
document.write(corporation.talents[1].name);
document.write("<br>");

// while 迴圈
var i = 1;
while (i<=3){ // 只要符合條件就會重複執行
    document.write(i);
    document.write("<br>");
    i++; // 遞增(與C/C++相同)
}
var i = 1;
do{ // 先執行再判斷條件是否成立
    document.write(i);
    document.write("<br>");
    i++;
} while (i<=3);

// for 迴圈
var i = 0;
for (i=0;i<10;i++){
    document.write(i);
    document.write("<br>");
}
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var q=0;q<alphabet.length;q++){ // 取出陣列的所有值
    document.write(alphabet[q]);
    document.write("<br>");
}

// 2維陣列、巢狀迴圈
var num = [[1, 2, 3], 
           [4, 5, 6], 
           [7, 8, 9],
           [0, 0]];
document.write(num[0][0]);
document.write("<br>");

for (var i=0;i<4;i++){
    for (var j=0;j<3;j++){
        document.write("i: " + i + ", j: " + j);
        document.write("<br>");
    }
}
for (var i=0;i<num.length;i++){ // 2維陣列遍歷
    for (var j=0;j<num[i].length;j++){
        document.write(num[i][j], end=' '); // 後面可加入end參數(和Python相同)
    }
    document.write("<br>");
}