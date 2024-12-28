import { Component, OnInit } from '@angular/core';

interface Payment {
  customerName: string;
  date: Date;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
}

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {
  totalPayments: number = 0;
  pendingPayments: number = 0;
  payments: Payment[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize with sample data - replace with actual API calls
    this.totalPayments = 150000;
    this.pendingPayments = 25000;
    
    this.payments = [
      {
        customerName: 'John Doe',
        date: new Date(),
        amount: 25000,
        status: 'pending'
      },
      {
        customerName: 'Jane Smith',
        date: new Date(),
        amount: 35000,
        status: 'completed'
      }
    ];
  }
}
