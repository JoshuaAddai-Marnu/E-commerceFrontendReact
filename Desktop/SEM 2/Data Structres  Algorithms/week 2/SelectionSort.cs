using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lecture_2
{
    class SelectionSort
    {
        public static void selectionSort( int[] values )
        {
            int lastUnsorted = values.Length - 1; // end of the unsorted segment

            while ( lastUnsorted > 0 )
            {
                // find the maximal unsorted element
                int maxIndex = 0;            // its index
                int maxValue = values[0];    // its value

                for ( int i = 1; i <= lastUnsorted; i++ )
                {
                    if ( values[i] > maxValue )
                    {
                        // new maximal value at i
                        maxIndex = i;
                        maxValue = values[i];
                    }
                }

                // swap maximal with last unsorted, & add it to the sorted segment
                values[maxIndex]     = values[lastUnsorted];
                values[lastUnsorted] = maxValue;

                lastUnsorted--;
            }

        }


    }
}
