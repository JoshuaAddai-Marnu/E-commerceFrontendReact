//
//  BMIViewModel.swift
//  BMI Cal For fun
//
//  Created by Joshua Addai-Marnu on 06/02/2024.
//

import Foundation
class BMIViewModel: ObservableObject {
    @Published var height: String = ""
    @Published var weight: String = ""
    @Published var selectedDate: Date = Date()
    @Published var bmiRecords: [BMIRecord] = []
}

func calculateBMI() {
    if let heightValue = Double(height), let weightValue = Double(weight), heightValue > 0, weightValue > 0 {
        let bmi = weightValue / (heightValue * heightValue)
        
        var changePercentage: Double?
        if let lastRecord = bmiRecords.last {
            changePercentage = ((bmi - lastRecord.bmiValue) / lastRecord.bmiValue) * 100
         }
            let record = BMIRecord(date: selectedDate, bmiValue: bmi, changePercentage: changePercentage)
            bmiRecords.append(record)
            print(bmi)
        }
    height = ""
    weight = ""
    
    }


func classifyBMI(_ bmi: Double) -> String{
    if bmi < 18.5{
        return "Underweight"
    }
    else if bmi < 24.9 {
        return "Normal weight"
    }
    else if bmi < 29.9 {
        return "Overweight"
    }
    else {
        return "Obese"
    }
}
