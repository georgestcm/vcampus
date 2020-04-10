import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { REditorPageRoutingModule } from './r-editor-routing.module';

import { REditorPage } from './r-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    REditorPageRoutingModule
  ],
  declarations: [REditorPage]
})
export class REditorPageModule {}
