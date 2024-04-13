//
//  ContentView.swift
//  BMIVersion3.1
//
//  Created by Joshua Addai-Marnu on 01/02/2024.
//

import SwiftUI

struct ContentView: View {
    @State private var height: String = ""
    @State private var weight: String = ""
    @State private var bmiValue: Double = 0.0
    @State private var bmiMessage: String = ""
    @State var showAlert: Bool = false
    var body: some View {
        ZStack{
            VStack (alignment: .leading, spacing: 10){
                
                Text("BMI Calculator Version2")
                    .font(.title)
                    .fontWeight(.heavy)
                    .foregroundStyle(.indigo)
                    .multilineTextAlignment(.center)
                    .padding(.all)
                
                
                HStack(spacing: 1){
                    HStack{
                        Text("Height in m:")
                    }
                    .border(Color.blue, width: 3)
                    
                    HStack{
                        TextField("Enter height: ", text: $height)
                            .keyboardType(.decimalPad)
                    }
                    .border(Color.blue, width: 3)
                    
                }
                    
                    .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                
                
                HStack{
                    Text("Weight in kg:")
                      
                    TextField("Enter weight: ", text: $weight)
                        .keyboardType(.decimalPad)
                        
                        
                }
                .padding()
                .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                
                
                    
                    
                
                
                Text("BMI: \(String(format: "%.2f",bmiValue))")
                    .font(.title2)
                    .padding()
                    .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 8)
                
                Text(bmiMessage)
                    .font(.title)
                    .padding()
                
                Button(action: calculateBMI ){
                    Text("Calculate BMI")
                        .foregroundColor(.gray)
                    
                }
                Spacer()
            }
            .padding(.all)
        }
        .background(Color.mint)
    }
        
    func calculateBMI(){
        if let heightValue = Double(height), let weightValue = Double(weight), heightValue > 0, weightValue > 0 {
            let bmi = weightValue / (heightValue * heightValue)
            bmiValue = bmi
            
            if bmi < 18.5{
                bmiMessage = "Underweight"
            }
            else if bmi < 24.9 {
                bmiMessage = "Normal weight"
            }
            else if bmi < 29.9 {
                bmiMessage = "Overweight"
            }
            else {
                bmiMessage = "Obese"
            }
        }
        else {
            bmiValue = 0
            bmiMessage = "Please enter valid number"
        }
    }
        
}


#Preview {
    ContentView()
}
