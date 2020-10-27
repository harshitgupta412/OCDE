import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import {NbActionsModule, NbCardModule, NbInputModule, NbLayoutModule, NbListModule, NbSidebarModule} from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { EditorComponent } from './editor/editor.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:  [EditorComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    AceEditorModule,
    NbSidebarModule,
    NbInputModule,
    FormsModule,
    NbActionsModule
  ],
  bootstrap: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }