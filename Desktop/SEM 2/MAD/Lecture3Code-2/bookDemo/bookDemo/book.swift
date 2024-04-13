//
//  book.swift
//  bookDemo
//
//  Created by Girish Lukka on 08/03/2022.
//

import Foundation

struct Book: Identifiable{
    
    var id = UUID()
    var title: String
    var author: String
    var author_bio: String
    var publisher: String
    var review: String
    var imageName: String
}


   

//Sample books

let mybooks = [

    Book(title: "JavaScript for Programmers", author: "Paul J. Deitel ", author_bio: "Chief Technical Officer of Deitel and Associates, Inc.\n"
         + " is a graduate of the Massachusetts Institute of Technology's Sloan School of Management\n"
         + " where he studied Information Technology. ", publisher: "Prentice Hall", review: "You may not like their coding style\n"
         + "if you're picky about things like DRY(don't repeat yourself),\n"
         + "but hey, it's meant to be pedantic code and so you really should be thankful that it's easy to understand. ", imageName: "javascript"),

    Book(title: "Sams Teach Yourself XML in 24 Hours ", author: "Michael Morrison ", author_bio: "Michael Morrison is a professional Java programmer.  ", publisher: "SAMS ",
         review: "As an introductory text, Michael Morrison's \"Learning XML in 24 hours\" is accessible and personable.\n"
         + "Maybe the other reviewers didn't appreciate his sense of humour,\n"
         + "but his book is informative and fun. ", imageName: "xml"),


    Book(title: "JavaScript for Programmers", author: "Paul J. Deitel ", author_bio: "Chief Technical Officer of Deitel and Associates, Inc.\n"
         + " is a graduate of the Massachusetts Institute of Technology's Sloan School of Management\n"
         + " where he studied Information Technology. ", publisher: "Prentice Hall", review: "You may not like their coding style\n"
         + "if you're picky about things like DRY(don't repeat yourself),\n"
         + "but hey, it's meant to be pedantic code and so you really should be thankful that it's easy to understand. ", imageName: "javascript"),

    Book(title: "Sams Teach Yourself XML in 24 Hours ", author: "Michael Morrison ", author_bio: "Michael Morrison is a professional Java programmer.  ", publisher: "SAMS ",
         review: "As an introductory text, Michael Morrison's \"Learning XML in 24 hours\" is accessible and personable.\n"
         + "Maybe the other reviewers didn't appreciate his sense of humour,\n"
         + "but his book is informative and fun. ", imageName: "xml"),
    Book(title: "JavaScript for Programmers", author: "Paul J. Deitel ", author_bio: "Chief Technical Officer of Deitel and Associates, Inc.\n"
         + " is a graduate of the Massachusetts Institute of Technology's Sloan School of Management\n"
         + " where he studied Information Technology. ", publisher: "Prentice Hall", review: "You may not like their coding style\n"
         + "if you're picky about things like DRY(don't repeat yourself),\n"
         + "but hey, it's meant to be pedantic code and so you really should be thankful that it's easy to understand. ", imageName: "javascript"),

    Book(title: "Sams Teach Yourself XML in 24 Hours ", author: "Michael Morrison ", author_bio: "Michael Morrison is a professional Java programmer.  ", publisher: "SAMS ",
         review: "As an introductory text, Michael Morrison's \"Learning XML in 24 hours\" is accessible and personable.\n"
         + "Maybe the other reviewers didn't appreciate his sense of humour,\n"
         + "but his book is informative and fun. ", imageName: "xml"),
]
