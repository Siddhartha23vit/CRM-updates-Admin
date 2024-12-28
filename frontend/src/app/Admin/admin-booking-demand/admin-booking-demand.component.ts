import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-booking-demand',
  templateUrl: './admin-booking-demand.component.html',
  styleUrls: ['./admin-booking-demand.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AdminBookingDemandComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
