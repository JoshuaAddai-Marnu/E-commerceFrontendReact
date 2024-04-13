//
//  BookViewModel.swift
//  BOOK_MVVM
//
//  Created by GirishALukka on 04/02/2023.
//

import Foundation

class BookViewModel: ObservableObject {
    @Published var books: [BookModel] = []
    
    func fetch(){
        books = [BookModel(name: "A Tale of Two Cities"),
                 BookModel(name: "The Trial"),
                 BookModel(name:"HumaneInterfaces"),
                 BookModel(name:"HumaneInterfaces"),
        ]
        
    }
}
