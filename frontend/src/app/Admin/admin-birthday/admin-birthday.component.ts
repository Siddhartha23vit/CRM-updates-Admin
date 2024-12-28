import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-birthday',
  templateUrl: './admin-birthday.component.html',
  styleUrls: ['./admin-birthday.component.css']
})
export class AdminBirthdayComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  onCopy() {
    // Implement copy functionality
  }

  exportPDF() {
    // Implement PDF export
  }

  exportWord() {
    // Implement Word export
  }

  exportExcel() {
    // Implement Excel export
  }
}
