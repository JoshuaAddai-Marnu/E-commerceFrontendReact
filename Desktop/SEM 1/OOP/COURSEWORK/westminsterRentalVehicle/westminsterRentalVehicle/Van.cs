using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    internal class Van : Car
    {
        private float CargoCapacity;
        private int SlidingDoors;
        private float InteriorHeight;
        private int SideStep;

        // Constructor
        public Van(String regNum, string make, string model, int year, string colour, decimal mileage, string transmission, decimal renPrice, int numbDoors, int numPass, int trunkCap, bool isConv, double engCap, float cargoCapacity, int slidingDoors, float interiorHeight, int sideStep) 
            : base( regNum, make, model, year, colour, mileage, transmission, renPrice, numbDoors, numPass, trunkCap, isConv, engCap)
        {
            CargoCapacity = cargoCapacity;
            SlidingDoors = slidingDoors;
            InteriorHeight = interiorHeight;
            SideStep = sideStep;
        }

        public Van(String regNum, string make, string model, string colour, decimal renPrice) : base(regNum, make, model, colour, renPrice)
        {


        }

        // Method to display Van information
        public string DisplayVanInfo()
        {
            return $"Van Information:\nCargo Capacity: {CargoCapacity} cubic meters\nSliding Doors: {SlidingDoors}\nInterior Height: {InteriorHeight} meters\nSide Step: {SideStep}";
        }

        // Method to operate sliding doors
        public void OperateSlidingDoors()
        {
            // Your logic to operate sliding doors goes here
            Console.WriteLine("Has working Sliding doors ...");
        }

    }
}
