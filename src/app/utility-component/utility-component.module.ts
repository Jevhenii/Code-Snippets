import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [ModalWindowComponent],
  exports: [
    ModalWindowComponent
  ]
})
export class UtilityComponentModule { }
