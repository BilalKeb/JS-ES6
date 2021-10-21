class Car {
    
    constructor(brand,speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate(num){
        this.speed+= num
        console.log(this.speed);
    }
    brake(num){
        this.speed -= num
        console.log(num);
    }
    describe(){
        console.log(`${this.brand} running at ${this.speed} km/h`);
    }

}

var mazeratti = new Car('Mazeratti', 0)
console.log(mazeratti);

mazeratti.accelerate(50)
mazeratti.brake(25)
mazeratti.describe()

var bentley = new Car('bentley',18)
bentley.accelerate(180)
console.log(bentley); 


