import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ngx-pipes';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {FilmesComponent} from './core/containers/filmes/filmes.component';
import {SharedModule} from './core/shared/shared.module';


@NgModule({
  declarations: [AppComponent,
	  FilmesComponent
  ],
	imports: [BrowserModule,
		NgPipesModule,
		FormsModule,
		SharedModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
