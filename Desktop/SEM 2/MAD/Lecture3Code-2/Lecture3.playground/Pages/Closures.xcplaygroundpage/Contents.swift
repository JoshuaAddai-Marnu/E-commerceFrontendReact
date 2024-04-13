// pass a function as an argument

func calculator (n1: Int, n2: Int, operation: (Int,Int) -> Int) -> Int {
    return operation(n1,n2)
}

func times(no1: Int, no2: Int) -> Int {
    return no1 * no2
    // signature of add is (Int,Int) -> Int
}

//call functimes as a stand-alone function
print(times(no1: 5, no2: 4))


// pass times as argument to calculator

print(calculator(n1: 4, n2: 7, operation: times))

// convert times function to a closure as follows:

// remove func and name and rewrite it in a { } with reserved word in:
//
//{ (no1: Int, no2: Int) -> Int in
//    return no1 * no2
//}
 // this can now be passed directly to calculator function::

print(calculator(n1: 5, n2: 7, operation: { (no1: Int, no2: Int) -> Int in
    return no1 * no2
}))

// This can be further shortened when type in closures can be clearly infered, only a single value is returned and it is the last argument - a trailing clousre

print(calculator(n1: 8, n2: 7) { $0 * $1})

