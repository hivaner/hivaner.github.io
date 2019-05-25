// Data Recommend Tour
const dataRT = {
    type: '特别推荐',
    title: ['精品', '一日游'],
    data: [
        {name:'马荣火山', image:'destination-1.jpg', button: '详情', link:'destination-1.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`最完美的锥形火山享誉世界，目前处于不稳定期，能现场感受火山地震和熔岩。` },
        {name:'海星黑海滩', image:'destination-2.jpg', button: '详情', link:'destination-2.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`罕见黑海滩，退潮时有大量珊瑚贝壳，与渔村相邻可出海打鱼，海滩烧烤。` },
        {name:'塔尔火山湖', image:'destination-3.jpg', button: '详情', link:'destination-3.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`巨大的火山湖中央的三座火山，湖边山上欣赏云海沉于湖面，天空公园野餐和滑索` },
        {name:'幻想城堡', image:'destination-4.jpg', button: '详情', link:'destination-4.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`梦幻城堡坐落于火山湖西岸，是一座欧式城堡风格的游乐场，可供满足游客娱乐达480分钟` },
        {name:'苏比海洋公园', image:'destination-5.jpg', button: '详情', link:'destination-5.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`国际大型海洋游乐场，精彩动物表演，海底隧道与潜水。` },
    ]
}
// 上面数据可修改
// ————————————————————————————————————————————————————————————————————————————————————————————————
let dataRT_header = `
<section class="ftco-section bg-light">
<div class="container">
        <div class="row justify-content-start mb-5 pb-3">
  <div class="col-md-7 heading-section ftco-animate">
      <span class="subheading">${dataRT.type}</span>
    <h2 class="mb-4"><strong>${dataRT.title[0]}</strong>${dataRT.title[1]}</h2>
  </div>
</div>    		
</div>
<div class="container-fluid">
    <div class="row">
`
let dataRT_footer = `
</div> 
</div>
</section>
`
let dataRT_html = dataRT_header
dataRT.data.forEach(data => {
    let star = ''
    for (let i=0;i<data.star;i++){
        star += '<i class="icon-star"></i>'
    }
    let template = 
    `     
    <div class="col-sm col-md-6 col-lg ftco-animate">
        <div class="destination">
            <a href="pages/${data.link}" class="img img-2 d-flex justify-content-center align-items-center" style="background-image: url(images/${data.image});">
                <div class="icon d-flex justify-content-center align-items-center">
                    <span class="icon-search2"></span>
                </div>
            </a>
            <div class="text p-3">
                <div class="d-flex">
                    <div class="one">
                        <h3><a href="#">${data.name}</a></h3>
                        <p class="rate">
                            ${star}
                            <span>${data.star}</span>
                        </p>
                    </div>
                    <div class="two">
                        <span class="price">${data.priceType}${data.price}</span>
                    </div>
                </div>
                <p>${data.intro}</p>
                <p class="days"><span>${data.days}</span></p>
                <hr>
                <p class="bottom-area d-flex">
                    <span><i class="icon-map-o"></i> ${data.departure}</span> 
                    <span class="ml-auto"><a href="pages/${data.link}">${data.button}</a></span>
                </p>
            </div>
        </div>
    </div>
    `
    dataRT_html += template
})
dataRT_html += dataRT_footer
document.write(dataRT_html)