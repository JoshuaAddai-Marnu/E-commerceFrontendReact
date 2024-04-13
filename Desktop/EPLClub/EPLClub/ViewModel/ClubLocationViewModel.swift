//
//  ClubLocationViewModel.swift
//  EPLClub
//
//  Created by Joshua Addai-Marnu on 15/02/2024.
//

import Foundation
import Foundation
import SwiftUI
import CoreLocation
import MapKit

class ClubLocationViewModel: ObservableObject {
    @Published var selectedClub: EPLClub?
    @Published var coordinates: CLLocationCoordinate2D?
    @Published var region: MKCoordinateRegion = MKCoordinateRegion()

    func getAllEPLClubs() -> [EPLClub] {
        return [
            EPLClub(clubName: "Liverpool", logo: "liverpool", clubLocation: "Anfield Road, Liverpool. L4 0TH", stadium: "anfield", history: "Liverpool Football Club is a professional football club based in Liverpool"),
            EPLClub(clubName: "Chelsea", logo: "chelsea", clubLocation: "Stamford Bridge, London. SW6 1HS", stadium: "stamford", history: "Chelsea Football Club is an English professional football club based in Fulham, West London"),
            EPLClub(clubName: "Aston Villa", logo: "astonvilla", clubLocation: "Villa Park, Trinity Road, Birmingham. B6 6HE", stadium: "villa", history: "Aston Villa Football Club, commonly referred to as Villa, is a professional football club based in Aston, Birmingham, England."),
            // Add other EPL clubs with their information
            // ...
        ]
    }
    func getCoordinatesForClub(_ club: EPLClub) async throws{
        if let selectedClub = selectedClub {
            let geocoder = CLGeocoder()
            if let placemarks = try? await geocoder.geocodeAddressString(selectedClub.clubLocation),
               let location = placemarks.first?.location?.coordinate {
                DispatchQueue.main.async {
                    self.coordinates = location
                    self.region = MKCoordinateRegion(center: location, span: MKCoordinateSpan(latitudeDelta: 0.01, longitudeDelta: 0.01))
                }
            } else {
                // Handle error here if geocoding fails
                print("Error: Unable to find the coordinates for the club.")
            }
        }
    }
}
