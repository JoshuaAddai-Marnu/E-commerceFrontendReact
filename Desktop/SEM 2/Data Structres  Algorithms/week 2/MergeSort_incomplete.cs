//____________________________________________________________________
// Week 02 Lecture: slide 33
// Merge Sort: TO DO Exercise 

using System;

public class MergeSort
{

       // create a string representation of a segment, used to check & debug your mergeRanges method
        private static string segmentToString( int[] segment, int first, int last )
        {
            string seg = "Segment[ ";

            if (first <= last)
            {
                seg = seg + "first = " + first + "  last = " + last + " | ";

                for (int i = first; i <= last; i++)
                {
                    seg = seg + " " + segment[i];
                }
            }
            else
            {
                // segment is empty
            }

            seg = seg + " ]";

            return seg;

        }


  // Merge (sorted) segments:
  //     values[first]..values[mid] & 
  //     values[mid+1]..values[last]

  private static void mergeRanges( int[] values, int first, int mid, int last )
  {
     Console.WriteLine(" Tutorial Exercise: TO DO ") ;
     Console.WriteLine( "first = {0}, middle = {1}, lat = {2} ", first, mid, last ) ;
     Console.WriteLine();

     Console.WriteLine("mergeSegments: {0}  &  {1}", segmentToString(values, first, mid), 
                                                     segmentToString(values, mid + 1, last) ) ;

     /**  
	Merge Steps:

	1. calculate number of elements to be merged
	2. create temporary array to hold elements to be merged
	3. create 3 indexes to use during merging
	4. while both segments have unmerged values, compare and pick lesser to add to temporary array 
	5. copy remaining unmerged values from whichever segment has them, if there are any
	6. copy merged values from temporary array back into to orignal segment

    **/

  }

  // Sorts the range: values[first]..values[last]
  private static void sortRange( int[] values, int first, int last )
  {
     if ( last > first )
     {
       // Otherwise there is nothing to do (single value)
       int mid = (first + last) / 2;                // split array into 2 segments

       sortRange( values, first, mid ) ;            // Recursively sort lower segment
       sortRange( values, mid + 1, last ) ;         // Recursively sort upper segment

       mergeRanges( values, first, mid, last ) ;    // Merge sorted segments
     }
  }

  public static void sort(int[] numbers)
  {
    sortRange( numbers, 0, numbers.Length - 1 ) ;
  }
}

//____________________________________________________________________

/**
 To call it:

    int[] numbers = { 42, 78, 31, 12, 25, 10, 9, 24, 87, 13 } ;

    MergeSort.sort( numbers ) ;  // merge sorts numbers array

**/

//____________________________________________________________________



