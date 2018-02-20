module.exports = function layout(body) {
    return `
  <!doctype html>
  <html>
  <head>
    <link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css>
    <link rel=stylesheet href=https://cdn.rawgit.com/brianleroux/5bd964013a6c567dcb01f4b997f6b10e/raw/decff8e49f2fef1befe6849b0919742b8e08c515/offscreen-menu.css>
  </head>
  <body>
    <ul class="navigation">
      <li class="nav-item"><a href="/">Home</a></li>
      <li class="nav-item"><a href="/page/about">About</a></li>
    </ul>
    <input type="checkbox" id="nav-trigger" class="nav-trigger" />
    <label for="nav-trigger"></label>
    <div class="site-wrap">${body}</div>
  </body>
  </html>
  `
  }