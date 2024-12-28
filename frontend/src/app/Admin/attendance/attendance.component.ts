import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType } from 'docx';
interface Markattendance {
  _id: string; // Updated to match the provided data structure
  Date:string,
  Name:string,
  status:string,
  Project:string,
  Remark:string,
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent  {

  markattendance: any[] = [];
  paginatedattendance: Markattendance[] = [];
  itemsPerPage: number | string = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0;

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.getattendance();
  }
  copyProjects() {
    const attendanceDetails = this.markattendance.map(attendance => {
      return `
        Date: ${attendance.Date}
        Name: ${attendance.Name}
        Status: ${attendance.status}
        Project	: ${attendance.Project}
        Remark	: ${attendance.Remark}
      `;
    }).join('\n\n');

    const textarea = document.createElement('textarea');
    textarea.value = attendanceDetails;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Attendance details copied to clipboard!');
  }

  generatePDF() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
  
    const columns = [
      { title: 'Date', dataKey: 'Date' },
      { title: 'Name', dataKey: 'Name' },
      { title: 'Status', dataKey: 'Status' },
      { title: 'Project', dataKey: 'Project' },
      { title: 'Remark', dataKey: 'Remark' },
    ];
  
    const rows = this.markattendance.map(attendance => {
  
      return {
        Date: attendance.Date,
        Name: attendance.Name,
        Status: attendance.status,
        Project: attendance.Project,
        Remark: attendance.Remark,
      };
    });
  
    autoTable(doc, {
      head: [columns.map(col => col.title)],
      body: rows.map(row => columns.map(col => row[col.dataKey as keyof typeof row])),
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: 'linebreak',
        halign: 'left',
        valign: 'middle'
      },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 50 },
        2: { cellWidth: 50 },
        3: { cellWidth: 30 },
        4: { cellWidth: 30 },
        5: { cellWidth: 30 },
        6: { cellWidth: 40 },
        7: { cellWidth: 30 }
      },
      margin: { top: 20 },
      didDrawPage: (data) => {
        doc.setFontSize(14);
        doc.text('Attendance Report', pageWidth / 2, 10, { align: 'center' });
      }
    });
  
    doc.save('Attendance List.pdf');
  }
  downloadWordFile() {
    const rows = this.markattendance.map(attendance => new TableRow({
      children: [
        new TableCell({ children: [new Paragraph({ text: attendance.Date, alignment: AlignmentType.CENTER })] }),
        new TableCell({ children: [new Paragraph({ text: attendance.Name, alignment: AlignmentType.CENTER })] }),
        new TableCell({ children: [new Paragraph({ text: attendance.status, alignment: AlignmentType.CENTER })] }),
        new TableCell({ children: [new Paragraph({ text: attendance.Project, alignment: AlignmentType.CENTER })] }),
        new TableCell({ children: [new Paragraph({ text: attendance.Remark, alignment: AlignmentType.CENTER })] })
       
      ],
    }));

    const table = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph({ text: "Date", alignment: AlignmentType.CENTER })] }),
            new TableCell({ children: [new Paragraph({ text: "Name", alignment: AlignmentType.CENTER })] }),
            new TableCell({ children: [new Paragraph({ text: "Status", alignment: AlignmentType.CENTER })] }),
            new TableCell({ children: [new Paragraph({ text: "Project", alignment: AlignmentType.CENTER })] }),
            new TableCell({ children: [new Paragraph({ text: "Remark", alignment: AlignmentType.CENTER })] }),
          ],
        }),
        ...rows
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
    });

    const doc = new Document({
      sections: [{
        children: [table],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'AttendanceList.docx');
    });
  }

  generateExcelFile() {
    const worksheetData = this.markattendance.map(attendance => ({
      'Date': attendance.Date,
      'Name': attendance.Name,
      'Status': attendance.status,
      'Project'	: attendance.Project,
     'Remark'	: attendance.Remark,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');

    XLSX.writeFile(workbook, 'AttendanceList.xlsx');
  }

  
  onItemsPerPageChange(): void {
    if (this.itemsPerPage === 'all') {
      this.itemsPerPage = this.markattendance.length;
    } else {
      this.itemsPerPage = Number(this.itemsPerPage);
    }
    this.changePage(1); // Reset to the first page
  }

  paginateattendance(): void {
    const startIndex = (this.currentPage - 1) * Number(this.itemsPerPage);
    const endIndex = startIndex + Number(this.itemsPerPage);
    this.paginatedattendance = this.markattendance.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.markattendance.length / Number(this.itemsPerPage));
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginateattendance();
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }


  getattendance() {
    this.http.get<any>('http://127.0.0.1:5001/api/markattendance/get-markattendance')
      .subscribe(
        data => {
          this.markattendance = data;
          this.paginateattendance();
        },
        error => {
          console.error('Error fetching attendance:', error);
        }
      );
  }
  deleteattendance(id: string) {
    if (confirm('Are you sure you want to delete this Attendance?')) {
      this.http.get(`http://127.0.0.1:5001/api/markattendance/delete-markattendance?id=${id}`)
        .subscribe(
          () => {
            this.markattendance = this.markattendance.filter(record => record._id !== id);
            this.paginateattendance(); // Re-paginate after deletion
          },
          error => {
            console.error('Error deleting Attendance:', error);
          }
        );
    }
  }

}
