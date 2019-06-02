document.write(`
<footer class="ftco-footer ftco-bg-dark ftco-section">
<div class="container">
  <div class="row mb-5">

    <div class="col-md">
      <div class="ftco-footer-widget mb-4">
          <h2 class="ftco-heading-2">联系咨询</h2>
          <div class="block-23 mb-3">
            <ul>
              <li><a href="${contact.mobileUrl}"><span class="icon icon-phone"></span><span class="text">${contact.mobile}</span></a></li>
              <li><a href="${contact.wechatUrl}"><span class="icon icon-weixin"></span><span class="text">${contact.wechat}</span></a></li>
            </ul>
          </div>
      </div>
    </div>

  </div>
  <div class="row">
    <div class="col-md-12 text-center">
      <p>版权所有 &copy;<script>document.write(new Date().getFullYear());</script> 玩嗨旅游有限公司</p>
    </div>
  </div>
</div>
</footer>
`)