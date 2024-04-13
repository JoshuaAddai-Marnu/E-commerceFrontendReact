//
//  ClubRowView.swift
//  EPLClub
//
//  Created by Joshua Addai-Marnu on 15/02/2024.
//

import Foundation
import SwiftUI
import CoreLocation
import  MapKit

struct ClubRowView: View {
    let club: EPLClub
    
    var body: some View {
        HStack {
            Image(club.logo)
                .resizable()
                .frame(width: 40, height: 40)
            Text(club.clubName)
            Spacer()
            Image(club.stadium)
                .resizable()
                .frame(width: 40, height: 40)
        }
        .padding()
        .background(Color.mint)
        .cornerRadius(10)
        .shadow(radius: 5)
    }
}
struct ClubRowView_Previews:
PreviewProvider {
    static var eplClubPV = EPLClub(  clubName: "Liverpool",
                                     logo: "liverpool",
                                     clubLocation : "Anfield Road, Liverpool. L4 0TH",
                                     stadium: "anfield",
                                     history: "Liverpool Football Club is a professional football club based in Liverpool, England. The club competes in the Premier League, the top tier of English football. Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield since its formation.Domestically, the club has won 19 league titles, eight FA Cups, a record nine League Cups and 16 FA Community Shields. In international competitions, the club has won six European Cups, three UEFA Cups, four UEFA Super Cups—all English records—and one FIFA Club World Cup.")
    static var previews: some View{
        ClubRowView(club: eplClubPV)
    }
}

