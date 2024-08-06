import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { HttpClientModule } from '@angular/common/http'; // For HTTP communication
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentService } from './student.service';// Assuming you have a service for handling student data

@NgModule({
  declarations: [
    AppComponent
    // Add other components here if needed
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]) // Configure routes here if you have any
  ],
  providers: [
    StudentService // Provide the student service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
