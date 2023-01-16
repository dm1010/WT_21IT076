const car = {
    isFuelType: "Diesel",
    isType: "SUV",
    isBrand: "Audi",
    display() {
        // console.log(`this car use  ${this.isFuelType}. type of this car is ${this.isType} and brand is ${this.isBrand}`);
        document.write(`<h1>Call By Object(Method)</h1><br>This car use  ${this.isFuelType}. This car is ${this.isType} Type Car and Brand Is ${this.isBrand}<br>`);
    },
};
console.log(car.display())
function GetDetail(petrol, Hatchback, Audi) {
    this.isFuelType = petrol;
    this.isType = Hatchback;
    this.isBrand = Audi;
    this.display = function () {
        document.write(`<h1>Call By Constructor</h1><br>This car use  ${this.isFuelType}.This car is ${this.isType} Type Car and Brand Is ${this.isBrand}`);
    }
};
let ans = new GetDetail("Diesel","Luxury","BMW")
console.log(ans.display());