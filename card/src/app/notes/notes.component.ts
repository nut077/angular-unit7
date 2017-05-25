import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements AfterContentInit {
  @ContentChildren(NoteComponent) notes: QueryList<NoteComponent>;
  ngAfterContentInit(): void {
    const publicnote = this.notes.filter(note => !note.published);
    console.log(publicnote);
  }

}
