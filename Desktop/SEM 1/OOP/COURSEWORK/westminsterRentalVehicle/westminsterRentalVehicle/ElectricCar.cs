using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public class ElectricCar : Car
    {
        private int batteryCapacity;
        private TimeOnly chargingTime;
        private int chargingSpeed;
        private string chargingType;

        public ElectricCar(String regNum, string make, string model, int year, string colour, decimal mileage, string transmission, decimal renPrice,
            int numbDoors, int numPass, int trunkCap, bool isConv, double engCap, int battCap, TimeOnly chargeT, int chargeS, string chargeTyp ) 
            : base( regNum, make, model, year, colour, mileage, transmission, renPrice, numbDoors, numPass, trunkCap, isConv, engCap)
        {
            batteryCapacity = battCap;
            chargingTime = chargeT;
            chargingSpeed = chargeS;
            chargingType = chargeTyp; //type 1(AC - slow charging) and type 2(CCS - fast charging)
        }

        public ElectricCar(String regNum, string make, string model, string colour, decimal renPrice) : base(regNum, make, model, colour, renPrice)
        {


        }

        //methods
        public void displayElectCarInfo()
        {
            Console.WriteLine($"Battery Capacity: {batteryCapacity} kWh\nChargingTime: {chargingTime} minutes\nCharging Speed: {chargingSpeed}" +
                $"\n Charging Type: {chargingType}");
        }

    }
}
