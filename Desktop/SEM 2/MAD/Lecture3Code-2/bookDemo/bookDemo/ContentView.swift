//
//  ContentView.swift
//  bookDemo
//
//  Created by Girish Lukka on 11/03/2022.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack{
                
                NavigationLink(destination: ContentView1()){
                    Text("Version 0")
                        .padding()
                    
                    
                }
                NavigationLink(destination: ContentView0()){
                    Text("Version 1")
                        .padding()
                    
                    
                }
                NavigationLink(destination: ContentView2()){
                    Text("Version 2")
                        .padding()
                    
                    
                }
                NavigationLink(destination: ContentView3()){
                    Text("Version 3")
                        .padding()
                    
                    
                }
                NavigationLink(destination: ContentView4()){
                    Text("Version 4")
                        .padding()
                    
                    
                }.navigationTitle("My Book List Versions")
            }
        }
    }
}
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
