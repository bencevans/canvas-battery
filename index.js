
module.exports = CanvasBattery = function(element, charge) {
  this.element = element;
  this.context = element.getContext('2d');
  this.charge = (typeof charge == 'number') ? charge : 0;
  this.drawWalls();
  if(this.charge) this.drawCharge(this.charge);
  return this;
};

CanvasBattery.prototype.drawWalls = function() {
  this.context.beginPath();
  this.context.rect(5, 5, 180, 90);
  this.context.lineWidth = 10;
  this.context.strokeStyle = 'black';
  this.context.stroke();

  this.context.beginPath();
  this.context.rect(190, 40, 10, 20);
  this.context.fillStyle = 'black';
  this.context.fill();
  this.context.stroke();
};

CanvasBattery.prototype.drawCharge = function(charge) {

  this.context.beginPath();
  this.context.rect(10, 10, 170 * (charge/100), 80);
  this.context.fillStyle = 'rgb('+ Math.floor((1-(charge/100))*255) + ',' + Math.floor((charge/100)*255) + ',0)';
  this.context.fill();
};

CanvasBattery.prototype.clearCharge = function() {
  this.context.clearRect(10, 10, 170, 80);
};

CanvasBattery.prototype.update = function(charge) {
  this.charge = (typeof charge == 'number') ? charge : this.charge;
  this.clearCharge();
  this.drawCharge(this.charge);
};