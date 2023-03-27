import {NgModule} from "@angular/core";
import {SynoSelectMultipleComponent} from "./syno-select-multiple/syno-select-multiple.component";
import {SynoIconButtonComponent} from "./syno-icon-button/syno-icon-button.component";
import {SynoSelectComponent} from "./syno-select/syno-select.component";
import {SynoUsernameComponent} from "./syno-username/syno-username.component";
import {SynoTagComponent} from "./syno-tag/syno-tag.component";
import {SynoButtonComponent} from "./syno-button/syno-button.component";
import {SynoEmailComponent} from "./syno-email/syno-email.component";
import {SynoPasswordComponent} from "./syno-password/syno-password.component";
import {SynoSwitchComponent} from "./syno-switch/syno-switch.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {TablerIconsModule} from "angular-tabler-icons";
import {IconChevronDown, IconChevronUp} from "angular-tabler-icons/icons";
import { SeasComponent } from './seas/seas.component';

const icons = {
  IconChevronDown,
  IconChevronUp,
};

@NgModule({
  declarations: [
    SynoButtonComponent,
    SynoEmailComponent,
    SynoPasswordComponent,
    SynoUsernameComponent,
    SynoIconButtonComponent,
    SynoSwitchComponent,
    SynoTagComponent,
    SynoSelectComponent,
    SynoSelectMultipleComponent,
    SeasComponent,
  ],
  imports: [
    FormsModule,
    NgClass,
    TablerIconsModule.pick(icons),
    NgIf,
    NgForOf,
  ],
  exports: [
    SynoButtonComponent,
    SynoEmailComponent,
    SynoPasswordComponent,
    SynoUsernameComponent,
    SynoIconButtonComponent,
    SynoSwitchComponent,
    SynoTagComponent,
    SynoSelectComponent,
    SynoSelectMultipleComponent,
    SeasComponent,
  ]
})
export class CoreUiLibModule {
}
