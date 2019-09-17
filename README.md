

# markdown-it-image-loading

markdown 图片loading效果


## 安装

```bash
npm i markdown-it-image-loading
```


## 使用

```js
const md = require('markdown-it')().use(require('markdown-it-image-loading'));
```


## 默认效果

![](sss) 


## 参数

* `loadingSrc` loading 图片 src 
* `width` : loading 图片宽度
    - 默认：30
* `height` : loading 图片高度
    - 默认：30
* `minWidth` : 图片最小宽度 `(图片的最小高度)`
    - 默认：100  
* `minHeight` : 图片最小高度 `(图片的最小宽度)`
    - 默认：100 
* `bgColor` : 图片背景颜色 `(图片的背景颜色)`
    - 默认：''    




```js 
const md = require('markdown-it')().use(require('markdown-it-image-loading'), {
    loadingSrc: 'https://picsum.photos/300/150/?random',
    width: 30,
    height: 30,
    minWidth: 100,
    minHeight: 100, 
    bgColor: '#000'
}); 
```

## markdown 设置

可以给每一张图片单独设置样式

```html
![](/){loadingSrc=/loading.gif width=50 height=50 minWidth=200 minHeight=200  bgColor=#ccc} 
```
![](/){loadingSrc=/loading.gif width=50 height=50 minWidth=200 minHeight=200  bgColor=#ccc} 