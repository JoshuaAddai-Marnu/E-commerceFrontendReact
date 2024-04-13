using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public interface IRentalCustomer
    {
        void ListAvailableVehicles(Schedule wantedSchedule, Type type);
        bool AddReservation(string regNum, Schedule schedule);
        bool ChangeReservation(string regNum, Schedule oldSchedule, Schedule newSchedule);
        bool DeleteReservation(string regNum, Schedule schedule);
        bool AddVehicle(Vehicle v);
    }
}
