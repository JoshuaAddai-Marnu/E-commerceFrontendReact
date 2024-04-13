/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Structs
 */
import Foundation

// Define an enum to represent the states of a traffic light
enum TrafficLight {
    case red
    case redAmber
    case green
    case amber
}

// function to simulate the behavior of a traffic light
func simulateBritishTrafficLight() {
    var currentLight: TrafficLight = .red
    
    for i in 1...10 {
        switch currentLight {
        case .red:
            print("Red light - Stop!")
            sleep(3) // Red light duration: 3 seconds
            currentLight = .redAmber
        case .redAmber:
            print("Red and Amber lights - Prepare to go.")
            sleep(1) // Red and Amber light duration: 1 second
            currentLight = .green
        case .green:
            print("Green light - Go!")
            sleep(4) // Green light duration: 4 seconds
            currentLight = .amber
        case .amber:
            print("Amber light - Prepare to stop.")
            sleep(2) // Amber light duration: 2 second
            currentLight = .red
        }
        print("i.....\(i)") // simulation number
    }
    
}

// Simulate the British-style traffic light
simulateBritishTrafficLight()

