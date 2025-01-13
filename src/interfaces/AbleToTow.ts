
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";
import Wheel from "../classes/Wheel.js";


interface AbleToTow {
   
    towingCapacity: number;
    tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;
