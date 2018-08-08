import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSidenavModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSidenavModule
    ],
})
export class MaterialModule { }