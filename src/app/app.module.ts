import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";
import {NgFor, NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {TasksModule} from "./tasks/tasks.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [SharedModule, BrowserModule, NgFor, NgIf, TasksModule],
})
export class AppModule {
}
