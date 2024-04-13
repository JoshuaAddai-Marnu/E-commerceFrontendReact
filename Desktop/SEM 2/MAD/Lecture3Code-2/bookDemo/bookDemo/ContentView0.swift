//
//  ContentView1.swift
//  bookDemo
//
//  Created by Girish Lukka on 11/03/2022.
//

import SwiftUI

struct ContentView0: View {
//    var books =  ["myBook1", "myBook2", "myBook3"]
    var books = [Book1(title: "myBook1"),Book1(title: "myBook2"),Book1(title: "myBook3"), ]
    var body: some View {
        List(books) {myBook in
            Text(myBook.title)
            Text(myBook.id.uuidString)
    
        }
    }
}
struct Book1: Identifiable {
    var id = UUID()
    var title: String
    
}

struct ContentView1_Previews: PreviewProvider {
    static var previews: some View {
        ContentView0()
    }
}
