import Foundation
// Define two variables to represent the width and height of the area to be painted.
var width: Float = 7
var height: Float = 2.7
// Define a computed property named tinsOfPaint.
var tinsOfPaint: Int {

    // Getter for tinsOfPaint property
    get {
        print("get called")
        // Calculate the area to be painted.
        let area = width * height

        // Define the area that one paint tin can cover.
        let areaPerTin: Float = 1.5

        // Calculate the number of tins needed to cover the area.
        let numberofTins = area / areaPerTin

        // Round up the number of tins to the nearest integer and return it.
        let roundedTins = ceilf(numberofTins)
        return Int(roundedTins)
    }
    // Setter for tinsOfPaint property
    set {
        print("set called")
        // Print the new value that is being set for tinsOfPaint.
        print("new value...\(newValue)")

        // Calculate the area that can be covered with the specified number of tins.
        let areaCanCover = Double(newValue) * 1.5

        // Print the area that can be painted with the specified number of tins.
        print("area that can be painted with this number of tins is:  \(areaCanCover)")
    }
}
print(tinsOfPaint)

// Set new values for width and height.
width = 10.0
height = 5.0

// Print the number of tins of paint needed to cover the updated area.
print(tinsOfPaint)

// Set the tinsOfPaint property to its current value (calling the setter).
tinsOfPaint = tinsOfPaint + 5

struct Circle {
    var radius: Double

    // Computed property for calculating the area of the circle
    var area: Double {
        return Double.pi * radius * radius
    }
}

var c1 = Circle(radius: 10)
print(c1.area)

struct Temperature {
    var celsius: Double

    // Computed property for converting Celsius to Fahrenheit
    var fahrenheit: Double {
        return (celsius * 9/5) + 32
    }
}

let t1 = Temperature(celsius:16)
print(t1.fahrenheit)
