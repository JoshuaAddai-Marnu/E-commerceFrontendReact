//: Using default parameters

//if the call does specify an exponent value then the functions defaults to 2
import Foundation

func power(base: Int, exponent: Int = 2) -> Int {
    return Int(pow(Double(base), Double(exponent)))
}

// Call the function with default and custom parameters
let square = power(base: 4)
print("square is: \(square)")
let cube = power(base: 4, exponent: 3)
print("cube is: \(cube)")

//: [Back](Main)
