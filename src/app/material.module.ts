import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
  } from '@angular/material';
  import {NgModule} from '@angular/core';
  
  @NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSliderModule,
      MatProgressBarModule,
      MatAutocompleteModule,
      MatInputModule,
      MatGridListModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatListModule,
      MatDialogModule,
      MatToolbarModule,
      MatSidenavModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSliderModule,
      MatProgressBarModule,
      MatAutocompleteModule,
      MatInputModule,
      MatGridListModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatListModule,
      MatDialogModule,
      MatToolbarModule,
      MatSidenavModule
    ],
  })
  
  export class MaterialModule {
  }