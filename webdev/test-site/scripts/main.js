let myImage = document.querySelector('img');   //querySelector()函数获取标题的引用,并把它存储在myImage变量中。

myImage.onclick = function() {                 //onclick事件:事件会在对象被点击时发生；把一个匿名函数赋值给html的onclick属性；这里是把myImage变量的onclick事件与一个匿名函数绑定。
    let mySrc = myImage.getAttribute('src');   //getAttribute:返回指定属性名的属性值。(返回在index.html文件中<img>的src的属性值并赋值给变量mySrc)。
    if(mySrc === 'images/firefox-icon.png') {  //使用条件语句判断src的值是否等于原始图像的路径，如果是则改为第二张图片的地址，并在<img内加载该图片>，反之返回原始图片地址。
        myImage.setAttribute('src', 'images/firefox2.png');  //setAttribute()：添加指定的属性，并为其赋指定的值。
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
};

//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt('请输入你的名字。');                    //prompt()：用于显示可提示用户进行输入的对话框。
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);                   //localStorage API：将数据存储在浏览器中供后续获取。setItem()：创建一个name数据项，并把myName变量赋值给它。
        myHeading.textContent = 'Mozilla 棒极了,' + myName;     //textContent：设置或返回指定节点的文本内容，以及它的所有后代。
    }                                                           //这里用localStorage的setItem()函数来创建一个'name'数据项，并把myName变量赋值给它。
}                                                               //最后将textContent属性设置为一个欢迎字符串加上这个新设置的名字。

//初始化代码：在页面初次读取时进行构造工作
if(!localStorage.getItem('name')) {                  //getItem()：获取保存的名字。
    setUserName();                                   //使用取非运算符'!'来检测'name'数据是否存在，若不存在，调用setUserName()创建。
} else {                            
    let storedName = localStorage.getItem('name');   //若存在，调用getItem()获取保存的名字。
    myHeading.textContent = 'Mozilla 棒极了,' + storedName;
}

//为按钮设置onclick事件处理器
myButton.onclick = function() {
    setUserName();                                   //按下按钮时运行setUserName()函数。
};
