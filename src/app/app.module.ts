import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppMaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarchComponent } from './march/march.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';

@NgModule({
  declarations: [
    AppComponent,
    MarchComponent,
    AprilComponent,
    MayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    PdfViewerModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
