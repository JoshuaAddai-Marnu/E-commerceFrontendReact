using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// For ArrayList
// using System.Collections.ArrayList ;
using System.Collections ;


namespace Lecture_2
{
    class ArrayListEg
    {
        // Lecture 2, slide: 38
        // ArrayList Class Example
        public static void exampleArrayList()
        {
            ArrayList myAL = new ArrayList();

            myAL.Add("Hello");  // Add 3 strings
            myAL.Add("World");
            myAL.Add("!");

            myAL.RemoveAt(1);        // Removes element at index 1, "World"

            myAL.Insert(1, "Earth"); // Inserts "Earth" at index 1

            System.Console.WriteLine(myAL[0]);  // prints "Hello"
            System.Console.WriteLine(myAL[1]);  // prints "Earth" 
            System.Console.WriteLine(myAL[2]);  // prints "!"
        }
    }
}
