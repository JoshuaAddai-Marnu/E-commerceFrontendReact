using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public class Motorbike : Vehicle
    {
        string MotorBikeType;
        int FuelTankCapacity;

        public Motorbike(String regNum, string make, string model, int year, string colour, decimal mileage, string transmission, decimal renPrice, string motorBType, int fuelTankCap) 
            : base(regNum, make, model, year, colour, mileage, transmission, renPrice)
        {
            MotorBikeType = motorBType;
            FuelTankCapacity = fuelTankCap;
        }
        public Motorbike(string regNum, string make, string model, decimal renPrice,string  colour ) : base(regNum, make,  model, colour, renPrice)
        {

        }

        public void displayMotorbikeInfo()
        {
            Console.WriteLine($"Motorbike type: {MotorBikeType}\nFuel Tank Capacity: {FuelTankCapacity}");
        }

    }

    
}
