/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Structs
 */
/// use an initializer to create objects and use of self:

import Foundation

struct Town{
    let name : String
    var people : [String]
    var items : [String: Int]
   
    init(name: String, people: [String], items: [String : Int])
    {
        self.name = name
        self.people = people
        self.items  = items
    }
    func newRoad(){
        print("New road to be built")
    }
}

var newTown = Town(name: "NewLands", people: ["Tom", "Mark"], items: ["Homes" : 5, "Shops" : 2])
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

