import { NgModule } from '@angular/core';
import { 
   MatToolbarModule,
   MatButtonModule,
   MatInputModule,
   MatIconModule,
   MatCardModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatProgressSpinnerModule,
   MatChipsModule

  } from '@angular/material';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [ MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatListModule,MatChipsModule  ],
  exports: [ MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatListModule,MatChipsModule ]
})

export class MaterialModule {}