/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Structs
 */
//set default values so no neeed to use an initializer

import Foundation

struct Town{
    let name = "NewLands"
    var people = ["Alex", "Ali"]
    var items = ["Houses": 5, "Cars": 2, "Shops" : 1]
    
    func newRoad(){
        print("New road to be built")
    }
}

var myTown = Town()

print(myTown) // shows all the properties and the values
print("\(myTown.name) has \(myTown.items["Houses"]!) houses")

myTown.people.append("Amar")
print(myTown.people.count)
myTown.newRoad()
