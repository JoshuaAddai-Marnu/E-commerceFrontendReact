using System;

namespace Lecture_2
{
    class Testing_Search_Sort
    {
        static void Main(string[] args)
        {

            ///////////////////////////////////////////////////////////////////////

            Console.WriteLine();
            Console.WriteLine("Testing System.Array class");
            Console.WriteLine();

            ArraysEg.exampleArrayList() ;


            ///////////////////////////////////////////////////////////////////////

            Console.WriteLine();
            Console.WriteLine("Testing Selection Sort");
            Console.WriteLine();

            // unsorted array:
            int[] unsortedNumbers = { 91, 32, 92, 13, 73, 14 };

            SelectionSort.selectionSort(unsortedNumbers) ;

            foreach ( int number in unsortedNumbers )
            {
                Console.Write(" {0}, ", number ) ;
            }

            Console.WriteLine();

            ///////////////////////////////////////////////////////////////////////

            Console.WriteLine();
            Console.WriteLine("Testing Merge Sort") ;
            Console.WriteLine();

            int[] unsortedNumbers2 = { 42, 78, 31, 12, 25, 10, 9, 24, 87, 13 };

            MergeSort.mergeSort( unsortedNumbers2 ) ;

            foreach (int number in unsortedNumbers2 )
            {
                Console.Write(" {0}, ", number);
            }

            Console.WriteLine();

            ///////////////////////////////////////////////////////////////////////

            Console.WriteLine();
            Console.WriteLine("Testing ArrayList Example") ;
            Console.WriteLine() ;

            ArrayListEg.exampleArrayList();
 
            Console.WriteLine();
            Console.WriteLine();

        }
    }
}
