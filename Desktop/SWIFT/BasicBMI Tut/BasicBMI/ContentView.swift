//
//  ContentView.swift
//  BasicBMI
//
//  Created by Joshua Addai-Marnu on 25/01/2024.
//

import SwiftUI

struct ContentView: View {
    @State private var height: String = ""
    @State private var weight: String = ""
    @State private var bmiValue: Double = 0.0
    @State private var bmiMessage: String = ""
    var body: some View {
        
        VStack{
            Text("BMI Calculator Ver1")
                .font(.title)
                .fontWeight(.bold)
                .foregroundColor(Color.blue)
                .multilineTextAlignment(.center)
                .padding(.all)
            
            TextField("Enter Height (m):", text: $height)
                .keyboardType(.decimalPad)
                .padding(.all)
            
            TextField("Enter Weight (m):", text: $weight)
                .keyboardType(.decimalPad)
                .padding()
            
            Button(action: calculateBMI){
                Text("Calculate BMI")
            }
            .padding()
            
            Text("BMI: \(String(format: "%.2f", bmiValue))")
                .font(.subheadline)
                .padding()
            
            Text(bmiMessage)
                .font(.subheadline)
                .padding()
            
            Spacer()
            
        }
        
        
        
        
        
    }
    func calculateBMI(){
        if let heightValue = Double(height), let weightValue = Double(weight), heightValue > 0, weightValue > 0 {
            let bmi = weightValue / (heightValue * heightValue)
            bmiValue = bmi
            
            if bmi < 18.5{
                bmiMessage = "Underweight"
            } else if bmi < 24.9 {
                bmiMessage = "Normal weight"
            } else if bmi < 29.9 {
                bmiMessage = "Overweight"
            } else{
                bmiMessage = "Obese"
            }
        } else {
            bmiValue = 0
            bmiMessage = "Please enter valid values"
        }
        
        
    }
}

#Preview {
    ContentView()
}
