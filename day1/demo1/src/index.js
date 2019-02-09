document.write("<h1 style='text-align:center;'>使用webpack3构建最简单的应用</h1>");
document.write("webpack3需要自定义webpack.config.js文件<br>");
document.write('<pre>' +
    'module.exports = {' +
        'entry: path.resolve(__dirname, "./src/index.js"),' +
        'output: {' +
            'path: path.resolve(__dirname, "./dist"),' +
            'filename: "[name].js"' +
        '}' +
    '}' +
'</pre>');
document.write("entry单页面入口默认chunk名[name] = main <br>");
document.write("将如下命令添加到package.json文件的scripts脚本中<br>");
document.write('<pre>"webpack": "webpack --config webpack.config.js"</pre>');
document.write("执行如下命令就可以打包构建<br>");
document.write("<pre>npm run webpack</pre>");
