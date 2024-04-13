//: Functions that return tuples (more than one parameter is returned)

//Although you could create a discrete structure for coordinates,  it often convenient to use a tuple return function

func coordinates() -> (Double, Double) {
    return (latitude: 51.0, longitude: -0.05)
}

// Call the function and use the returned tuple
let location = coordinates()
print("Latitude: \(location.0), Longitude: \(location.1)")
//Note: location.0 is the first item in the tuple and location.1 the second

//functions can return mixed tuple types and by name

func processUserReg(name: String, age: Int) -> (name: String, age: Int, isAdult: Bool) {
    let isAdult = age >= 18
    return (name, age, isAdult)
}

// Example usage of the function
let user = processUserReg(name: "Peter", age: 18)

// Accessing the tuple elements

let userName = user.name
let userAge = user.age
let isUserAdult = user.isAdult

print("Name: \(userName), Age: \(userAge), Is Adult: \(isUserAdult)")


//: [Back](Main)

