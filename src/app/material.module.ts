import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSidenavModule,
      MatAutocompleteModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSidenavModule,
      MatAutocompleteModule
    ],
})
export class MaterialModule { }