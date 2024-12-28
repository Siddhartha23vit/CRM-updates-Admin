import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-fqa',
  templateUrl: './admin-fqa.component.html',
  styleUrls: ['./admin-fqa.component.css']
})
export class AdminFqaComponent implements OnInit {
  activeFaq: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? -1 : index;
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}
