import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { IndividualComponent } from './components/individual/individual.component';
import { ElectricPulseComponent } from './shared-ui/electric-pulse/electric-pulse.component';
import { PaginationComponent } from './shared-ui/pagination/pagination.component';
import { TabularListComponent } from './shared-ui/tabular-list/tabular-list.component';
import { UiControlsComponent } from './shared-ui/ui-controls/ui-controls.component';
import { ActiveLinkDirective } from './directives/active-link.directive';
import { ReplaceHyphenPipe } from './pipes/replace-hyphen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActiveLinkDirective,
    CharactersComponent,
    ElectricPulseComponent,
    EpisodesComponent,
    IndividualComponent,
    PaginationComponent,
    ReplaceHyphenPipe,
    TabularListComponent,
    UiControlsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
