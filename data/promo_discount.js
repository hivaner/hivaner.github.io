// Data Promo Discount
const dataPD = {
    type: '特别推荐',
    title: ['精品', '一日游'],
    data: [
        {name:'索莱尔太阳城', image:'hotel-1.jpg', button: '详情', link:'hotel-1.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`好便宜呦！吃饭便宜，免费提供水和饮料的好地方` },
        {name:'奥咔哒喷泉', image:'hotel-2.jpg', button: '详情', link:'hotel-2.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`欣赏壮观声光电音乐喷泉，数以千计的人们每晚齐聚在这里娱乐` },
        {name:'梦城', image:'hotel-3.jpg', button: '详情', link:'hotel-3.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`吃睡玩的好地方，不求最好但求最贵的好地方` },
        {name:'马卡蒂阿亚拉', image:'hotel-4.jpg', button: '详情', link:'hotel-4.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`玛卡提是马尼拉最繁华的商圈，堵车，塞车是特色旅游项目哦` },
        {name:'莫阿海岸', image:'hotel-5.jpg', button: '详情', link:'hotel-5.html', star:5, priceType:'￥', price:699, days:'一日游', departure:'马尼拉MOA', intro:`莫阿是亚洲最大的商场，真的只是最大` },
    ]
}
// 上面数据可修改
// ————————————————————————————————————————————————————————————————————————————————————————————————
let dataPD_header = `
<section class="ftco-section">
<div class="container">
        <div class="row justify-content-start mb-5 pb-3">
  <div class="col-md-7 heading-section ftco-animate">
      <span class="subheading">${dataPD.type}</span>
    <h2 class="mb-4"><strong>${dataPD.title[0]}</strong>${dataPD.title[1]}</h2>
  </div>
</div>    		
</div>
<div class="container-fluid">
    <div class="row">
`
let dataPD_footer = `
</div>
</div>
</section>
`
let dataPD_html = dataPD_header
dataPD.data.forEach(data => {
    let star = ''
    for (let i=0;i<data.star;i++){
        star += '<i class="icon-star"></i>'
    }
    let template = 
    `
    <div class="col-sm col-md-6 col-lg ftco-animate">
    <div class="destination">
        <a href="${data.link}" class="img img-2 d-flex justify-content-center align-items-center" style="background-image: url(images/${data.image});">
            <div class="icon d-flex justify-content-center align-items-center">
                <span class="icon-search2"></span>
            </div>
        </a>
        <div class="text p-3">
            <div class="d-flex">
                <div class="one">
                    <h3><a href="${data.link}">${data.name}</a></h3>
                    <p class="rate">
                        ${star}
                        <span>${data.star}</span>
                    </p>
                </div>
                <div class="two">
                    <span class="price per-price">￥699<br><small>${data.days}</small></span>
                </div>
            </div>
            <p>${data.intro}</p>
            <hr>
            <p class="bottom-area d-flex">
                <span><i class="icon-map-o"></i> ${data.departure}</span> 
                <span class="ml-auto"><a href="${data.link}">${data.button}</a></span>
            </p>
        </div>
    </div>
    </div>
    `
    dataPD_html += template
})
dataPD_html += dataPD_footer
document.write(dataPD_html)