//
//  eplTapGesture.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct EPLClub: Identifiable{
    var id = UUID()  // Use UUID directly in the struct
    let clubName: String
    let logo: String
    let clubLocation: String
    let stadium: String
    let history: String
}

struct eplTapGesture: View {
    @State private var selectedClub: EPLClub?
    let eplClubs: [EPLClub] = [
    
            // Add  EPL clubs with their information
    
            EPLClub(clubName: "Liverpool", logo: "liverpool", clubLocation: "Anfield Road, Liverpool. L4 0TH", stadium: "anfield", history: "Liverpool Football Club is a professional football club based in Liverpool"),
            EPLClub(clubName: "Chelsea", logo: "chelsea", clubLocation: "Stamford Bridge, London. SW6 1HS", stadium: "stamford", history: "Chelsea Football Club is an English professional football club based in Fulham, West London"),
            EPLClub(clubName: "Aston Villa", logo: "astonvilla", clubLocation: "Villa Park, Trinity Road, Birmingham. B6 6HE", stadium: "villa", history: "Aston Villa Football Club, commonly referred to as Villa, is a professional football club based in Aston, Birmingham, England."),
    
        ]
    var body: some View {
        List(eplClubs) { club in
            
            Text(club.clubName)
                .onTapGesture {

                    selectedClub = club
                    print(selectedClub ?? "No club selected")
                }
        }.sheet(item: $selectedClub) { club in
                    //Text(club.clubName)
                    ClubDetailView(club: club,  isPresented: $selectedClub)
                }
    }

}



struct eplTapGesture_Previews: PreviewProvider {
    static var previews: some View {
        eplTapGesture()
    }
}
