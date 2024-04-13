//
//  onTapGestureEventView.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct onTapGestureEventView: View {
    @State private var height = ""
    @FocusState private var fieldIsFocused: Bool
    var body: some View {
        
        HStack {
            Text(" Height (m):   ")
                .fontWeight(.semibold)
                .foregroundColor(.blue)
            TextField("Enter height", text:$height)
                .focused($fieldIsFocused)
                .keyboardType(.decimalPad)
                .padding()
                .border(/*@START_MENU_TOKEN@*/Color.black/*@END_MENU_TOKEN@*/, width: 3)
        }
        
        .frame(width: 400, height: 400)
        .onTapGesture {
            fieldIsFocused = false
        }
        
        
    }
        
    
}

struct onTapGestureEventView_Previews: PreviewProvider {
    static var previews: some View {
        onTapGestureEventView()
    }
}
