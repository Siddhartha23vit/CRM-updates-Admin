import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ProjectDemand {
  _id?: string;
  projectName: string;
  flatType: string;
  demand: number;
  status: string;
}

@Component({
  selector: 'app-admin-project-demand',
  templateUrl: './admin-project-demand.component.html',
  styleUrls: ['./admin-project-demand.component.css']
})
export class AdminProjectDemandComponent implements OnInit {
  projectDemand: ProjectDemand = {
    projectName: '',
    flatType: '',
    demand: 0,
    status: ''
  };

  projectDemands: ProjectDemand[] = [];
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadProjectDemands();
  }

  loadProjectDemands(): void {
    // TODO: Implement API call to load project demands
    this.projectDemands = [];
  }

  onSubmit(): void {
    if (this.projectDemand._id) {
      // TODO: Implement update logic
      console.log('Updating project demand:', this.projectDemand);
    } else {
      // TODO: Implement create logic
      console.log('Creating new project demand:', this.projectDemand);
    }
  }

  resetForm(): void {
    this.projectDemand = {
      projectName: '',
      flatType: '',
      demand: 0,
      status: ''
    };
  }

  editProjectDemand(demand: ProjectDemand): void {
    this.projectDemand = { ...demand };
  }

  deleteProjectDemand(id: string): void {
    // TODO: Implement delete logic
    console.log('Deleting project demand with ID:', id);
  }
}