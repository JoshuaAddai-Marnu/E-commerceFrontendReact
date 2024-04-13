//
//  onChangeEventView.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct onChangeEventView: View {
    @State private var enteredText = ""
    var body: some View {
        VStack {
                    TextField("Enter text", text: $enteredText)
                        .padding()
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .onChange(of: enteredText) { newText in
                            enteredText = processInputText(input: newText)
                        }
                        .autocorrectionDisabled()

                    Text("Processed Text: \(enteredText)")
                        .padding()
                }
                .padding()
    }
    
    // Function to process input text and return only alphabetic characters
        func processInputText(input: String) -> String {
            var processedText = ""
            
            // Iterate through each character in the input text
            for character in input {
                // Check if the character is an alphabet letter
                if character.isLetter {
                    // Append the alphabet character to the processed text
                    processedText.append(character)
                }
            }
            
            // Return the processed text containing only alphabetic characters
            return processedText
        }
}


struct onChangeEventView_Previews: PreviewProvider {
    static var previews: some View {
        onChangeEventView()
    }
}
