namespace AddressProject
{
    public class Address // it is public so it can be accessed from other assemblies
    {
        private int number;
        private string street;
        private string city;
        private string postcode;

        public Address(string address)
        {
            string[] tokens = address.Split(";");
            string firstLine = tokens[0];

            string[] firstLineTokens = firstLine.Split(" ");
            number = Convert.ToInt32(firstLineTokens[0]);
            street = firstLineTokens[1];

            city = tokens[1];
            postcode = tokens[2];

            // checks isValid and raise an error in case

        }

        // should check whether it is a valid address
        // always returns true for now
        private bool IsValid()
        {
            return true;
        }

        public override string ToString()
        {
            return $"Number: {number}, Street: {street}, City: {city}, Postcode: {postcode}\n";
        }

    }

}
