/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## inout examples
 inout function
 */
import Foundation
func doubleInPlace(number: inout Int) {
    number *= 2
}
var myNum = 10
print(myNum)
doubleInPlace(number: &myNum)
print(myNum)
