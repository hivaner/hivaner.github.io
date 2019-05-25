// Data Hot Destination
const dataHD = {
    type: '精品线路',
    title: ['热门旅游', '目的地'],
    data: [
        {name:'>百岛一日游（珊瑚）', image:'destination-1.jpg', button: '详情', link:'destination-1.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`各种各样的彩色珊瑚，珊瑚去世才是白色` },
        {name:'百岛一日游（小丑鱼）', image:'destination-2.jpg', button: '详情', link:'destination-2.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`海葵里的尼莫和他的朋友们` },
        {name:'百岛一日游（潜水）', image:'destination-3.jpg', button: '详情', link:'destination-3.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`头盔潜水和浮潜两种潜水` },
        {name:'巴雷一日游（冲浪）', image:'destination-4.jpg', button: '详情', link:'destination-4.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`冲浪课程让你掌握帅帅的驾驭冲浪板` },
        {name:'巴雷一日游（烧烤看银河）', image:'destination-5.jpg', button: '详情', link:'destination-5.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`肯定可以烧烤，银河取决于天气和时间。` },
        {name:'埃拉尼诺斯', image:'destination-4.jpg', button: '详情', link:'destination-5.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`一个神奇的小镇，百岛的必经之路。` },
    ]
}
// 上面数据可修改
// ————————————————————————————————————————————————————————————————————————————————————————————————
let dataHD_header = `
<section class="ftco-section ftco-destination">
<div class="container">
    <div class="row justify-content-start mb-5 pb-3">
  <div class="col-md-7 heading-section ftco-animate">
      <span class="subheading">${dataHD.type}</span>
    <h2 class="mb-4"><strong>${dataHD.title[0]}</strong> ${dataHD.title[1]}</h2>
  </div>
</div>
    <div class="row">
        <div class="col-md-12">
            <div class="destination-slider owl-carousel ftco-animate">
`
let dataHD_footer = `
</div>
</div>
</div>
</div>
</section>
`
let dataHD_html = dataHD_header
dataHD.data.forEach(data => {
    let star = ''
    for (let i=0;i<data.star;i++){
        star += '<i class="icon-star"></i>'
    }
    let template = 
    `
    <div class="item">
    <div class="destination">
        <a href="${data.link}" class="img d-flex justify-content-center align-items-center" style="background-image: url(images/${data.image});">
            <div class="icon d-flex justify-content-center align-items-center">
                <span class="icon-search2"></span>
            </div>
        </a>
        <div class="text p-3">
            <h3><a href="${data.link}">${data.name}</a></h3>
            <span class="listing">${data.intro}</span>
        </div>
    </div>
    </div>
    `
    dataHD_html += template
})
dataHD_html += dataHD_footer
document.write(dataHD_html)