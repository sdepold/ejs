module.exports = {
  link_to: function(text, url) {
    return "<a href='" + url + "'>" + text + "</a>"
  },
  css_tag: function(path) {
    return "<link rel='stylesheet' href='" + path + "' type='text/css' charset='utf-8'>"
  },
  js_tag: function(path) {
    return "<script type='text/javascript' src='" + path + "' charset='utf-8'></script>"
  }
}