/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introduction to Classes
 */
// passing by reference
// Use init() to instatntiate new objects
class Enemy1{
    
    var health: Int
    var attackStrength : Int
    
    init(health: Int, attackStrength: Int){
        self.health = health
        self.attackStrength = attackStrength
    }
    
    func move(){
        print("Walk forwards")
    }
    
    func attack(){
        
        print("Made a hit, \(attackStrength) damage")
    }
    
    func takeDamage(amount: Int){
        health = health - amount
    }
}
let enemy1 = Enemy1(health: 10, attackStrength: 20)
let enemy2 = enemy1
print(enemy1.health)
enemy1.takeDamage(amount: 5)
print(enemy1.health)
print(enemy2.health)
// passing by reference
