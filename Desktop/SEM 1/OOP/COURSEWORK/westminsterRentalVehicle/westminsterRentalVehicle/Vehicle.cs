using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    // Declare an abstract class representing a generic Vehicle
    public abstract class Vehicle : IOverlappable, IComparable<Vehicle>
    {
        // Private fields to store vehicle details
        private string RegistrationNumber;
        private string Make;
        private string Model;
        private int Year;
        private string Colour;
        private decimal Mileage;
        private string Transmission;
        private decimal RentalPrice;
        private List<Schedule> schedules = new List<Schedule>();

        // Constructor for vehicles without detailed information
        public Vehicle(String regNum, string make, string model, string colour, decimal renPrice)
        {
            RegistrationNumber = regNum;
            Make = make;
            Model = model;
            Colour = colour;
            RentalPrice = renPrice;

        }

        // Constructor for vehicles with detailed information
        public Vehicle(String regNum, string make, string model, int year, string colour, decimal mileage, string transmission, decimal renPrice)
        {
            RegistrationNumber = regNum;
            Make = make;
            Model = model;
            Year = year;
            Colour = colour;
            Mileage = mileage;
            Transmission = transmission;
            RentalPrice = renPrice;

        }

        // Method to display vehicle information
        public void DisplayVehicleInfo()
        {
            Console.WriteLine($"Registration Number: {RegistrationNumber}\nMake or Manufacturer: {Make}\nModel: {Model}\nYear manufactured: {Year}" +
                $"\nColour: {Colour}\nMileage in miles: {Mileage}\nTransmission type: {Transmission}\nRental Price: £{RentalPrice}");
        }


        // Implementation of IComparable interface for sorting vehicles based on make and model
        public int CompareTo(Vehicle other)
        {
            //Compare vehicles based on make
            int makeComparison = string.Compare(Make, other.Make, StringComparison.Ordinal);
            if ( makeComparison != 0 )
            {
                return makeComparison;
            }
            //Compare based on Model if Make are the same
            int modelComparison = string.Compare(Model, other.Model, StringComparison.Ordinal);
            return modelComparison; 

        }

        // Method to check if a vehicle with the same registration number already exists
        public bool VehicleExists(Vehicle v)
        {
            return v.RegistrationNumber.ToLower() == RegistrationNumber.ToLower();
        }

        // Virtual method to check if the vehicle's schedule overlaps with another schedule
        public virtual bool Overlaps(Schedule schedule)
        {
            foreach (var existingSchedule in schedules)
            {
               if (existingSchedule.Overlaps(schedule))
                {
                    return true;
                }
            }
            return false;
        }

        // Virtual method to write vehicle information to a file
        public virtual void writeInfoToFile(StreamWriter writer)
        {
            //Write or record initial vehicle information
            writer.WriteLine($"Vehicle Information: \nRegistration Number: {RegistrationNumber}\nMake or Manufacturer: {Make}\nModel: {Model}\nYear manufactured: {Year}" +
                $"\nColour: {Colour}\nMileage in miles: {Mileage}\nTransmission type: {Transmission}\nRental Price: ${RentalPrice}");
        }

        // Method to write schedule information for the vehicle to a file
        public void writeScheduleInfoToFile(StreamWriter writer)
        {
            //Get and sort the bookings for vehicle
            var sortedBookings = schedules.OrderBy(vehicle => vehicle);
            writer.WriteLine("Bookings made: ");
            //Write booking information
            foreach (var  booking in sortedBookings)
            {
                booking.writeScheduleToFile(writer);
            }
        }

        // Property to get the rental price of the vehicle
        public decimal GetRentalPrice { get { return RentalPrice; } }

        // Property to get the list of schedules for the vehicle
        public List<Schedule> GetSchedules { get { return schedules; } }

        // Method to add a reservation schedule to the vehicle
        public void AddReservation(Schedule schedule)
        {
            schedules.Add(schedule);
        }

        // Method to delete a reservation schedule from the vehicle
        public void DeleteReservation(Schedule schedule)
        {
            schedules.Remove(schedule);
        }

    }
}
