//
//  BMIRecord.swift
//  BMI Cal For fun
//
//  Created by Joshua Addai-Marnu on 06/02/2024.
//

import Foundation
struct BMIRecord: Identifiable {
    var id = UUID()
    var date: Date
    var bmiValue: Double
    var changePercentage: Double? = nil
}
