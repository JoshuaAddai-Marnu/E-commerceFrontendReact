using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public interface IOverlappable
    {
        public bool Overlaps(Schedule s);
    }
}
