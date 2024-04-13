//
//  onSubmitEventView.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct onSubmitEventView: View {
    @State private var userInput = ""
    @State private var isButtonEnabled = false
    var body: some View {
        VStack{
            TextField("Enter text", text: $userInput)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .autocorrectionDisabled()
                .onSubmit {
                    isButtonEnabled = !userInput.isEmpty
                }
            
            Button("Cofirm"){}
                .buttonStyle(.borderedProminent)
                .disabled(!isButtonEnabled)
        }
        .navigationTitle("onSubmit")
    }
    
}


struct onSubmitEventView_Previews: PreviewProvider {
    static var previews: some View {
        onSubmitEventView()
    }
}
