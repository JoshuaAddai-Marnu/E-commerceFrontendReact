using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    // Class representing a reservation schedule for a vehicle
    public class Schedule
    {
        // Properties
        public DateTime PickUpDate;
        public DateTime DropOffDate;
        public DriverUser Driver;
        private decimal scheduleCost;

        // Constructor
        public Schedule(DateTime pickupDate, DateTime dropoffDate, DriverUser driver)
        {
            PickUpDate = pickupDate;
            DropOffDate = dropoffDate;
            Driver = driver;
        }
        //Contructor 2
        // Initializes a Schedule object with a specified pickup date and dropoff date (no driver)
        public Schedule(DateTime pickupDate, DateTime dropoffDate)
        {
            PickUpDate = pickupDate;
            DropOffDate = dropoffDate;
            
        }
        //methods
        public void displaySchedule()
        {
            Console.WriteLine($"Pick up date of vehicle: {PickUpDate}\nDrop off date of vehicle: {DropOffDate}\nDriver: {Driver.displayDriverUserInfo}");
        }

        public int CompareTo(Schedule other)
        {
            //Compare based on pick up dates
            return PickUpDate.CompareTo( other.PickUpDate );
        }

        // Check if two schedules overlap
        public bool Overlaps(Schedule otherSchedule)
        {
            return PickUpDate.Date < otherSchedule.DropOffDate.Date &&
           DropOffDate.Date > otherSchedule.PickUpDate.Date;
        }

        // Write schedule information to a file using StreamWriter
        public void writeScheduleToFile(StreamWriter writer)
        {

            writer.WriteLine($"Booking date: From {PickUpDate} to {DropOffDate}\nDriver details: {Driver.displayDriverUserInfo} ");
        }

        // Calculate the total number of days booked for the schedule
        public int TotalDaysBooked()
        {
            return (DropOffDate - PickUpDate).Days;
        }

        // Property to get or set the schedule cost
        public decimal ScheduleCost 
        {
            get { return scheduleCost; }
            set { ScheduleCost = value; }
        }

        // Override Equals method to compare two schedules for equality
        public override bool Equals(object? obj)
        {
            if (obj == null || GetType() != obj.GetType())
            {
                return false;
            }
            
        Schedule other = (Schedule)obj;
        return PickUpDate == other.PickUpDate && PickUpDate == other.PickUpDate;
        }

    }  
}
