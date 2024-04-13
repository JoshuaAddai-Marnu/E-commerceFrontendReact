using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public class WestminsterRentalVehicle : IRentalCustomer, IRentalManager
    {
        private List<Vehicle> vehicles;
        private static int availableParkingSpace = 50;

        public WestminsterRentalVehicle()
        {
            vehicles = new List<Vehicle>();
        }

        // Customer Functionality
        public void ListAvailableVehicles(Schedule wantedSchedule, Type type)
        {
           
           
            Console.WriteLine($"Available {type.Name}s for the schedule {wantedSchedule.PickUpDate} to {wantedSchedule.DropOffDate}:");

            foreach (var vehicle in vehicles)
            {
                // Check if the vehicle is of the specified type
                // Check if the vehicle is available for the wanted schedule
                if (vehicle.GetType() == type && !vehicle.Overlaps(wantedSchedule))
                {
                    vehicle.DisplayVehicleInfo();
                    Console.WriteLine(); // Add a newline for better readability
               }
            }
        }

        public bool AddReservation(string regNumber, Schedule schedule)
        {

            // Find the vehicle with the specified number
            Vehicle vehicleToBeAdd = new Car(regNumber, "", "", "", 0);

            // Find the vehicle with the specified registration number using the overridden Equals method
            Vehicle vehicleToReserve = vehicles.Find(vehicle => vehicle.Equals(vehicleToBeAdd));

            // Check if the vehicle exists
            if (vehicleToReserve == null)
            {
                Console.WriteLine($"Error: Vehicle with registration number {regNumber} not found.");
                return false;
            }

            // Check if the vehicle is available for the wanted schedule
            if (vehicleToReserve.Overlaps(schedule))
            {
                Console.WriteLine($"Error: Vehicle with registration number {regNumber} is not available for the specified schedule.");
                return false;
            }

            // Calculate the total price based on the daily price of the selected vehicle
            decimal totalPrice = schedule.TotalDaysBooked() * vehicleToReserve.GetRentalPrice;

            schedule.ScheduleCost = totalPrice;

            // Add the reservation to the schedule
            vehicleToReserve.AddReservation(schedule);

            Console.WriteLine($"Reservation added for vehicle with registration number {regNumber}.");
            return true;
        }

        public bool ChangeReservation(string regNumber, Schedule oldSchedule, Schedule newSchedule)
        {
            // Find the vehicle with the specified number
            Vehicle vehicleToBeAdd = new Car(regNumber, "", "", "", 0);

            // Find the vehicle with the specified registration number using the overridden Equals method
            Vehicle vehicleToModify = vehicles.Find(vehicle => vehicle.Equals(vehicleToBeAdd));

            // Check if the vehicle exists
            if (vehicleToModify == null)
            {
                Console.WriteLine($"Error: Vehicle with registration number {regNumber} not found.");
                return false;
            }

            // Find the existing reservation associated with the old schedule
            Schedule existingReservation = vehicleToModify.GetSchedules.Find(schedule => schedule.Equals(oldSchedule));

            // Check if the existing reservation is found
            if (existingReservation == null)
            {
                Console.WriteLine($"Error: No reservation found for vehicle with registration number {regNumber} on the specified old schedule.");
                return false;
            }

            // Check if the new requested schedule overlaps with existing reservations
            if (vehicleToModify.Overlaps(newSchedule))
            {
                Console.WriteLine($"Error: The new requested schedule overlaps with existing reservations for vehicle with registration number {regNumber}.");
                return false;
            }

            // Modify the reservation with the new schedule
            existingReservation.PickUpDate = newSchedule.PickUpDate;
            existingReservation.DropOffDate = newSchedule.DropOffDate;

            Console.WriteLine($"Reservation modified for vehicle with registration number {regNumber}.");
            return true;
        }

        public bool DeleteReservation(string regNumber, Schedule schedule)
        {

            Vehicle vehicleToBeAdd = new Car(regNumber, "", "", "", 0);
            // Find the vehicle with the specified number
            Vehicle vehicleToDeleteReservation = vehicles.Find(vehicle => vehicle.Equals(vehicleToBeAdd));

            // Check if the vehicle exists
            if (vehicleToDeleteReservation == null)
            {
                Console.WriteLine($"Error: Vehicle with registration number {regNumber} not found.");
                return false;
            }

            // Find the existing reservation associated with the given schedule
            Schedule existingReservation = vehicleToDeleteReservation.GetSchedules.Find(s => s.Equals(schedule));

            // Check if the existing reservation is found
            if (existingReservation == null)
            {
                Console.WriteLine($"Error: No reservation found for vehicle with registration number {regNumber} on the specified schedule.");
                return false;
            }

            // Remove the reservation from the schedule
            vehicleToDeleteReservation.DeleteReservation(existingReservation);

            Console.WriteLine($"Reservation deleted for vehicle with registration number {regNumber} on the specified schedule.");
            return true;
        }


        // Admin functionality
        public bool AddVehicle(Vehicle v)
        {

            // Check for duplicate registration number
            foreach (var vehicle in vehicles)
            {
                if (vehicle.VehicleExists(v))
                {
                    Console.WriteLine("Vehicle with the same registration number already exists. Duplicate entries are not allowed.");
                    return false; // Duplicate entry, not added
                }
            }

            // Check if parking lots are available
            if (availableParkingSpace <= 0)
            {
                Console.WriteLine("Parking lots are full. Cannot add more vehicles.");
                return false; // Parking lots full, not added
            }

            // Add the new vehicle to the list
            vehicles.Add(v);

            // Display the number of available parking lots
            availableParkingSpace--;
            Console.WriteLine($"Vehicle added successfully. Available parking lots: {availableParkingSpace}");

            return true; // Vehicle added successfully
        }


        public bool DeleteVehicle(string regNumber)
        {

            Vehicle vehicleToBeDeleted = new Car(regNumber, "", "", "",0);
            // Find the vehicle with the specified registration number using the overridden Equals method
            Vehicle vehicleToRemove = vehicles.Find(vehicle => vehicle.Equals(vehicleToBeDeleted));

            // Check if the vehicle was found
            if (vehicleToRemove == null)
            {
                Console.WriteLine($"Vehicle with registration number {regNumber} not found. No vehicle deleted.");
                return false; // Vehicle not found, not deleted
            }

            // Remove the vehicle from the list
            vehicles.Remove(vehicleToRemove);

            // Display information about the deleted vehicle
            Console.WriteLine($"Vehicle with registration number {regNumber} deleted.");

            // Display the number of available parking lots
            availableParkingSpace++;
            Console.WriteLine($"Number of available parking lots: {availableParkingSpace}");

            return true; // Vehicle deleted successfully
        }

        public void ListVehicles()
        {
            Console.WriteLine("List of all vehicles:");
            foreach (var vehicle in vehicles)
            {
                vehicle.DisplayVehicleInfo();
                Console.WriteLine();
            }

        }

        public void ListOrderedVehicles()
        {
            // Create a new list and order it without modifying the original list
            var orderedVehicles = vehicles.OrderBy(vehicle => vehicle);

            Console.WriteLine("List of all vehicles (sorted in alphabetical order of Make");
            // Display the ordered list
            foreach (var vehicle in orderedVehicles)
            {
                vehicle.DisplayVehicleInfo();
            }
        }

        public void GenerateReport(string fileName)
        {
            try
            {
                using (StreamWriter writer = new StreamWriter(fileName))
                {
                    writer.WriteLine("Report For Westminster Rental Vehicle");
                    foreach (var vehicle in vehicles)
                    {
                        vehicle.writeInfoToFile(writer);
                        vehicle.writeScheduleInfoToFile(writer);
                        // Add a separator between vehicles
                        writer.WriteLine(new string('-', 30));
                    }

                    Console.WriteLine($"Report generated and saved to {fileName}");
                }
            }
            catch (IOException ioException)
            {
                Console.WriteLine($"Error: An IO exception occurred while writing to the file. Details: {ioException.Message}");
            }
            catch (UnauthorizedAccessException unauthorizedAccessException)
            {
                Console.WriteLine($"Error: Unauthorized access to the file. Details: {unauthorizedAccessException.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
