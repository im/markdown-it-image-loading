module.exports = (options, ctx) => {
    return {
        name: 'test',
        extendMarkdown: md => {
            md.set({ breaks: true })
            md.use(require('./index'))
        }
    }
}


// const md = require('markdown-it')()


// md.use(require('./index'), {
//     loadingImgSrc: 'https://picsum.photos/300/150/?random',
//     loadingImgWidth: 30,
//     loadingImgHeight: 30,
//     imgMinWidth: 100,
//     imgMinHeight: 100,
//     imgBgColor: '#000'
// })


// md.render("![test](test.jpg){width=100 loadingImgSrc=111}")
// md.render("![test](test.jpg)")