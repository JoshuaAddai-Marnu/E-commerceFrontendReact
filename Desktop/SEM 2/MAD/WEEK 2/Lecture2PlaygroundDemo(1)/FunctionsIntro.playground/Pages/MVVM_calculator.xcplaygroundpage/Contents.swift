/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## MVVM approach to a calcution function
 */
struct BMI {
    var height: Double
    var weight: Double
    
}
class BMICalculator{
    var bmiData = BMI(height: 1.0, weight: 1.0)
    var bmi: Double {
        return bmiData.weight / (bmiData.height * bmiData.height)
    }
}

//Default behaviour
var bmiCal = BMICalculator()
print(bmiCal.bmiData)
print(bmiCal.bmi)

//create a BMI struct and pass in the new the values
var myBMI = BMI(height: 1.74, weight: 76.5)
bmiCal.bmiData = myBMI
print(bmiCal.bmiData)
print(bmiCal.bmi)

