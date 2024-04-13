using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tutorial_1
{

    /**
     * Week 1 Tutorial Exercises
     * Exercise 1
     * Create an ADT - TubeStation class that represents a London tube station.
     **/
    class TubeStation : AccessStatus
    {
      
        private static int SID = 0 ;

        /** Version 1: Properties - yuk!!
         * 
        private int StationID   { get ; set ; }      // a unique ID number for the station

        private string Name     { get ; set ; }      // the station's name

        private ACCESS StationAccess { get; set; }   // the station's TubeLine
        private int TravelZone { get; set; }         // the station's name

        private STATUS StationStatus { get; set; }   // the station's TubeLine

        **/
                                                      // the tueb station's 
        private int StationID ;                       // a unique ID number
        private string Name ;                         // name
        private string TubeLine ;                     // TubeLine
        private AccessStatus.ACCESS StationAccess ;   // access method
        private int TravelZone ;                      // Travel Zone its on
        private AccessStatus.STATUS StationStatus ;   // open or closed


        public TubeStation() 
        {
            StationID     = SID++ ;
            Name          = "OxfordCircus";
            TubeLine      = "Central";
            StationAccess = AccessStatus.ACCESS.Escalator ;
            TravelZone    = 1 ;
            StationStatus = AccessStatus.STATUS.Open ;
        }

        public TubeStation( string Name, string TubeLine, 
			    AccessStatus.ACCESS StationAccess, int TravelZone, 
			    AccessStatus.STATUS StationStatus )
        {
            this.StationID     = SID++ ;
            this.Name          =  Name ;
            this.TubeLine      = TubeLine ;
            this.StationAccess = StationAccess ;
            this.TravelZone    = TravelZone ;
            this.StationStatus = StationStatus ;
        }

       
        public int setStationID( int StationID )
        {
             this.StationID = StationID ;
        }                        

        public int getStationID()
        {
            return StationID ;
        }                        

        // etc, etc.

        public string ToString()
        {
            return ("Station: [ " + 
                                StationID.ToString()        + ", " +
                                Name                        + ", " +
                                TubeLine                    + ", " +
                                StationAccess.ToString()    + ", " +
                                TravelZone.ToString()       + ", " +
                                StationStatus.ToString()    +
                            " ]"
                   ) ;
        }
    } // TubeStation

} // Tutorial_1
