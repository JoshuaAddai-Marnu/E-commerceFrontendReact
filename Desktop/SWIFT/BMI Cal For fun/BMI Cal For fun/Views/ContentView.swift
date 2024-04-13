//
//  ContentView.swift
//  BMI Cal For fun
//
//  Created by Joshua Addai-Marnu on 05/02/2024.
//

import SwiftUI

struct ContentView: View {
    @State private var height : String = ""
    @State private var weight : String = ""
    @State private var bmiMessage : String = ""
    @State private var bmiValue : Double = 0.0
    @State var showAlert: Bool = false
    @ObservedObject var viewModel = BMIViewModel()
  
    
    var body: some View {
        
        ZStack {
            VStack {
                Text("BMI CAL FOR FUN")
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)
                    .padding(.all)
                
                HStack {
                    Text("Height: ")
                    TextField("Enter Height (m)", text: $height)
                        .keyboardType(.decimalPad)
                }
                .padding()
                .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                .frame(width: 400, height: 50)
                .cornerRadius(2.0)
                HStack {
                    Text("Weight: ")
                    TextField("Enter Weight (kg)", text: $weight)
                        .keyboardType(.decimalPad)
                }
                .padding()
                .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
                .frame(width: 400, height: 50)
                .cornerRadius(2.0)
                
                DatePicker("Select Date", selection: $viewModel.selectedDate,in:...Date(), displayedComponents: .date)
                
               
                    Button(action: {viewModel.calculateBMI()
                    }) {
                                        Text("Calculate BMI")
                                    //background colour
                            .fontWeight(.semibold)
                            .padding()
                        //.foregroundColor(.gray)
                            .foregroundColor((viewModel.height.isEmpty || viewModel.weight.isEmpty) ? Color.gray : Color.blue)
                }
                    .disabled(viewModel.height.isEmpty || viewModel.weight.isEmpty)
                    
                    Text("BMI Records")
                        .font(.headline)
                    
                    List(viewModel.bmiRecords){
                        record in
                        VStack(alignment: .leading) {
                            Text(record.date, format:
                                    Date.FormatStyle().day().month().year())
                            Text("BMI: \(String(format: "%.2f", bmiValue))")
                            if let changePercentage = record.changePercentage {
                                Text("Change: \(String(format: "%.2f", changePercentage))%")
                            }
                            Text(viewModel.classifyBMI(record.bmiValue))
                                .font(.subheadline)
                                .foregroundStyle(.blue)
                        }
                    }
                    .background(.green)
                    .scrollContentBackground(.hidden)
                /*
                Text("BMI: \(String(format: "%.2f", bmiValue))")
                    .font(.headline)
                    .padding()
                Text(bmiMessage)
                    .font(.subheadline)
                    .padding()
                */
                Spacer()
                
            
                .padding()
            .alert(isPresented: $showAlert){
                Alert(title: Text("Invalid Data"), message: Text("Non-numeric Data"), dismissButton: .default(Text("Try again")))
            }
            .background(Color.mint)
        }
        
    }
        
        
   /// func calculateBMI(){
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
            showAlert = true
        }
    }
}
         
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
