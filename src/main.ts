import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import {NgModuleRef} from "@angular/core";


platformBrowserDynamic().bootstrapModule(AppModule).then((module: NgModuleRef<AppModule>) =>
  console.log(module)
);
