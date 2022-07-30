import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SercomComponent } from './sercom/sercom.component';
import { SercomsecComponent } from './sercomsec/sercomsec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareserviceService } from './shareservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamepipePipe } from './namepipe.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PipefilterComponent } from './pipefilter/pipefilter.component';
import { PipefilPipe } from './pipefil.pipe';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SercomComponent,
    SercomsecComponent,
    NamepipePipe,
    PipefilterComponent,
    PipefilPipe,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
