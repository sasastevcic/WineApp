import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { TableComponent } from './wine/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    EditWineComponent,
    PaginationComponent,
    WineListComponent,
    SearchFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
