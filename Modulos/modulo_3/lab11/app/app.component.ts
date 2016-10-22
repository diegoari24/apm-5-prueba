import { Component } from '@angular/core';

 export class Ride {
 	airport: number;
    app: number;
 	units: number;
 	festive: number;
 	default: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html'
})
export class AppComponent {

	title: string = "calculadora";
	selected: Ride;
	//rides: Ride[] = RIDES;
	onSelect(ride: Ride) {
		this.selected = ride;
	}

     airport: number = 3900;
     app: number = 700;
     units: number = 50;
     festive: number = 1900;
     default: number = 4100;
}


/*
const RIDES: Ride[] = [
    {
        airport: 3900
    },
    {
        app: 700 
    },
    {
        units: 50
    },
    {
       festive: 1900
    },
    {
        default: 4100
    },
];
*/

