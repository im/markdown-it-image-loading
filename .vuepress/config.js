module.exports = {
    title: 'markdown-it-image-loading',
    base: `/markdown-it-image-loading/`,
    plugins: [
        [
            require('../test'),
            {
                // loadingImgSrc: 'https://picsum.photos/300/150/?random',
                loadingImgWidth: 30,
                loadingImgHeight: 30,
                imgMinWidth: 100,
                imgMinHeight: 100,
                // imgBgColor: '#000'
            }
        ]
    ]
}