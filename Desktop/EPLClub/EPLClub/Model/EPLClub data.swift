//
//  EPLClub data.swift
//  EPLClub
//
//  Created by Joshua Addai-Marnu on 15/02/2024.
//

import Foundation
struct EPLClub: Identifiable{
    let id = UUID()  // Use UUID directly in the struct
    let clubName: String
    let logo: String
    let clubLocation: String
    let stadium: String
    let history: String
}

