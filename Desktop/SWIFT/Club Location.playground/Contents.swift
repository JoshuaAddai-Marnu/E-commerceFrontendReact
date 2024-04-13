import UIKit
import CoreLocation
import Foundation
import MapKit

class ClubLocationViewModel {
    var clubName: String = ""
    var clubLocation: String = ""
    var coordinates: CLLocationCoordinate2D?
    var region: MKCoordinateRegion = MKCoordinateRegion()
    
    func getCoordinatesForClub() async throws {
        let geocoder = CLGeocoder()
        if let placemarks = try? await geocoder.geocodeAddressString(clubLocation),
           let location = placemarks.first?.location?.coordinate {
            DispatchQueue.main.async {
                self.coordinates = location
                self.region = MKCoordinateRegion(center: location, span: MKCoordinateSpan(latitudeDelta: 0.01, longitudeDelta: 0.01))
            }
        } else {
            print("Error: Unable to find the coordinates for the club")
        }
    }
}

let myClub = ClubLocationViewModel()
myClub.clubLocation = "115 new Cavendish Street"
try await myClub.getCoordinatesForClub()
