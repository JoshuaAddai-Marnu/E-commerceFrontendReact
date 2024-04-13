/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Structs
 */
// no need for an initializer use default provided.
import Foundation

struct Town{
    let name: String
    var people: [String]
    var items: [String:Int]
    
    func newRoad(){
        print("New road to be built")
    }
}
//var myTown = Town(name: <#T##String#>, people: <#T##[String]#>, items: <#T##[String : Int]#>)
var myTown = Town(name: "MyPlace", people: ["Girish","girish"], items: ["laptops": 2, "consoles": 3])
//
//print(myTown) // shows all the properties and the values
print("\(myTown.name) has \(myTown.items["laptops"]!): laptops")
//
myTown.people.append("GIRISH")
print(myTown.people.count)
myTown.newRoad()
//myTown.name = "NewTown"
//print(myTown)
