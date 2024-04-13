//
//  ContentView.swift
//  BMIVersion2
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
                
                
                HStack{
                    
                    Text(" Height (m): ")
                        .fontWeight(.semibold)
                        .foregroundColor(.blue)
                    
                    TextField("Enter Height", text: $height)
                        .keyboardType(.decimalPad)
                        .padding()
                        .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                        //.focused(/*@START_MENU_TOKEN@*//*@PLACEHOLDER=$isFocused@*/FocusState<Bool>().projectedValue/*@END_MENU_TOKEN@*/)
                    
                }//.frame(height: 50)
                    .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                    .cornerRadius(5.0)
                
                
                
                HStack{
                    Text("Weight in kg:")
                    TextField("Enter weight: ", text: $weight)
                        .keyboardType(.decimalPad)
                        .padding()
                        .border(Color.black, width: 3)
                }
                //.frame(height: 50)
                    .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                    .cornerRadius(5.0)
                
                
                Text("BMI: \(String(format: "%.2f",bmiValue))")
                    .font(.title2)
                    .padding()
                    .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 8)
                
                Text(bmiMessage)
                    .font(.title)
                    .padding()
                
                Button(action: calculateBMI ){
                    Text("Calculate BMI")
                        .disabled(height.isEmpty || weight.isEmpty)
                        //.foregroundColor(.gray)
                        .foregroundColor((height.isEmpty || weight.isEmpty) ? .gray : .blue)
                        //.cornerRadius(10)
                    
                }
                Spacer()
            }
            .padding()
        }.background(Color.mint)
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

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
