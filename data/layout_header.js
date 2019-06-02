document.write(`
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div class="container">
  <a class="navbar-brand" href="${contact.wechatUrl}"><h6>微信咨询 ${contact.wechat}<br>电话咨询 ${contact.mobile}</h6></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="oi oi-menu"></span> 菲律宾一日游
  </button>

  <div class="collapse navbar-collapse" id="ftco-nav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active"><a href="index.html" class="nav-link">首页</a></li>
      <li class="nav-item"><a href="tour.html" class="nav-link">特惠一日游</a></li>
      <li class="nav-item"><a href="hotel.html" class="nav-link">休闲一日游</a></li>
      <li class="nav-item"><a href="blog.html" class="nav-link">精品一日游</a></li>
      <li class="nav-item"><a href="contact.html" class="nav-link">联系客服</a></li>
      <li class="nav-item"><a href="about.html" class="nav-link">常见问题</a></li>
      <li class="nav-item cta"><a href="${contact.bookUrl}" class="nav-link"><span>立即预订</span></a></li>
    </ul>
  </div>
</div>
</nav>
`)