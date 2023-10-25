class Car{
    constructor(color, speed){

        this.color = color;
        this.speed = speed;

    }

    turboOn(){
        console.log("Turbo is ON!")
    }
}


const car1 = new Car('RED', 120);

console.log(car1.turboOn)