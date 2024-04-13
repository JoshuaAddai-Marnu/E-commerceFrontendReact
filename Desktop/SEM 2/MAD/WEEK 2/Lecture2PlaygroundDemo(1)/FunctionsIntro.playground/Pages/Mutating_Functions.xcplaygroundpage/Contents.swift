/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Mutating functions
 */

import Foundation

struct BMIData {
    var height = 0.0
    var weight  = 0.0
    var BMI = 0.0

    mutating func calBMI(){

        let bmiValue = weight / (height * height)
        self = BMIData(height: height, weight: weight, BMI:bmiValue)
        //print("self... \(self)")

    }
}

//var bmi = BMIData(height:1.67, weight: 67, BMI: 0.0)
//print(bmi)
//bmi.calBMI()
//print(bmi)
//print(bmi.BMI)

/*
 # Alternative to above - a different initialisation
 */
struct BMI2{
    var height : Double
    var weight : Double
    var BMI = 0.0

    init(height: Double, weight: Double){

        self.height = height
        self.weight = weight
    }

    mutating func calBMI2(){

        let bmiValue = weight / (height * height)

        self.BMI = bmiValue
    }
}

var bmi2 = BMI2(height: 1.7, weight: 70)
bmi2.calBMI2()
print(bmi2.BMI)
