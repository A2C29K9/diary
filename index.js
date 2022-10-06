mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标签1 = new 标签("标签1",null);
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){
	网络操作1.发送网络请求("https://cypress0522.github.io/tools/diary/content2.txt","get","text","",5000);
}

function 网络操作1_发送完毕(发送结果,返回信息){
	var 内容 = 文本操作.分割文本(返回信息,"---");
	var 计次= 数组操作.取成员数(内容);
	标签1.置标题(内容[数学操作.取随机数(0,计次)]);
}
