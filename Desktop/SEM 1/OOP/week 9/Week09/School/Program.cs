using System;

namespace School
{
    class Program
    {
        static void Main(string[] args)
        {
            Person tom = new Person("Tom", "Jones", 1950);
            tom.SetAddress("30 Hampstead Ln; London; N6 4NX");
            Console.WriteLine("Surname: " + tom.GetSurname());
            Console.WriteLine();

            Student beth = new Student("Elisabeth", "Smith", 1995, 12345, 5000.0);
            beth.SetAddress("25 Castlegate; Knaresborough; HG5 8AR");
            Console.WriteLine("Surname: " + beth.GetSurname());
            Console.WriteLine("Fee paid: " + beth.GetFee());
            Console.WriteLine();

            Teacher sam = new Teacher("Sam", "Hamilton", 1970, 30000.0, "Computer Science");
            //sam.SetAddress("59 Pier Rd; Littlehampton; BN17 5LP");
            Console.WriteLine("Surname: " + sam.GetSurname());
            Console.WriteLine("Salary: " + sam.GetSalary());
        }
    }

}