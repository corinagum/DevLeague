module.exports = WebBrowser;
function WebBrowser(phoneNumber) {

  this.open = function(url) {
    return("Browsing to " + url);

  };
}