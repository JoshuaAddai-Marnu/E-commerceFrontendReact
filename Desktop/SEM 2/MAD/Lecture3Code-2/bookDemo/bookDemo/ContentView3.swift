//
//  ContentView3.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct ContentView3: View {
    
    var books: [Book] = mybooks
    
    var body: some View {
        VStack {
            NavigationView{
                List(books){ mybook in
                    NavigationLink(destination: BookDetailView(book: mybook)){
                        Text(mybook.title)
                    }
                }.navigationTitle("My Book List")
            }
            
        }
        
    }
}

struct ContentView3_Previews: PreviewProvider {
    static var previews: some View {
        ContentView3()
    }
}
