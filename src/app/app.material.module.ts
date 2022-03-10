import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle' ;
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
// since we're exporting these modules, add them to export
    exports: [
        MatTableModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatListModule,
        MatRadioModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatTooltipModule
       
    ]
})
export class AppMaterialModule {}