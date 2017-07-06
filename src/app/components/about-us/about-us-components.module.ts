import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeskComponent} from "./desk/desk.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ArrowComponent} from "./arrow/arrow.component";
import { PersonComponent } from './person/person.component';
import {UiModule} from "../../shared/ui-elements/ui.module";
import { DoorComponent } from './door/door.component';

@NgModule({
  declarations: [
    DeskComponent,
    ArrowComponent,
    PersonComponent,
    DoorComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    DeskComponent,
    ArrowComponent,
    PersonComponent,
    DoorComponent
  ],
  providers: [],
})
export class AboutUsComponentModule {
}
