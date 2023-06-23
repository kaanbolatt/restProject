import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { MatGridListModule } from '@angular/material/grid-list';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { RestangularModule } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { baseURL } from './shared/baseurl';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    CartComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MatGridListModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
