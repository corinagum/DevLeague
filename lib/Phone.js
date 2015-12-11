module.exports = Phone;
function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;

  this.callPhone = function(phoneNumber) {
    return(this.phoneNumber + " calls " + phoneNumber);

  };
}