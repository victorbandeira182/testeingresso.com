import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';

@NgModule({
	declarations: [],
	imports: [
		FlexLayoutModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule
	], exports: [
		FlexLayoutModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class SharedModule {
}
