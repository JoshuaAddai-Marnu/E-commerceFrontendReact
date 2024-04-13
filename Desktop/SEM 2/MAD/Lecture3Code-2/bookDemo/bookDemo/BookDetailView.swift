//
//  BookDetailView.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct BookDetailView: View {
    
    var book : Book
    var body: some View {
        VStack{
        
            Image(book.imageName)
                .padding()
            Text(book.imageName)
                .padding()
            Text(book.title)
                .padding()
            
            Text(book.author)
                .padding()
            Text(book.author_bio)
                .padding()
            Text(book.review)
    }
    }
    
}

struct BookDetailView_Previews: PreviewProvider {
    static var previews: some View {
        BookDetailView(book: Book(title: "Test", author: "test", author_bio: "test", publisher: "test", review: "test", imageName: "xml"))
    }
}

