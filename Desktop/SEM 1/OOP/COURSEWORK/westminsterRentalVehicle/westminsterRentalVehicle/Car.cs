using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public class Car : Vehicle
    {
        private int numberOfDoors;
        private int numberOfPassengers;
        private int trunkCapacity;
        private bool isConvertible;
        private double engineCapacity;

        public Car(String regNum, string make, string model, int year, string colour, decimal mileage, string transmission, decimal renPrice, int numbDoors, int numPass, int trunkCap, bool isConv, double engCap)
            : base(regNum, make, model, year, colour, mileage, transmission, renPrice)
        {
            numberOfDoors = numbDoors;
            numberOfPassengers = numPass;
            trunkCapacity = trunkCap;
            isConvertible = isConv;
            engineCapacity = engCap;
        }
        public Car(String regNum, string make, string model, string colour, decimal renPrice) : base(regNum, make, model, colour, renPrice)
        {
          

        }

        public void displayCarInfo()
        {
            Console.WriteLine($"Number of doors: {numberOfDoors}.\nMaximum number of passengers: {numberOfDoors}." +
                $"\nTrunk capacity: {trunkCapacity},\nConvertible? {isConvertible}.\nEngine capacity: {engineCapacity}  ");
        }
    }    
}
