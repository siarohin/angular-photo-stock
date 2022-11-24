import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppStoreModule} from './core';
import {SharedModule, SpinnerModule} from './modules';
import {InterceptorsModule} from "./core/interceptors";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    InterceptorsModule,
    SharedModule,
    SpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
