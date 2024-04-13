using System;
using System.Drawing;
using System.Security.Cryptography;

namespace westminsterRentalVehicle
{
    internal class Program
    {
        private static WestminsterRentalVehicle westminsterRentalVehicle;
        // Main method where the program execution starts
        static void Main(string[] args)
        {
            // Initialize WestminsterRentalVehicle instance
            westminsterRentalVehicle =  new WestminsterRentalVehicle();
            // Start the application
            StartApp();
      
        }

        // Display the main menu for the user
        private static void UserMenu()
        {
            Console.WriteLine($"-------------Westminster Rental Vehicles--------------\n" +
                $"\nSearch and Book Vehicles for rent as a customer OR Add and Delete Vehicles as a manager." +
                $"\n'Select a number as an option'.\nEnter '1' as a Customer.\nEnter '2' as an Admin or Manager\nEnter '3' to Exit.");
        }

        // Start the application and handle user input
        private static void StartApp()
        {
            UserMenu();
            string userInput = Console.ReadLine();
            Console.WriteLine();
            switch (userInput.ToLower())
            {
                case "1":
                    Customer_Menu();

                    Console.WriteLine();
                    break;
                case "2":
                    AdminOrManagerMenu();
                        break;
                case "3":
                    Environment.Exit(0);
                    return;
                default:
                    Console.WriteLine("Wrong Input. Enter a correct number option");
                    break;

            }
        }


        //Methods for Customer_Menu
        
        // Customer menu display
        private static void DisplayCustomerMenu()
        {
            Console.WriteLine($"Customer menu.\n'Select a number as an option'.\n1. List Available Vehicles\n2. Add reservations" +
                $"\n3. Delete reservations\n4. Update reservations.\n5. Go to Admin or manager menu\n6. Go back to menu ");
        }

        // Customer menu functionality
        private static void Customer_Menu()
        {
            while (true)
            {
                DisplayCustomerMenu();
                string customerInput = Console.ReadLine();

                switch (customerInput)
                {
                    case "1":
                        ListAvailableVehicles();
                        break;
                    case "2":
                        ChangeReservation();
                        break;
                    case "3": 
                        DeleteReservations();
                        break;
                    case "4":
                        UpdateReservations();
                        break;
                    case "5":
                        AdminOrManagerMenu();
                        Console.WriteLine("Go to Admin or manager menu");// access admin menu from customer menu
                        break;
                    case "6":
                        Console.WriteLine("Go back to main Menu");
                        break;
                    default:
                        Console.WriteLine("Wrong Input. Enter a correct number option");
                        break;


                }
                if (customerInput == "6")
                {
                    StartApp();
                }
                if (customerInput == "5")
                {
                    AdminOrManagerMenu();
                }
            }
        }

        // Update reservations for a customer
        private static void UpdateReservations()
        {
            Console.WriteLine("What is the registeration number of the vehicle you want to change schedule?");
            string regNum = Console.ReadLine();

            Console.WriteLine("What is your old schedule information?");
            Schedule oldSchedule = AcceptScheduleInformation();

            Console.WriteLine("What is your new schedule information?");
            Schedule newSchedule = AcceptScheduleInformation();

            westminsterRentalVehicle.ChangeReservation(regNum, oldSchedule, newSchedule);
        }

        // Delete reservations for a customer
        private static void DeleteReservations()
        {
            Console.WriteLine("What is the registeration number of the vehicle you want to delete?");
            string regNum = Console.ReadLine();

            Console.WriteLine("What is your schedule information?");
            Schedule schedule = AcceptScheduleInformation();
            westminsterRentalVehicle.DeleteReservation(regNum, schedule);
        }

        // Change reservation for a customer
        private static void ChangeReservation()
        {
            Console.WriteLine("What is the registeration number of the vehicle you want to reserve?");
            string regNum = AcceptInformation();
            Console.WriteLine("What is your schedule information?");
            Schedule schedule = AcceptScheduleInformationWithDriverUser();
            westminsterRentalVehicle.AddReservation(regNum, schedule);
        }

