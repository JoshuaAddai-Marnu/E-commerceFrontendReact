//
//  ContentView.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 20){
                
                NavigationLink(destination: onEditEventView()) {
                    Text("OnEditing")
                        
                }
                NavigationLink(destination: onChangeEventView()) {
                    Text("OnChange")
                        
                }
                NavigationLink(destination: onDeleteEventView()) {
                    Text("OnDelete")
                        
                }
                NavigationLink(destination: onSubmitEventView()) {
                    Text("OnSubmit")
                        
                }
                NavigationLink(destination: onTapGestureEventView()) {
                    Text("OnTapGesture")
                        
                }
                NavigationLink(destination: eplTapGesture()) {
                    Text("eplTapGesture")
                        
                }
                
            }
            .padding()
            .navigationBarTitle(Text("Common Events"), displayMode: .inline)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
