function makeClass() {
    "use strict";
    /* Alter code below this line */
    
    class Thermostat{
      constructor(farenheit){
        this.farenheit = farenheit;
      }
      get temperature(){
        return 5 / 9 * (this.farenheit - 32);
      }
      set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
      }
    }
    
    /* Alter code above this line */
    return Thermostat;
  }