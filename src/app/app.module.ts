import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { IndividualComponent } from './individual/individual.component';
import { ReplaceHyphenPipe } from './pipes/replace-hyphen.pipe';
import { TabularListComponent } from './shared-ui/tabular-list/tabular-list.component';
import { ElectricPulseComponent } from './shared-ui/electric-pulse/electric-pulse.component';
import { PaginationComponent } from './shared-ui/pagination/pagination.component';
import { ActiveLinkDirective } from './directives/active-link.directive';
import { UiControlsComponent } from './shared-ui/ui-controls/ui-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    EpisodesComponent,
    IndividualComponent,
    ReplaceHyphenPipe,
    TabularListComponent,
    ElectricPulseComponent,
    PaginationComponent,
    ActiveLinkDirective,
    UiControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
