using AddressProject;

namespace Person
{
    internal class Person
    {
        // if no access modifier is specified
        // then the attributes will be private
        string name;
        string surname;
        int yearOfBirth;
        //string address;
        Address address;

        public Person(string n, string s, int year)
        {
            name = n;
            surname = s;
            yearOfBirth = year;
            //address = "";
        }


        public string GetName()
        {
            return name;
        }


        public string GetSurname()
        {
            return surname;
        }


        public int GetYearOfBirth()
        {
            return yearOfBirth;
        }


        public void SetAddress(string addr)
        {
            //this.address = addr;
            address = new Address(addr);
        }


        public string GetAddress()
        {
            //return address;
            return address.ToString();
        }


        public void Display()
        {
            Console.WriteLine("Name: " + name);
            Console.WriteLine("Surname: " + surname);
            Console.WriteLine("Year of birth: " + yearOfBirth);
            Console.WriteLine("Address: " + address); // address.ToString() is invoked automatically
        }
    }

}
