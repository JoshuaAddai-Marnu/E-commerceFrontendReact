
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tutorial_1
{
    // Enumeration types for tube Staion access & status

    interface AccessStatus
    {
        enum ACCESS { Stairs, Lift, Escalator };    // Station Accesses

        enum STATUS { Open, Closed };               // Station Status

    }
}
