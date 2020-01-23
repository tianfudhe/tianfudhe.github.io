var disqus_config = function () {
  this.page.url = document.URL;
  var tmpIden = document.URL;
  // tmpIden.replace("tianfudhe.coding.me/diary", "tianfudhe.github.io/diary");
  this.page.identifier = tmpIden;
};

(function () {
  var d = document, s = d.createElement('script');
  s.src = 'https://tianfudhe.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