        // Accept schedule information with a driver user for a customer
        public static Schedule AcceptScheduleInformationWithDriverUser()
        {
            PrintMessage("Enter a pickup date (e.g., dd/MM/yyyy):");
            DateTime pickupDate = AcceptDateInformation();

            PrintMessage("Enter a drop-off date (e.g., dd/MM/yyyy):");
            DateTime dropoffDate = AcceptDateInformation();

            DriverUser driver = AcceptDriverInformation();

            Schedule schedule = new Schedule(pickupDate, dropoffDate, driver);

            return schedule;
        }

        // List available vehicles for a customer
        private static void ListAvailableVehicles()
        {
            Console.WriteLine("What kind of vehicle do you want?\n1. Car \n2. Motorbike\n3.Electric car\n4. Van");
            string vehicleType;
            while (true)
            {
                vehicleType = Console.ReadLine();
                if(vehicleType != "1" || vehicleType != "2" || vehicleType != "3" || vehicleType != "4")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Enter a number(1 to 4) for an option. ");
                }
            }
            Console.WriteLine("");
            Schedule schedule = AcceptScheduleInformation();

            switch (vehicleType)
            {
                case "1":
                            
                    westminsterRentalVehicle.ListAvailableVehicles(schedule, typeof(Car));
                    break;
                case "2":
                    westminsterRentalVehicle.ListAvailableVehicles(schedule, typeof(Motorbike));
                    break;
                case "3":
                    westminsterRentalVehicle.ListAvailableVehicles(schedule, typeof(ElectricCar));
                    break;
                case "4":
                    westminsterRentalVehicle.ListAvailableVehicles(schedule, typeof(Van));
                    break;
                default:
                    westminsterRentalVehicle.ListAvailableVehicles(schedule, typeof(Vehicle));
                break;
            }

        }

        //End of Customer Menu Methods;


        //methods for admin for Admin Menu
        // Admin or Manager menu display
        private static void DisplayAdminOrManagerMenu()
        {
            Console.WriteLine($"Admin or Manager Menu\nChoose an option(Between 1 to 6) \n1.Add Vehicle\n2. Delete Vehicle\n3.List Vehicles" +
                $"\n4. List Vehicles in order of Make\n5. Generate Report\n6. Back to Main Menu");

        }

        //already have method of list vehicles

        // Admin or Manager menu functionality
        private static void AdminOrManagerMenu()
        {
            while(true)
            {
                DisplayAdminOrManagerMenu();
                string adminInput = Console.ReadLine();

                switch (adminInput)
                {
                    case "1":
                        Console.WriteLine();
                        AddVehicle();
                        break;
                    case "2":
                        Console.WriteLine();
                        DeleteVehicle();
                        break;
                    case "3":
                        Console.WriteLine();
                        westminsterRentalVehicle.ListVehicles(); 
                        break;
                    case "4":
                        Console.WriteLine();
                        westminsterRentalVehicle.ListOrderedVehicles();
                        break;
                    case "5":
                        Console.WriteLine();
                        GenerateReport();
                        break;
                    case "6":
                        Console.WriteLine();
                        Console.WriteLine("Go back to Menu...");
                        break;
                    default:
                        Console.WriteLine();
                        Console.WriteLine("Enter a number(1 to 6) for an option.");
                        break;

                }
                if (adminInput == "6")
                {
                    StartApp();
                }

            }
        }

