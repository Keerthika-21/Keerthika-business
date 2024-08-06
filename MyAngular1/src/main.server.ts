import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
//import { AppServerModule } from './app/app.server.module'; // Correct path if different

@NgModule({
  imports: [
    ServerModule,
    //AppServerModule
  ],
  bootstrap: [ /* Your main server component */ ]
})
export class AppServerModule { }
