var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var  database = {};
fs.readdir('./public/img/',function(err,files){

	// console.log(files);
	// for(var i = 0;i<files.length;i++){
	// 	fs.stat('./public/img/'+files[i],function(err,infor){
	// 	    console.log(infor.ctime);
	//     })
	// }
	


	for(var i = 0; i<files.length;i++){
		fs.stat('./public/img/'+files[i],(function(i){
		return function(err,info){
					var mtime = info.mtime;
			        var key = mtime.getFullYear()+'-'+mtime.getMonth()+'-'+mtime.getDate();
			        if(!database[key]){
			        	database[key] = [];
			        }
			        database[key].push(files[i]);
			        console.log(database);
				}
            })(i))
	}
	
})

// ctime = change time     atime = access time      mtime = modify time
// 我们的目标把  shenqi = {} ； 变成
// shenqi = {
// 	15465:[{time:3,src:1.jpg},{time:2,src:2.jpg}],
// 	15465:[{time:3,src:1.jpg},{time:2,src:2.jpg}],
// 	15465:[{time:3,src:1.jpg},{time:2,src:2.jpg}]
// }
// var shenqi = {};
// var fs = require('fs');
// fs.readdir('./public/img',function(err,files){
// 	for( var i = 0; i<files.length;i++){
// 		fs.stat('./public/img/' + files[i],function(err,stats){
// 			console.log(stats.ctime);
// 		});
// 	}
// });





app.use(express.static('public'));
app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// var database = {
// 	'2015-10-27':['1.jpg','2.jpg','3.jpg'],
// 	'2015-10-26':['5.jpg','6.jpg','7.jpg']
// }
app.get('/rilichatu',function(req,res){
	//  res.json()  发 {}  []  [{}]  {[]}
	//  res.send     ->   25   'uhoijk'
	var aa = req.query.time;
	if(database[aa]){
		res.json(database[aa]);
	}else{
		res.send('none');
	}
	
})
http.listen(80,function(){
	console.log('listening on *:80');
});

//  上面这些代码实质上做了些什么事
// 所谓的web服务器软件，就是让电脑上的某个文件夹变成公开的
// 任何人都可以通过ip地址请求这个文件夹里的内容
// 前提是请求的时候要描述清楚双方交流的语言（采用http协议）


// for(var i = 0; i<12;i++){
// 	console.log(i);
// };


// node.js   就是一个应用程序   和浏览器和qq和sublime一样
// 浏览器能干吗    能上网   能解析js代码
// node.js     （只有一个作用） 解析js代码
// 可以把node.js理解为系统级别的应用程序
// 它让我们的操作系统从现在开始可以解析js代码

// node.js 在自己的运行环境中添加了很多特定的API
// 比如对文件的操作   比如对网络请求的操作
// 对时间的操作等等


// -----------数据存储 和 逻辑操作 ------------------------
// 浏览器      window   setInterver    setTimeout    document.
// node      http     file




// 客户端   服务器     这种模式有什么好处
// 网络的好处.
// 服务器模式服务范围是无限的


// 浏览器根据url发起http请求
// 服务器（）根据请求的内容作出回应


// js 发起http请求




















// 什么是服务器
// 什么是url
// 什么是http协议
// 怎么访问服务器上的数据
// node.js是什么
// 为什么需要服务器

// 当我们在浏览器中输入http://wwww.baidu.com 的时候究竟发生了什么


// ajax  是什么
// 使用ajax 有什么好处
// 利用ajax和node.js 可以做什么
// 例子