        // Add a vehicle for an admin or manager
        private static void AddVehicle()
        {
            Console.WriteLine("Enter vehicle details...");
            Console.WriteLine("Enter the vehicle's registration number:  ");
            string regNum = Console.ReadLine();

            Console.WriteLine("Enter the Manufacturer's name or make: ");
            string make = Console.ReadLine();

            Console.WriteLine("Enter Model of the vehicle: ");
            string model = Console.ReadLine();

            Console.WriteLine("Enter the Year of manufacturing of the vehicle: ");
            string year = Console.ReadLine();

            Console.WriteLine("Enter Colour of the vehicle: ");
            string colour = Console.ReadLine();

            Console.WriteLine("Enter the Mileage of the vehicle: ");
            string  mileage = Console.ReadLine() ;
            decimal Mileage = decimal.Parse(mileage);

            Console.WriteLine("Enter the transmission type of the vehicle: ");
            string traansmission = Console.ReadLine() ;

            Console.WriteLine("Enter the rental price of the vehicle: ");
            string renPrice = Console.ReadLine() ;
            decimal rentalPrice = decimal.Parse(renPrice) ;

            PrintMessage("Select the type of vehicle:");
            string vehicletype;
            while (true)
            {
                PrintMessage("1. Car");
                PrintMessage("2. Motorbike");
                vehicletype = AcceptInformation();
                if (vehicletype == "1" || vehicletype == "2")
                {
                    break;
                }
                else
                {
                    PrintMessage("Please provide a valid type");
                }
            }
            if (vehicletype == "2")
            {
                PrintMessage("");
                PrintMessage("Provide a the bike type:");
                string bikeType = AcceptInformation();
                PrintMessage("Provide engine capacity:");
                string engineCapacity = AcceptInformation();
                PrintMessage("Provide fuel capacity (integer):");
                int fuelCapacity = AcceptIntegerInformation();

                Motorbike motorbike = new Motorbike(regNum, make, model, rentalPrice, colour);
                westminsterRentalVehicle.AddVehicle(motorbike);
            }
            else
            {
                PrintMessage("");
                PrintMessage("Provide the number of doors (integer):");
                int numOfDoors = AcceptIntegerInformation();
                PrintMessage("Provide the number of seats (integer):");
                int numOfSeat = AcceptIntegerInformation();
                PrintMessage("Provide the capacity of the trunk (integer):");
                int trunkCapacity = AcceptIntegerInformation();
                PrintMessage("Is this Car a convertible (TRUE / FALSE):");
                bool isConvertible = AcceptBooleanInformation();
                PrintMessage("Provide the engine capacity (decimal):");
                Decimal engineCapacity = AcceptDecimalInformation();

                PrintMessage("Select the type of car:");
                string carType;
                while (true)
                {
                    PrintMessage("1. Normal Car");
                    PrintMessage("2. Van");
                    PrintMessage("3. Electric Car");
                    carType = AcceptInformation();
                    if (carType == "1" || carType == "2" || carType == "3")
                    {
                        break;
                    }
                    else
                    {
                        PrintMessage("Please provide a valid type");
                    }
                }
                if (carType == "1")
                {
                    Car car = new Car(regNum, make, model, colour, rentalPrice );
                    westminsterRentalVehicle.AddVehicle(car);
                }
                else if (carType == "2")
                {
                    PrintMessage("Provide the capacity of the cargo (float):");
                    float cargoCapacity = AcceptFloatInformation();
                    PrintMessage("Provide the number of sliding doors (integer):");
                    int slidingDoors = AcceptIntegerInformation();
                    PrintMessage("Provide the interior height (float):");
                    float interiorHeight = AcceptFloatInformation();
                    PrintMessage("Does this van has a side step (TRUE / FALSE):");
                    bool hasSideStep = AcceptBooleanInformation();

                    Van van = new Van(regNum, make, model, colour, rentalPrice
                                    );

                    westminsterRentalVehicle.AddVehicle(van);
                }
                 else
                 {
                    PrintMessage("Prodive the battery type:");
                    string batteryType = AcceptInformation();
                    PrintMessage("Prodive the charginig time: ");
                    string chargingTime = AcceptInformation();
                    PrintMessage("Prodive the charger type: ");
                    string chargerType = AcceptInformation();

                    ElectricCar car = new ElectricCar(regNum, make, model, colour, rentalPrice);

                    westminsterRentalVehicle.AddVehicle(car);
                 }
        
            }


        }

        // Delete a vehicle for an admin or manager
        public static void DeleteVehicle()
        {
            Console.WriteLine("Enter the vehicle's registration number to be deleted: ");
            string regNum = Console.ReadLine();
            westminsterRentalVehicle.DeleteVehicle(regNum);
        }

