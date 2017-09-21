# Readme
***

#### 功能介绍

通过nodejs抓取知乎日报内容，通过cheerio整理，最终通过react呈现。

为优化阅读体验，支持字体大小调节，手势翻页.

#### 使用方法

1. 命令行输入``npm install``安装所需要的依赖模块

2. 命令行进入./app/js/输入``node crawlerZhihu``，运行crawlerZhihu，nodejs爬虫抓取知乎日报当日内容，通过cheerio模块进行内容整理，最终以json形式输出到指定位置。

3. 命令行输入 ``node margeFile``, 将上一步爬到的各文章进行合并，合并文件将自动成为React所需的文件.

4. 命令行输入``npm run server``,开始运行

