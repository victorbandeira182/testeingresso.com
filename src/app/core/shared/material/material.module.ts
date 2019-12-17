import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatSidenavModule, MatSnackBarModule,
	MatToolbarModule,
	MatCheckboxModule,
	MatSelectModule,

} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatToolbarModule,
		MatInputModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatSelectModule

	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatToolbarModule,
		MatInputModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatSelectModule
	]
})
export class MaterialModule {
}
