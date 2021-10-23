class Car {
    constructor (brand, speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate (nbr) {
        this.speed =this.speed + nbr ;
    }
        
    brake (nbr2) {
        this.speed =this.speed - nbr2;
    }
        
    describe () {
        
        console.log(this.brand + "running at " + this.speed+ "km/h")
    }
}



var Ford = new Car("Ford",0) 
var Mazerati = new Car ("Mazerati", 90)

Ford.accelerate(50)
Ford.brake(25)
console.log(Ford)
 
Mazerati.accelerate(60)
Mazerati.brake(48)
console.log(Mazerati)


// Exercice2.TV

let counter = 0
class TV {
    
    constructor (brand){
        this.brand=brand
        this.channel= 1
        this.volume= 50
    }

    volumeUp(num){
        this.volume = this.volume + num
        if(this.volume > 100) {
            this.volume = 100
        }
        console.log(this.volume)
    }

    volumeDown(num){
        this.volume = this.volume - num
        if(this.volume < 0) {
            this.volume = 0
        }
        console.log(this.volume)
    }

    changeChannel (num){
        this.channel += num
        if ( this.channel < 1 ){
             this.channel = 1
        }
         else  if (this.channel > 50 ) { 
                   this.channel = 50
             }
         
    }

    reset () {
        this.channel = 1
        this.volume = 50
      }

      describe() {
        console.log(`${this.brand} is on the channel ${this.channel} with a volume of ${this.volume}`)
      }
  
    // propriete
}    // pomme = 5
    // pomme = pomme + 2




const samsung = new TV ("samsung")
samsung.volumeUp(10)
samsung.volumeDown(5)
samsung.describe()
samsung.volumeDown(5)
samsung.changeChannel(-2)
samsung.describe()
samsung.reset()
samsung.describe()





//











//










// class Voiture {

//     constructor (marque, vitesse){
//         this.marque = marque
//         this.vitesse = vitesse
//     }

//     accelerate (nbr) {
//         this.speed =this.speed + nbr ;
//     }
        
//     brake (nbr2) {
//         this.speed =this.speed - nbr2;
//     }
        
//     describe () {
        
//         console.log(this.brand + "running at " + this.speed+ "km/h")
//     }
// }

// var voiture1 = new Voiture("Ford",0) 
// var voiture2= new Voiture("Ferrari", 10)
// var voiture3 = new Voiture("")

// class Bateau{
//     constructor (marque,  )
// }

// Ford.accelerate(50)
// Ford.brake(25)

// console.log(Ford)





