//
//  BookDetailView.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct BookDetailView2: View {
    
    var book : Book
    var body: some View {
        VStack{
        
            Image(book.imageName)
                
                .resizable().scaledToFit()
                
            Text(book.imageName)
                .padding()
            Text(book.title)
                .padding()
//            NavigationLink(destination: Text("Author Details")){
            NavigationLink(destination: AuthorDetailView(book: book)){
            Text(book.author)
                .padding()
            }
            
            Text(book.author_bio)
                .padding()
            Text(book.review)
    }
    }
    
}

struct BookDetailView2_Previews: PreviewProvider {
    static var previews: some View {
        BookDetailView2(book: Book(title: "Test", author: "test", author_bio: "test", publisher: "test", review: "test", imageName: "xml"))
    }
}

