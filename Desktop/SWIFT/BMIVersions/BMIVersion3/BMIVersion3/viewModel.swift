//
//  viewModel.swift
//  BMIVersion3
//
//  Created by Joshua Addai-Marnu on 01/02/2024.
//

import Foundation
class BMIViewModel: ObservableObject{
    @Published var height: String = ""
    @Published var weight: String = ""
    @Published var selectedDate: Date = Date()
    @Published var bmiRecords: [BMIRecord] = []
    private
}
