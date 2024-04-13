
//: A Swift function that returns an optional is useful when the result may or may not be present or valid
 
//: Many framework calls can return optionals (i.e. have a value or be nil so it is important to know how to handle these safely

//Example function - finding an element in a int array
//Note the return is an optional 'Int?'
func findElement(in array: [Int], element: Int) -> Int? {
    if let index = array.firstIndex(of: element) {
        return index
    } else {
        return nil
    }
}

let numbers = [1, 2, 3, 4, 5]
// Attempt to find where the value (if exists) is in the array - note the call uses an if-let to safely unwrap the right-hand side
if let foundIndex = findElement(in: numbers, element: 3) {
    print("Element found at index \(foundIndex)")
} else {
    print("Element not found")
}

//: [Back](Main)

