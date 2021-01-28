import { Component, OnInit, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {

  constructor(private providerService: ProviderService, public dialogRef: MatDialogRef<ProviderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
