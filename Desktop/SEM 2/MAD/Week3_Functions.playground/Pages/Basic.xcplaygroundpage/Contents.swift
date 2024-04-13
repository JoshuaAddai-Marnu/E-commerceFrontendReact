
//: ### Basic Functions - no return

import Foundation

//this takes one argument and do not return anything
func greet(name: String) {
    print("Hello, \(name)!")
}

// Call the function
greet(name: "Phil")

//this uses a external name
func greet(firstName fn: String,lastName ln: String ) {
    print("Hello, \(fn)" + " \(ln)")
}

greet(firstName: "Peter", lastName: "Parker")

//: [Back](Main)
