import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AvesFormComponent } from './components/aves-form/aves-form.component';
import { AvesListComponent } from './components/aves-list/aves-list.component';

// Services
import { AvesService } from './services/aves.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AvesFormComponent,
    AvesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AvesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
