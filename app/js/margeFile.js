var fs = require('fs');

/*
 合并后的文件结构
*/
// var fileContent = [
//   {
//     "title": "",
//     "content": ""
//   }
// ];
var fileContent = [];
const numberOfFiles = getNumberOfFiles("../json");

//获取目录下文件数量
function getNumberOfFiles(path) {
  let num = fs.readdirSync(path).length-1;
  return num;
}

//读取文件
function readFile(){
  let promise = new Promise(function(resolve, reject){

    //需要合并文件的文件路径
    let filePath = []
    for (let i=0;i < numberOfFiles;i++) {
      filePath.push("../json/zhihu-" + i + ".json");
    }

    filePath.forEach((path) =>{
      let file = fs.readFileSync(path, 'utf-8');
      file = JSON.parse(file.toString());
      fileContent.push({
        "title": file.title,
        "content": file.content
      });
    })
    if(fileContent.length == numberOfFiles){
      resolve();
    }
  });

  return promise;
}

readFile().then(function(){
  fileContent = JSON.stringify(fileContent);
  let buffer = new Buffer(fileContent);
  //写文件
  fs.writeFile("../json/zhihu.json", buffer, (err) =>{
    if (err) {
      console.log("zhihu.json 写入失败");
    }else {
      console.log("zhihu.json 写入成功");
    }
  })
});
