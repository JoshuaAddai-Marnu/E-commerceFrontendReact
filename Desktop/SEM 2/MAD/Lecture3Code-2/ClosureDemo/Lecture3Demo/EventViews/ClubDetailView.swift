//
//  ClubDetailView.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct ClubDetailView: View {
    let club: EPLClub
    
    @Binding var isPresented: EPLClub?
    var body: some View {
        NavigationView {
            VStack{
                Text(club.clubName)
                Text(club.history)
            }
            .navigationBarTitle(club.clubName)
            .navigationBarItems(trailing: DismissButton(isPresented: $isPresented))
            
        }
        
    }
}

struct DismissButton: View {
    @Binding var isPresented: EPLClub?
    
    var body: some View {
        Button("Dismiss") {
            isPresented = nil
        }
    }
}
//struct ClubDetailView_Previews: PreviewProvider {
//    static var previews: some View {
//        ClubDetailView(club: club, isPresented: isPresented)
//    }
//}
