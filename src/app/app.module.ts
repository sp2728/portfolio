import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule, MatBottomSheetRef, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatSnackBarModule, MatTooltipModule, MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA } from '@angular/material';
import { BlogsComponent } from './blogs/blogs.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SlideFromLeftDirective } from './directives/slide-from-left.directive';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    TechnologiesComponent,
    BlogsComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    HeaderComponent,
    SlideFromLeftDirective,
    SplashScreenComponent,
    ProjectInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatTooltipModule
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ProjectInfoComponent
  ]
})
export class AppModule { }
