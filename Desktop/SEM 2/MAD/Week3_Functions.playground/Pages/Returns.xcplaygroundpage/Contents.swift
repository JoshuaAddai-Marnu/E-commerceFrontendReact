

import Foundation

//: ### functions that return are simply created by putting  -> return type after the arrguements

func addNumbers(a: Int, b: Int) -> Int {
    return a + b
}

// Call the function and print the result
let result = addNumbers(a: 5, b: 3)
print("Sum: \(result)")

func greet(name: String) -> String {
    return "Hello, \(name)!"
}

// Call the function and use the returned string
let greeting = greet(name: "Phil")
print(greeting)



// Call the function with variable number of parameters
let avg = average(numbers: 2.5, 3.0, 4.5, 5.0)

//: Sometimes you may wish to not define the number of input arguments these are called - *variadic* functions

func average(numbers: Double...) -> Double {
    let sum = numbers.reduce(0, +) //more of this later but it adds the numbers in the array numbers
    return sum / Double(numbers.count)
}

// Call the function with variable number of parameters
let avg = average(numbers: 3.5, 3.2, 4.5, 5.3,6.1,5.6)


//: [Back](Main)
