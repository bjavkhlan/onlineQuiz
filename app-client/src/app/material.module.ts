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
   MatProgressSpinnerModule
  } from '@angular/material';


@NgModule({
  imports: [ MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule  ],
  exports: [ MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule ]
})

export class MaterialModule {}