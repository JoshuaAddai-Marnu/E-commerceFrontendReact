//: In Swift, an *inout* parameter is a way to allow a function to modify the value of a variable that is passed to it. When you pass a parameter with *inout* keyword, the function is allowed to change the value of the variable passed to it as an argument, and these changes then persist outside the function.

import Foundation

func increment(value: inout Int) {
    value += 1
}

// Call the function with inout parameter
var number = 5
increment(value: &number)
print("Incremented value: \(number)")
//number has now change to 6 


//: [Back](Main)
