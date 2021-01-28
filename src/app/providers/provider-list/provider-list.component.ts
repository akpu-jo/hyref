import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProvider, DialogData, SpecialistObject, ClinicObject } from '../provider';
import { ProviderService } from '../provider.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProviderDetailComponent } from '../provider-detail/provider-detail.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})

export class ProviderListComponent implements OnInit, AfterViewInit {
  element_data: IProvider[] = [];
  displayedColumns: string[] = ['providerName', 'category', 'coverageType', 'address', 'city', 'state' ];
  dataSource = new MatTableDataSource<IProvider>(this.element_data);
  errorMessage: string | undefined;

  providerName: String | undefined;
  phone: String | undefined;
  email: string | undefined;
  specialistClinic: SpecialistObject[] | undefined;
  clinicDaysAndTime: ClinicObject[] | undefined;
  specialistType: string | undefined;
  selectedSpecialist: string | undefined;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor( private providerService: ProviderService, public dialog: MatDialog) { }

  openDialog(providerName: String | undefined, email: string | undefined, phone: String | undefined, specialistClinic : SpecialistObject[], selectedSpecialist: string, clinicDaysAndTime: ClinicObject[]): void {
    this.providerName = providerName;
    this.email = email;
    this.phone = phone;
    this.specialistClinic = specialistClinic;
    this.selectedSpecialist = selectedSpecialist;
    this.clinicDaysAndTime = clinicDaysAndTime;

    const dialogRef = this.dialog.open(ProviderDetailComponent, {
      height: "500px",
      data: {providerName: this.providerName, email: this.email, phone: this.phone, specialistClinic: this.specialistClinic, selectedSpecialist: this.selectedSpecialist, clinicDaysAndTime: this.clinicDaysAndTime}
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
    this.providerService.providerList().subscribe({
      next: providers => this.dataSource.data = providers,
      error: err => this.errorMessage = err
    });
    // this.getAllProviders();
  }



  // public getAllProviders(){
  //   let resp = this.providerService.providerList();
  //   resp.subscribe(report => this.dataSource.data = report as IProvider[])
  // }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

