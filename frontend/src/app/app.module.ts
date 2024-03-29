import { ProblemComponent } from './dashboard/problem/problem.component';
import { CompetingComponent } from './dashboard/competing/competing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSelectModule, NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbListModule, NbSidebarModule, NbIconModule, NbTreeGridModule, NbInputModule, NbMenuModule, NbDialogModule, NbCheckboxModule, NbContextMenuModule, NbToastrModule, NbAlertModule, NbTabsetModule, NbActionsModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FsIconComponent, MainComponent } from './dashboard/main/main.component';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { FilelistComponent } from './filelist/filelist.component';
import { CodefetchService } from './codefetch.service';
import { CodeService } from './code-compile-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { ThemeModule } from './@theme/theme.module';
import { NewfiledialogComponent } from './newfiledialog/newfiledialog.component';
import { ShContextMenuModule } from 'ng2-right-click-menu'
import { ConfirmDialog } from './confirmdialog/confirmdialog.component';
import { RenamefileDialog } from './renamefiledialog/renamefiledialog.component';
import { KatexModule } from 'ng-katex';
import { SubmissiontableComponent } from './submissiontable/submissiontable.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProblemlistComponent } from './problemlist/problemlist.component';
import { ContestlistComponent } from './contestlist/contestlist.component';
import { CountdownModule } from 'ngx-countdown';
import { ContestsComponent } from './dashboard/contests/contests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MainComponent,
    CompetingComponent,
    ProblemComponent,
    FsIconComponent,
    FilelistComponent,
    NewfiledialogComponent,
    ConfirmDialog,
    RenamefileDialog,
    SubmissiontableComponent,
    LeaderboardComponent,
    ProblemlistComponent,
    ContestsComponent,
    ContestlistComponent
  ],
  imports: [
    // ParticlesModule,
    BrowserModule,
    AppRoutingModule,
    NbTabsetModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbDialogModule.forRoot(),
    NbCheckboxModule,
    NbLayoutModule,
    NbEvaIconsModule,
    CountdownModule ,
    KatexModule,
    HttpClientModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
        NbAlertModule,
    NbContextMenuModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbSelectModule,
    NbTreeGridModule,
    NbActionsModule,
    ShContextMenuModule,
    NbInputModule,
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',

          alwaysFail: true,
          delay: 1000,
        }),
      ],
    }),
  ],
  providers: [
    CodefetchService,
    CodeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
