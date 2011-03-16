module.exports = {
  linkTo: function(text, url) {
    return "<a href='" + url + "'>" + text + "</a>"
  },
  cssTag: function(path) {
    return "<link rel='stylesheet' href='" + path + "' type='text/css' charset='utf-8'>"
  },
  jsTag: function(path) {
    return "<script type='text/javascript' src='" + path + "' charset='utf-8'></script>"
  }
}