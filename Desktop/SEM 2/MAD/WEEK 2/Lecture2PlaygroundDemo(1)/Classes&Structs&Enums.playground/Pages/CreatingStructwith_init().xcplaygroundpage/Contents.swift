/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Structs
 */
// use an initializer to create objects

import Foundation

import Foundation

struct Town{
    let name : String
    var people : [String]
    var items : [String: Int]
    
    init(newName: String, newPeople: [String], newItems: [String : Int])
    
    {// passed-in data have a pre-fix of new i.e newName, newPeople, etc
        name = newName
        people = newPeople
        items = newItems
    }
    
    func newRoad(){
        print("New road to be built")
    }
}
var newTown = Town(newName: "NewLands", newPeople: ["Tom", "Mark"], newItems: ["Homes" : 5, "Shops" : 2])
print(newTown)
newTown.people.append("Alex")
print(newTown.people)

// make a copy of newTown and change the property:
// Change only affects the individual copy, unlike for classes

var oldTown = newTown
print(oldTown)
oldTown.people = []
print(oldTown)
print(newTown.people)




