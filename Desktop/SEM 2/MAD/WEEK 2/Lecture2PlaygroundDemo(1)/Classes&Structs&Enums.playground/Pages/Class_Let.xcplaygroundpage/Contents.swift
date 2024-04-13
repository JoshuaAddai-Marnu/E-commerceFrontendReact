/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Classes
 */
// Effect of let
import Foundation

class ClassHero{
    var name: String
    var location: String

    init(name:String, location: String){
        self.name = name
        self.location = location
    }
}
let classHero = ClassHero(name: "Superman", location: "Mars")
print(classHero.name)
classHero.name = "Cat Woman"
print(classHero.name)
classHero.location = "London"
print(classHero.location)
