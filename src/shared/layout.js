module.exports = function layout(req, body) {
    var nav = [
      {href:req._url('/'), title:'home', active: req.path === '/'},
      {href:req._url('/about'), title:'about', active: req.path != '/'},
    ]
    var item = i=> `<li class="nav-item${i.active? ' active': ''}"><a href=${i.href}>${i.title}</a></li>`
    var menu = nav.map(item)
    return `
  <!doctype html>
  <html>
  <head>
    <link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css>
    <link rel=stylesheet href=https://cdn.rawgit.com/brianleroux/5bd964013a6c567dcb01f4b997f6b10e/raw/decff8e49f2fef1befe6849b0919742b8e08c515/offscreen-menu.css>
  </head>
  <body>
    <ul class="navigation">${menu}</ul>
    <input type="checkbox" id="nav-trigger" class="nav-trigger" />
    <label for="nav-trigger"></label>
    <div class="site-wrap">${body}</div>
  </body>
  </html>
  `}