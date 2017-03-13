import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, XHRBackend } from '@angular/http';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { CoreModule }     from './core/core.module';
import { routing }        from './app.routing';

 import  './app.rxjs-operators';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
