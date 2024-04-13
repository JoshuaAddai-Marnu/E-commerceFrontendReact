//
//  ContentView4.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct ContentView4: View {
    
    var books: [Book] = mybooks
    
    var body: some View {
        VStack {
            NavigationView{
                List(books){ mybook in
                    NavigationLink(destination: BookDetailView2(book: mybook)){
                        Text(mybook.title)
                    }
                }.navigationTitle("My Book List")
            }
            
        }
        
    }
}


struct ContentView4_Previews: PreviewProvider {
    static var previews: some View {
        ContentView4()
    }
}
