//
//  ContentView2.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct ContentView2: View {
    
    var books: [Book] = mybooks
    
    var body: some View {
        VStack {
            NavigationView{
                List(books){mybook in
                    NavigationLink(destination: Text(mybook.title)){
                        Text(mybook.title)
                    }
                }.navigationTitle("My Book List")
            }
            
        }
        
    }
}


struct ContentView2_Previews: PreviewProvider {
    static var previews: some View {
        ContentView2()
    }
}
