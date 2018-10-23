import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WelcomePageComponent} from "./welcome-page.component";

@NgModule({
  imports: [CommonModule],
  exports:[WelcomePageComponent],
  declarations:[WelcomePageComponent]
})

export  class  WelcomePageModule {

}
