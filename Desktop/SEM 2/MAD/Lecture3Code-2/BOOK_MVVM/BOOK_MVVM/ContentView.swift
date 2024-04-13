//
//  ContentView.swift
//  BOOK_MVVM
//
//  Created by GirishALukka on 04/02/2023.
//

import SwiftUI

struct ContentView: View {
    @StateObject var bookViewModel = BookViewModel()
    
    var body: some View {
        Text("My Books")
        List(bookViewModel.books){ book in
            HStack{
                Image(systemName: "book")
                Text(book.id.description)
                Text(book.name)
            }
            .padding(/*@START_MENU_TOKEN@*/.all/*@END_MENU_TOKEN@*/)
        }
            .onAppear {
                bookViewModel.fetch()
                print(bookViewModel.books)
            }
        }
        
    }


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
