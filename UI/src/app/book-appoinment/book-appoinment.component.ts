import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

interface Time {
  name: string;
  code: string;
}

interface Employee {
  name: string;
  code: string;
}

interface Facility {
  name: string;
  code: string;
}

@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.css']
})
export class BookAppoinmentComponent {
  
  date1: Date = new Date();

    times: Time[] | undefined;

    employes: Employee[] | undefined;

    facilities: Facility[] | undefined;

    selectedTime: Time | undefined;

    selectedEmployee: Employee | undefined;

    selectedFacility: Facility | undefined;

  

    ngOnInit() {
        this.times = [
            { name: 'Anytime', code: 'AT' },
            { name: 'Morning (10:00AM - 11:60PM)', code: 'MR' },
            { name: 'Afternoon (12:00PM - 05:60PM)', code: 'AF' },
            { name: 'Evening (06:00PM - 09:60PM)', code: 'EV' },
            
        ];

        this.employes = [
          { name: 'Anna', code: 'Anna' },
          { name: 'Jane', code: 'Jane' },
          { name: 'Kate', code: 'Kate' },
          { name: 'Eva', code: 'Eva' },
          
      ];

      this.facilities = [
        { name: 'Hair Cut', code: 'Hair Cut' },
        { name: 'Eye Brows', code: 'Eye Brows' },
        { name: 'Manicure', code: 'Manicure' },
        { name: 'Facial', code: 'Facial' },
        
    ];
    }
}
