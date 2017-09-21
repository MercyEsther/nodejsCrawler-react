/***********
zhihu.js
功能： 提取知乎日报每篇文章的title / content
存储位置： "../app/json/zhihu-1.json"
文件命名： zhihu-[number]
        ep: zhihu-1 / zhihu-2 ...
***********/
var http = require("http");
var cheerio = require("cheerio");
var fs = require("fs");
var path = require("path");

// 获取文章地址
var getArticleUrl = function(){
  let promise = new Promise(function(resolve, reject){
    //待解析地址
    let url = "http://daily.zhihu.com/";
    // 抓取文章地址
    http.get(url, (res) =>{
      let html = '';

      res.on("data", (data) =>{
        html += data;
      });

      res.on("end", () =>{
        //过滤数据并获得文章地址
        let articleUrl = dataFilter(html);
        resolve(articleUrl);
      });
    });
  })
  return promise;
};

//获取文章内容
var getArticleContent = function(articleUrl){
    for (let i=0;i < articleUrl.length;i++){
      http.get(articleUrl[i], (res) =>{
        let article = '';

        res.on("data", (data) =>{
          article += data;
        })

        res.on("end", () =>{
          let contentObj = articleFilter(article);
          let filePath = "../json/zhihu-" + i + ".json";
          writeToFile(filePath, contentObj);
        })
      });
    }
};

getArticleUrl().then(function(articleUrl){
  getArticleContent(articleUrl);
});

//筛选文章地址
function dataFilter(html){
  let $ = cheerio.load(html);
  let articleUrl = [];
  $('.link-button').each(function(){
    articleUrl.push("http://daily.zhihu.com" + $(this).attr('href'));
  });
  return articleUrl;
}

//文章类容筛选
function articleFilter(html){
  let $ = cheerio.load(html);
  let contentObj = [];

  let article = $('.content-wrap');
  let title = article.find('.headline-title').text();
  contentObj.push({
    "title": title
  });
  $('p').each(function(){
    let para = $(this).text();
    contentObj.push({
      "para": para
    })
  });
  return contentObj;
};

//文件存储
function writeToFile(path, contentObj){
  let content = [];
  for(let i = 1;i < contentObj.length;i++){
    content.push(contentObj[i])
  }
  let article = {
    "title": contentObj[0].title,
    "content": content
  };

  article = JSON.stringify(article);
  let buffer = new Buffer(article);
  fs.writeFile(path, buffer, (err) =>{
    if (err){
      console.log("zhihu.json 文件写入失败");
    }else {
      console.log("zhihu.json 文件写入成功");
    }
  })
}
