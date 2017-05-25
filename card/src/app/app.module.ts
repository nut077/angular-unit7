import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { CounterComponent } from './counter/counter.component';
import { UnderlineDirective } from './underline.directive';
import { UnlessDirective } from './unless.directive';
import { DelayDirective } from './delay.directive';
import { RandomLoopDirective } from './random-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    NotesComponent,
    NoteComponent,
    TabsComponent,
    TabComponent,
    CounterComponent,
    UnderlineDirective,
    UnlessDirective,
    DelayDirective,
    RandomLoopDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
