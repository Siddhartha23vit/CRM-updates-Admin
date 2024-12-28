import { Component, OnInit } from '@angular/core';

interface SiteVisit {
  projectName: string;
  date: Date;
  location: string;
  status: string;
}

@Component({
  selector: 'app-adminsitevisit',
  templateUrl: './adminsitevisit.component.html',
  styleUrls: ['./adminsitevisit.component.css']
})
export class AdminsitevisitComponent implements OnInit {
  siteVisits: SiteVisit[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize with sample data - replace with actual API calls
    this.siteVisits = [
      {
        projectName: 'Green Valley Apartments',
        date: new Date(),
        location: 'Mumbai, Maharashtra',
        status: 'Scheduled'
      },
      {
        projectName: 'Sunset Heights',
        date: new Date(),
        location: 'Pune, Maharashtra',
        status: 'Completed'
      }
    ];
  }
}
