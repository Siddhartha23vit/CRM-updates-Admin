import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Plot {
  plotNo: string;
  area: number;
  price: number;
  status: string;
  _id: string;
}

@Component({
  selector: 'app-admin-plot-list',
  templateUrl: './admin-plot-list.component.html',
  styleUrls: ['./admin-plot-list.component.css']
})
export class AdminPlotListComponent implements OnInit {
  projects: any[] = [];
  plots: Plot[] = [];
  selectedProject: any;
  plotInputs: any[] = [];
  FacingSide: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProjectList();
    this.getFacing();
    this.getPlots();
  }

  getFacing() {
    this.http.get<any>('http://127.0.0.1:5001/api/masters/facing/get')
      .subscribe(
        response => {
          if (response.success && Array.isArray(response.data)) {
            this.FacingSide = response.data;
          } else {
            console.error('Invalid response format:', response);
          }
        },
        error => {
          console.error('Error fetching facing data:', error);
        }
      );
  }

  getProjectList() {
    this.http.get<any>('http://127.0.0.1:5001/api/projectList/get-all-projectlist')
      .subscribe(
        data => {
          this.projects = data.projects;
        },
        error => {
          console.error('Error fetching project list:', error);
        }
      );
  }

  onProjectSelected() {
    if (this.selectedProject) {
      this.plotInputs = this.selectedProject.plotList.slice(-this.selectedProject.totalPlot) || [];
      this.initializePlotInputs(this.selectedProject.totalPlot);
    }
  }
  initializePlotInputs(totalPlots: number) {
    if (this.plotInputs.length < totalPlots) {
      const remainingPlots = totalPlots - this.plotInputs.length;
      const startingIndex = this.plotInputs.length + 1; // Start from the next plot number
      for (let i = 0; i < remainingPlots; i++) {
        this.plotInputs.push({
          plotName: `Plot ${startingIndex + i}`,
          plotWidth: '00',
          plotDepth: '00',
          totalSize: '00',
          facing: '',
          price: '00',
          plcCharge: '00',
          amount: '00',
          guideLineValue: '00',
          inventoryType: '',
          status: '',
          remark: '',
        });
      }
    }
  }
  
  addPlotList() {
    const plotInputs = {
      projectId: this.selectedProject._id,
      plotData: this.plotInputs
    };

    this.http.post<any>('http://127.0.0.1:5001/api/projectList/create-plotlist', plotInputs)
      .subscribe(
        response => {
          console.log('Data posted successfully:', response);
          this.onProjectSelected(); // Refresh the plot list
        },
        error => {
          console.error('Error posting data:', error);
        }
      );
  }

  getAvailablePlots(): number {
    if (!this.plotInputs) return 0;
    return this.plotInputs.filter(plot => plot.status === 'Available').length;
  }

  getUnderConstructionPlots(): number {
    if (!this.plotInputs) return 0;
    return this.plotInputs.filter(plot => plot.status === 'UnderConstruction').length;
  }

  getBookedPlots(): number {
    if (!this.plotInputs) return 0;
    return this.plotInputs.filter(plot => plot.status === 'Booked').length;
  }

  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'available':
        return 'status-badge status-available';
      case 'sold':
        return 'status-badge status-sold';
      case 'reserved':
        return 'status-badge status-reserved';
      default:
        return 'status-badge';
    }
  }

  openAddDialog(): void {
    console.log('Opening add dialog');
  }

  editPlot(plot: Plot): void {
    console.log('Editing plot:', plot);
  }

  viewDetails(plot: Plot): void {
    console.log('Viewing details:', plot);
  }

  deletePlot(plot: Plot): void {
    console.log('Deleting plot:', plot);
  }

  getPlots(): void {
    this.http.get<any>('http://127.0.0.1:5001/api/plots')
      .subscribe(
        response => {
          this.plots = response.plots;
        },
        error => {
          console.error('Error fetching plots:', error);
        }
      );
  }
}
