import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudenthttpServiceService } from './studenthttp-service.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule }   from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudenthttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor()
  {
    console.log("module.ts constructor");
  }
  ngOnInit():void {
    console.log("module.ts ngoninit");
  } 

}
