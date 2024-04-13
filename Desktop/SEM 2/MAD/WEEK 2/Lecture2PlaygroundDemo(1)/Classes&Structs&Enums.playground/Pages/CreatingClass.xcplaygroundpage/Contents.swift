/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Classes
 Basic definition with error message
 */
import Foundation

//class Person{
//    var clothes: String
//    var shoes: String
//}
/*:
 This code does not work because it defines a class Person with two properties clothes and shoes that are not given initial values, and they are not declared as optionals.

 In Swift, when you declare a property without providing an initial value and without making it optional (by using ? or ! after the type), you are required to provide an initializer for the class. This is because Swift wants to ensure that all non-optional properties have valid initial values when an instance of the class is created.
 
 One solution: Declare the properties as optionals if they can have no initial values.
 
 */
class Person1 {
    var clothes: String?
    var shoes: String?
}
// the properties may or may not have initial values. if it has a value it must be of type String or it will be nil. Optionals need to be unwrapped safely, though forced unwrapping is also possible but can lead to app crashes.
let person1 = Person1()
print(person1.clothes)

// correct way to do this is to use if let:

if let personClothes = person1.clothes{
    print("Clothes is \(personClothes)")
} else {
    print("Clothes is not set")
}
/*:
 
 
 Second solution: Provide default values for the properties, that may never be used:
 
 */
class Person2 {
    var clothes: String = ""
    var shoes: String = ""
}
let person2 = Person2()
print(person2.clothes)
person2.clothes = "nike"
print(person2.clothes)
/*:
 
 
 Third solution: Provide an initializer for the class to set initial values:
 
 */
class Person3 {
    var clothes: String
    var shoes: String
    
    init(clothes: String, shoes: String) {
        self.clothes = clothes
        self.shoes = shoes
    }
    
    var description: String {
            return "Clothes: \(clothes), Shoes: \(shoes)"
        }
}
let person3 = Person3(clothes: "nike", shoes: "nike")
print(person3.description)

