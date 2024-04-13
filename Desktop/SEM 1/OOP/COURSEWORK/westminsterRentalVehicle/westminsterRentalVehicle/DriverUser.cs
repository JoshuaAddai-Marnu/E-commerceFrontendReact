using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace westminsterRentalVehicle
{
    public class DriverUser
    {
      

        private string firstName; 
        private string lastName;
        private string dateOfBirth; 
        private string licenseNumber; 
        private string address; 

       //Constructors
        public  DriverUser(string firstName, string lastName, string DoB, string licenseNumber, string address)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            dateOfBirth = DoB;
            this.licenseNumber = licenseNumber;
            this.address = address;
        }

        
        // method to display driver information
        public void displayDriverUserInfo()
        {
            Console.WriteLine($"Driver name is{firstName + lastName},\nDate of birth: {dateOfBirth},\nLincense number: {licenseNumber}\nAddress is {address} ");
        }

    }
}
