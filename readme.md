* 安装依赖
```
npm i

```
* 生成css
```
gulp
```

# 目录
```
└─css                           // 这个目录是打包工具生成的,和scss目录是一致的
    ├─commons                   // 公用的css目录      例如:清零样式,公用的头部底部样式都可以放在zero.scss里
    └─pages                     // 页面使用的css目录
└─html                          // 页面目录
└─images                        // 图片目录
    ├─commons                   // 公用的图片目录      例如:公用的头部和底部使用到的图片可以放在这里
    └─pages                     // 页面用的图片目录
└─js                            // js目录
    ├─commons                   // 公用的js目录       例如:jq和一些touchSlide插件可以放在这里
    └─pages                     // 页面用到js目录
└─scss                          // scss目录   以后写css在这里写
    ├─commons                   // 公用的scss目录      例如:清零样式  头部底部 都可以放在zero.scss里
    └─pages                     // 页面使用的scss目录
```

# .gitkeep文件介绍
* git不会提交空目录,加上这个文件是为了可以把空目录页提交上去,当目录里有东西了,这个文件可以删掉

# 以后这个大树手机就是你的标准git模板了
1. 以后你写新项目，首先你要去github上新建一个仓库
2. 把仓库地址复制下来
3. 克隆岛你本地
```
    git clone 仓库地址
```
4. 把你这个大树手机里的五个文件复制到新的项目里，这五个文件分别是
    - .gitignore
    - gulpfile.js
    - package.json
    - package-lock.json
    - readme.md
5. 新建一个目录名字必须是 project
6. 在这个目录下再新建一个目录   这个目录用来放你的项目例如junru
7. 如果你是用scss就安装依赖 开gulp pc也可以使用scss 不用就算了
8. 写完之后把你的junru目录给别人就行了


# 提交git
```
    git add .
    git commit -m xxx
    git push
```



