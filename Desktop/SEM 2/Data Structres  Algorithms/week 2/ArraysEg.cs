using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lecture_2
{
    class ArraysEg
    {

        // Lecture 2, slide: 5
        // System.Array Class Examples
        public static void exampleArrayList()
        {

            // 1 - dimensional array of ints, Objects
            int[] myIntArray = new int[5] { 1, 2, 3, 4, 5 };

            myIntArray[2] = 33;

            // 2-dimensional array of Doubles, 
            Double[,] myDoubles = new Double[10, 20];

            myDoubles[2, 5] = 2.022;

            Console.WriteLine("myDoubles[2, 5] = " + myDoubles[2, 5]);
            Console.WriteLine();

            // 3-dimensional array of Strings
            String[,,] myStrings = new String[5, 3, 10];

            myStrings[4, 2, 8] = "Dog";

            Console.WriteLine("myStrings[4, 2, 8] = " + myStrings[4, 2, 8]);
            Console.WriteLine();

            // jagged array: 3 rows of 3 different sized arrays
            int[][] jaggedInts = new int[3][];

            jaggedInts[0] = new int[2];  // 1st row: 2 element array
            jaggedInts[1] = new int[4];  // 2nd row: 4 element array
            jaggedInts[2] = new int[6];  // 3rd row: 6 element array

            jaggedInts[2][5] = 99;       // last row & last element


            Console.WriteLine("jaggedInts[2][5] = " + jaggedInts[2][5]);
            Console.WriteLine();


        }
    }
}
