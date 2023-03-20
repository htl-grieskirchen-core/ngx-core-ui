import { NgModule } from '@angular/core';
import { CoreUiLibComponent } from './core-ui-lib.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    CoreUiLibComponent,
    TestComponent
  ],
  imports: [
  ],
  exports: [
    CoreUiLibComponent
  ]
})
export class CoreUiLibModule { }
