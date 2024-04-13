//
//  BooksView.swift
//  BOOK_MVVM
//
//  Created by GirishALukka on 04/02/2023.
//

import SwiftUI

struct BooksView: View {
    @StateObject private var oo = BooksOO()
    
    var body: some View {
        VStack {
            List(oo.data) { datum in
                Text(datum.name)
            }
        }
        .onAppear {
            oo.fetch()
        }
    }
}

struct Books_Previews: PreviewProvider {
    static var previews: some View {
        BooksView()
    }
}

// Observable Object
import SwiftUI

class BooksOO: ObservableObject {
    @Published var data: [BooksDO] = []
    
    func fetch() {
        data = [BooksDO(name: "SwiftUI Views Mastery"),
                BooksDO(name: "SwiftUI Animations Mastery"),
                BooksDO(name: "Combine Mastery in SwiftUI"),
                BooksDO(name: "Working with Data in SwiftUI")]
    }
}

// Data Object
import Foundation

struct BooksDO: Identifiable {
    let id = UUID()
    var name: String
}
