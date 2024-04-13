/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to ARC
 
 ARC (Automatic Reference Counting):
 
 Swift uses ARC to automatically manage memory by keeping track of references to objects.
 When there are no more strong references to an object, ARC deallocates the memory associated with that object.
 It works at compile time and is more predictable and efficient for managing memory.
 Garbage Collection (used in languages like Java and Python):
 
 Garbage collection is a runtime process that periodically identifies and collects objects that are no longer in use.
 It relies on a separate background thread or process to reclaim memory, which can introduce latency.
 Garbage collection is less predictable and can lead to non-deterministic performance.
 
 
 */
import Foundation
class Person {
    let name: String
    init(name: String) { self.name = name }
    var apartment: Apartment?
    deinit { print("\(name) is being deinitialized") }
}


class Apartment {
    let unit: String
    init(unit: String) { self.unit = unit }
    var tenant: Person?
    deinit { print("Apartment \(unit) is being deinitialized") }
}

// Create instances that reference each other, causing a strong reference cycle
var person: Person? = Person(name: "John")
//person = nil
var apartment: Apartment? = Apartment(unit: "A1")
//apartment = nil
person?.apartment = apartment
print(person!.apartment!.unit)
apartment?.tenant = person
print(apartment!.tenant!.name)

person = nil

print(apartment!.tenant!.name)

apartment = nil
/*:
 To demonstrate that the relationship between the objects continues after they have been deallocated is not possible in Swift because Swift's memory management mechanisms prevent such access to deallocated objects. Attempting to access properties or methods of deallocated objects will result in a runtime error.
 */
//print(person!.apartment!.unit)

/*:
 
 ### Solution to above memory leak is to use weak references
 */
class NewPerson {
    let name: String
    init(name: String) { self.name = name }
    var apartment: Apartment?
    deinit { print("\(name) is being deinitialized") }
}


class NewApartment {
    let unit: String
    init(unit: String) { self.unit = unit }
    weak var tenant: Person?
    deinit { print("Apartment \(unit) is being deinitialized") }
}

var newperson: NewPerson? = NewPerson(name: "Girish")
var newapartment: NewApartment? = NewApartment(unit: "Cavendish")
newperson = nil
newapartment = nil
