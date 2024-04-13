/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Nested functions
 Nested function example
 */
import Foundation

func calculateMonthlyPayments(carPrice: Double, downPayment: Double, interestRate: Double, paymentTerm: Double) -> Double
{
    func loanAmount() -> Double {
        return carPrice - downPayment
    }
    func totalInterest() -> Double {
        return interestRate * paymentTerm
    }
    func numberOfMonths() -> Double {
        return paymentTerm * 12
    }
    // not all nested functions are called from within return (..)
    return ((loanAmount() + ( loanAmount() *
                              totalInterest() / 100 )) / numberOfMonths())
}


let monthlyPayment = calculateMonthlyPayments(carPrice: 50000, downPayment: 5000, interestRate: 3.5,paymentTerm: 3.5)

print(monthlyPayment)
