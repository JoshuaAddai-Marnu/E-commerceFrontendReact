//
//  AuthorDetailView.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import SwiftUI

struct AuthorDetailView: View {
    var book : Book
    var body: some View {
        
        Image(systemName: "face.smiling.fill")
            .resizable().scaledToFit()
            .foregroundColor(.yellow)
            
            
        Text(book.author)
            .padding()
        Text(book.author_bio)
    }
}

struct AuthorDetailView_Previews: PreviewProvider {
    static var previews: some View {
        AuthorDetailView(book: mybooks[0])
    }
}
