/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Classes
 */
import Foundation

// No init(), using default values

class Enemy{
    
    var health = 100
    var attackStrength = 10
    
    func move(){
        print("Walk forwards")
    }
    
    func attack(){
        
        print("Made a hit, \(attackStrength) damage")
    }
}

let enemy1 = Enemy()
print(enemy1.health)
enemy1.move()
enemy1.attack()
let enemy2  = Enemy()

//inheritance

class BigEnemy : Enemy {
    var wingSpan = 2
    
    func talk(speech: String){
        print("Said: \(speech)")
    }
    override func move(){
        print("run fast")
    }
    
    override func attack(){
        super.attack()
        print("jumps, damages by 10")
    }
}
let bigEnemy = BigEnemy()
bigEnemy.wingSpan = 5
bigEnemy.attackStrength = 15
print(bigEnemy.health)
print(bigEnemy.attackStrength)
bigEnemy.talk(speech:"Arrgh!")
bigEnemy.move()
bigEnemy.attack()
