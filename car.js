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



// Benoit  HELP ME ,j'ai besoin de ton aider , on m'a aider  a faire la partie 1 de Car du coup j'ai beugé sur la TV, je souhaiterai le refaire demains avec toi  car  je ne maitrise pas le sujet ES6.
