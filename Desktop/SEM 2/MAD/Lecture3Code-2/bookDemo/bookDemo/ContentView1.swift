//
//  ContentView.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct ContentView1: View {
    
    
    var body: some View {
        
        VStack {
            VStack {
                List{
                
                    Text("Book Title 1")
                        .padding()
                    
                    Text("Book Title 2")
                        .padding()
                    
                    Text("Book Title 3")
                        .padding()
                }
                
            }
            VStack {
                NavigationView{
                    List{
                        NavigationLink(destination: Text("Book Details 1")){
                            Text("Book Title 1")
                        }.padding()
                        NavigationLink(destination: Text("Book Details 2")){
                            Text("Book Title 2")
                        }.padding()
                        NavigationLink(destination: Text("Book Details 3")){
                            Text("Book Title 3")
                        }.padding()
                    }.navigationTitle("Book List Version 0")
                }
            }
        }
        
    }
}

struct ContentView0_Previews: PreviewProvider {
    static var previews: some View {
        ContentView1()
    }
}
