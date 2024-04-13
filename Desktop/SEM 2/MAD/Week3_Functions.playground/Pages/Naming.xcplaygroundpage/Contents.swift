
//: ### Naming functions and parameters
/*:
 Swift allows you to specify external parameter names, which are used when calling the function, and internal parameter names, which are used within the function. External parameter names help make function calls more readable, while internal parameter names are used inside the function body. You should always use meaningful names for both external and internal parameters
 
 */

//Example 1
import Foundation
func greet(person name: String, withGreeting greeting: String) {
    // function body
}

// usage
greet(person: "Phil", withGreeting: "Hello")

//Example 2

//note how verbose the naming is

func calculateCircleArea(radius: Double) -> Double {
    let area = Double.pi * pow(radius, 2)
    return area
}

// usage
let radius = 5.0
let circleArea = calculateCircleArea(radius: radius)
print("The area of the circle with radius \(radius) is \(circleArea)")


//Example 2

func calculateTriangleArea(base: Double, height: Double) -> Double {
    let area = 0.5 * base * height
    return area
}

// usage
let base = 8.0
let height = 4.0
let triangleArea = calculateTriangleArea(base: base, height: height)
print("The area of the triangle with base \(base) and height \(height) is \(triangleArea)")

//: Internal and External naming - this example differs in that it use internal names and external names - this is allow for clean code in functions and highly readable/understandable function calls

func calculateTotalPrice(forQuantity quantity: Int, withUnitPrice unitPrice: Double) -> Double {
    let totalPrice = Double(quantity) * unitPrice
    return totalPrice
    // quantity and unitPrice are for internal use only
}

// Example usage
let quantityOrdered = 10
let unitPrice = 5.0

//the call below uses the external names - note how readable this is
let totalCost = calculateTotalPrice(forQuantity: quantityOrdered, withUnitPrice: unitPrice)

print("The total cost for \(quantityOrdered) items with unit price \(unitPrice) is \(totalCost)")

/*:
 Notes
 
 The function calculateTotalPrice takes two parameters: *quantity* and *unitPrice*.
 *forQuantity* and *withUnitPrice* are external parameter names used when calling the function.
 *quantity* and *unitPrice* are internal parameter names used within the function implementation.
 
 */
//updated circle area function with external/internal name
func calculateCircleArea(withRadius radius: Double) -> Double {
    let area = Double.pi * pow(radius, 2)
    return area
}

let circleArea2 = calculateCircleArea(withRadius: 10.0)
print("The area of the circle with radius \(10) is \(circleArea2)")
//: [Back to main menu](Main)
