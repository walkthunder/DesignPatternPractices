function Pot (meterial, volumn, color) {
  this.meterial = meterial;
  this.volumn = volumn;
  this.color = color;
}

Pot.prototype.toString = function () {
  console.log(`Pot info :  ${this.meterial} - ${this.volumn} - ${this.color}`)
}

// Usage:
let teapot = new Pot('china', '900ml', 'black');
console.log(teapot.toString())
