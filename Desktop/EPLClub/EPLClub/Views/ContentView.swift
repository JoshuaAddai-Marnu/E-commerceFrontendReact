//
//  ContentView.swift
//  EPLClub
//
//  Created by Joshua Addai-Marnu on 15/02/2024.
//

import SwiftUI
import CoreLocation
import MapKit

struct ContentView: View {
    @StateObject private var viewModel = ClubLocationViewModel()
    @State private var selectedClub: EPLClub?
    @State var isLoading = false
    @State private var isAlternateViewPresented = false
    var body: some View {
        
        Text("EPL Ver3 async MVVM")
        NavigationView {
            VStack {
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 20) {
                        ForEach(viewModel.getAllEPLClubs()){ club in
                            ClubCardView(club: club)
                            
                        }
                    }
                    .padding(.horizontal)
                }
                Divider()
                
                    .navigationTitle("EPL Clubs")
                ScrollView(.vertical, showsIndicators: false) {
                    VStack(spacing: 20) {
                        ForEach(viewModel.getAllEPLClubs()){ club in
                            ClubRowView(club: club)
                            
                        }
                    }
                    .padding(.horizontal)
            }
        }
        
    }
}
 //#Preview {
 //   ContentView()
}
    
