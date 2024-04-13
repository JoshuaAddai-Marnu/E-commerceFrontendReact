/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Basic_Functions
 */
import Foundation

//1. Basic Function Call:
func greet(name: String) {

    print("Hi \(name)!")
}
//  call the function like this:
greet(name: "Girish")

//2. Function with Multiple Arguments:
func getFullName(firstName: String, lastName: String) ->  String {
    return "\(firstName) \(lastName)"
}
//call function like this:
print(getFullName(firstName: "girish", lastName: "lukka"))

//3. External Parameter Names:
func greeting(_ firstName: String, _ lastName: String) -> String{
    return ("Hello \(firstName) \(lastName)")
}
// call function like this:
print(greeting("girish", "lukka"))

//4. Variadic Parameters:
func average(numbers: Double...) -> Double {
    let sum = numbers.reduce(0, +)
    print(sum)
    return sum / Double(numbers.count)
}
// call function like this:
let avg = average(numbers: 1.0, 2.0, 3.0, 4.0) // Call the function with a variable number of arguments
print(avg)

//5. Function as an Argument:
func operate(_ a: Int, _ b: Int, operation: (Int, Int) -> Int) -> Int {
    return operation(a, b)
}
// call function like this
let addition = operate(5, 3, operation: +) // Pass the "+" function as an argument
print(addition)

//6. Using a closure:

print(operate(5, 3, operation: +))
print(operate(5, 3){$0 + $1})
print(operate(5, 3, operation: *))
print(operate(6, 3, operation: /))
print(operate(6, 3, operation: -))
print(operate(6, 3, operation: %))
print(operate(10, 3){Int($0)/Int($1)})
