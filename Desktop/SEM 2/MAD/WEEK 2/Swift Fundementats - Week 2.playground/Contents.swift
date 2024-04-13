import UIKit

/*:
 ## Welcome to Swift Language Fundementals - 7COSC002W
 This is a set of *Swift Playgrounds* that demonstrates various language concepts

 - Author: Philip Trwoga
 - Version: 1.0
*/
/*: ### Useful Links
 */

//[Apple Documentation] (https://developer.apple.com/documentation/)

//[Swift Language Guide] (https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/index.html)

//: Week 2:
//: - Ranges
//: - Loops
//: - Switch
//: - For Each

//: Before exploring loop structure we need to know something about Ranges - a Range is a sequence of ordered numbers

//[Swift - Range] (https://developer.apple.com/documentation/swift/range)

//: Ranges in Swift are versatile and provide a concise way to express a sequence of values or perform operations over a specific range. They are commonly used in loops, switch statements, and various other scenarios where a sequence of values is needed.

//: Closed Range (a...b) A closed range includes all values from a to b, inclusive

let closedRange = 1...5

for number in closedRange {
    print(number)
}
// Output: 1, 2, 3, 4, 5

//: Half-Open Range (a..<b) A half-open range includes values from a up to, but not including, b.

let halfOpenRange = 1..<5

for number in halfOpenRange {
    print(number)
}
// Output: 1, 2, 3, 4

//: You can use the reversed() method to iterate through a range in reverse order

let reversedRange = (1...5).reversed()

for number in reversedRange {
    print(number)
}
// Output: 5, 4, 3, 2, 1

//: You can use the contains method to check if a value is within a range

let range = 1...10

if range.contains(7) {
    print("7 is in the range")
} else {
    print("7 is not in the range")
}

//: You can create a range with a specific step or stride

let strideRange = stride(from: 1, to: 10, by: 2)

for number in strideRange {
    print(number)
}
// Output: 1, 3, 5, 7, 9

//:Ranges are commonly used in switch statements

let value = 42

switch value {
case 0..<10:
    print("Value is in the range 0 to 9")
case 10..<20:
    print("Value is in the range 10 to 19")
case 20..<30:
    print("Value is in the range 20 to 29")
default:
    print("Value is outside the specified ranges")
}

//: Further switch example

let dayOfWeek = "Wednesday"

switch dayOfWeek {
case "Monday":
    print("It's the start of the week.")
case "Tuesday", "Wednesday", "Thursday":
    print("It's a regular weekday.")
case "Friday":
    print("The weekend is almost here.")
case "Saturday", "Sunday":
    print("It's the weekend!")
default:
    print("Not a valid day.")
}

//: **Note

//: The switch statement is used to evaluate the value of the dayOfWeek variable. Each case represents a possible value for dayOfWeek. You can list multiple values in a single case statement separated by commas. The default case is executed when none of the specific cases match and is required.




//: Loops

//: Example 1: Looping through a range
for i in 1...5 {
    print(i)
}

//: Example 2: Looping through an array
let fruits = ["Apple", "Banana", "Mango"]
for fruit in fruits {
    print(fruit)
}

//: Example 1:  A simple while loop
var count = 0
while count < 5 {
    print(count)
    count += 1 //increment by 1
}

//: Example 2: The repeat-while loop
var x = 5
repeat {
    print("This will be printed at least once.")
    x -= 1 //decrement by 1
} while x > 0

// Example: Using break and continue
for i in 1...10 {
    if i == 5 {
        break // exit the loop when i is 5
    }

    if i % 2 == 0 {
        continue // skip even numbers
    }

    print(i)
}

//: Example: Nested loops
for i in 1...3 {
    for j in 1...3 {
        print("\(i), \(j)")
    }
}

//: The for each loop in Swift is commonly used to iterate over elements in a collection, such as an array. Here is an example:

//: Example: Using for-each with an array

let numbers = [1, 2, 3, 4, 5]
//read below as 'for each number in numbers'
for number in numbers {
    print(number)
}

//: Example: Using for-each with a dictionary - see week 1
let people = ["name": "John", "age": 30, "city": "New York"] as [String : Any]

for (key, value) in people { //read as ' for each key,value in people
    print("\(key): \(value)")
}





