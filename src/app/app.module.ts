import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {NgFor, NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {TaskComponent} from "./tasks/task/task.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, NgFor, NgIf, FormsModule],
})
export class AppModule {
}
