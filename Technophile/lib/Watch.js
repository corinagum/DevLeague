module.exports = Watch;
function Watch() {
  this.bodyPart = '';

  this.wear = function(bodyPart) {
    this.bodyPart = bodyPart;

  };
}