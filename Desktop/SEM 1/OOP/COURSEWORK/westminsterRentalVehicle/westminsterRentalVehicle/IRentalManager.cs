using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public interface IRentalManager
    {
        public bool AddVehicle(Vehicle v);
        public bool DeleteVehicle(string number);
        public void ListAvailableVehicles(Schedule wantedSchedule, Type type);
        public void ListOrderedVehicles();
        public void GenerateReport(string fileName);


    }
}
