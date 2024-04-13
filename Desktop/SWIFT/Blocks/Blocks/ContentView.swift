//
//  ContentView.swift
//  Blocks
//
//  Created by Joshua Addai-Marnu on 26/01/2024.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView(selection: .constant(1))
        {NavigationView {
            Text("Tab Content 1")
                .navigationTitle("News")
        }
        .tabItem { Text("News") }.tag(1)
            
            NavigationView {
                Text("Tab Content 2")
                    .navigationTitle("Products")
            }
            .tabItem { Text("Products") }.tag(2)
            
            NavigationView {
                Text("Tab Content 3")
                    .navigationTitle("Chat")
            }
            .tabItem { Text("Chat") }.tag(3)
        }
        
    }
}

#Preview {
    ContentView()
}