        // Generate and store a report in a file for an admin or manager
        public static void GenerateReport()
        {
            Console.WriteLine("Enter the file's name the report should have: ");
            string filename = Console.ReadLine();
            westminsterRentalVehicle.GenerateReport(filename);

        }

        //other useful methods

        // Print a message to the console
        public static void PrintMessage(string message)
        {
            Console.WriteLine(message);
        }

        // Accept information from the console
        public static string AcceptInformation()
        {
            return Console.ReadLine().Trim();
        }

        // Accept decimal numbers input from the console
        public static Decimal AcceptDecimalInformation()
        {
            bool isValid = false;
            Decimal answer = 0;

            while (isValid != true)
            {
                string response = Console.ReadLine();
                isValid = Decimal.TryParse(response, out answer);

                if (isValid != true)
                {
                    PrintMessage("Please provide a valid answer");
                }
                else
                {
                    break;
                }
            }
            return answer;
        }

        // Accept float information from the console
        public static float AcceptFloatInformation()
        {
            bool isValid = false;
            float answer = 0;

            while (isValid != true)
            {
                string response = Console.ReadLine();
                isValid = float.TryParse(response, out answer);

                if (isValid != true)
                {
                    PrintMessage("Please provide a valid answer");
                }
                else
                {
                    break;
                }
            }
            return answer;
        }

        // Accept boolean information from the console
        public static bool AcceptBooleanInformation()
        {
            bool isValid = false;
            bool answer = false;

            while (isValid != true)
            {
                string response = Console.ReadLine();
                isValid = bool.TryParse(response, out answer);

                if (isValid != true)
                {
                    PrintMessage("Please provide a valid answer");
                }
                else
                {
                    break;
                }
            }
            return answer;
        }

        // Accept integer value information from the console
        public static int AcceptIntegerInformation()
        {
            bool isValid = false;
            int answer = 0;

            while (isValid != true)
            {
                string response = Console.ReadLine();
                isValid = int.TryParse(response, out answer);

                if (isValid != true)
                {
                    PrintMessage("Please provide a valid answer");
                }
                else
                {
                    break;
                }
            }
            return answer;
        }

        // Accept date information from the console
        public static DateTime AcceptDateInformation()
        {

            DateTime date = new DateTime();
            while (true)
            {
            string dateString = Console.ReadLine();
                if (DateTime.TryParse(dateString, out date))
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid date format. Please enter a valid date.");
                }
            }

            return date;
        }

        // Accept schedule date with a driver for a customer
        public static Schedule AcceptScheduleInformationWithDriver()
        {
            PrintMessage("Enter a pickup date (e.g., dd/MM/yyyy):");
            DateTime pickupDate = AcceptDateInformation();

            PrintMessage("Enter a dropoff date (e.g., dd/MM/yyyy):");
            DateTime dropoffDate = AcceptDateInformation();

            DriverUser driver = AcceptDriverInformation();

            Schedule schedule = new Schedule(pickupDate, dropoffDate, driver);

            return schedule;
        }

        // Accept schedule information for a customer
        public static Schedule AcceptScheduleInformation()
        {
            PrintMessage("Enter a pickup date (e.g., dd/mm/yyyy):");
            DateTime pickupDate = AcceptDateInformation();

            PrintMessage("Enter a dropoff date (e.g., dd/mm/yyyy):");
            DateTime dropoffDate = AcceptDateInformation();

            Schedule schedule = new Schedule(pickupDate, dropoffDate);

            return schedule;
        }

        // Accept driver information for a customer
        public static DriverUser AcceptDriverInformation()
        {
            PrintMessage("Provide the first name of your driver:");
            string firstName = AcceptInformation();
            PrintMessage("Provide the last name of your driver:");
            string lastName = AcceptInformation();
            PrintMessage("Enter the drivers date of birth (e.g., dd/MM/yyyy):");
            string dob = AcceptInformation();
            PrintMessage("Provide the driver's license number");
            string license = AcceptInformation();
            PrintMessage("Enter driver's address");
            string address = AcceptInformation();
            DriverUser driver = new DriverUser(firstName, lastName, dob, license, address);
            return driver;
        }

    }
}

