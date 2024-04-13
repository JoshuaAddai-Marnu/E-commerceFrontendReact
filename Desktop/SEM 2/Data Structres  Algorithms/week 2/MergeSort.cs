//____________________________________________________________________
// Week 02 Lecture: slide 33
// Merge Sort: implementation

using System;

namespace Lecture_2
{
    class MergeSort
    {

        // Merge (sorted) segments values[first]..values[mid] & values[mid+1]..values[last]
        private static void mergeRanges(int[] values, int first, int mid, int last)
        {
            Console.WriteLine(" Tutorial Exercise: TO DO ");
            Console.WriteLine( "first = {0}, middle = {1}, lat = {2} ", first, mid, last ) ;
            Console.WriteLine();
        }

        // Sorts the range: values[first]..values[last]
        private static void sortRange(int[] values, int first, int last)
        {
            if (last > first)
            {
                // Otherwise there is nothing to do (single value)
                int mid = (first + last) / 2;           // split array into 2 segments

                sortRange(values, first, mid);     // Recursively sort lower segment
                sortRange(values, mid + 1, last);  // Recursively sort upper segment

                mergeRanges(values, first, mid, last);   // Merge sorted segments
            }
        }

        public static void mergeSort(int[] numbers )
        {
            sortRange( numbers, 0, numbers.Length - 1);
        }
    }
}

//____________________________________________________________________

/**
 To call it:

    int[] numbers = { 42, 78, 31, 12, 25, 10, 9, 24, 87, 13 } ;

    MergeSort.sort( numbers ) ;  // merge sorts numbers array

**/

//____________________________________________________________________


