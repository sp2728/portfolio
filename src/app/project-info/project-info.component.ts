import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../models/data.model';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  data:Project;

  isBottomSheet:boolean= false;
  isDialog:boolean = false;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public bottomSheetData:any,  
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private sheet: MatBottomSheetRef<ProjectInfoComponent>
    ) { }

  ngOnInit() {
    if(!!Object.keys(this.bottomSheetData).length){
      this.data = this.bottomSheetData.project;
      this.isBottomSheet = true;
    }
    else if(!!Object.keys(this.dialogData).length){
      this.data = this.dialogData.project;
      this.isDialog = true;
    }
  }

}
