import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from '../../models/board.model';
import {Column} from '../../models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'plan my holiday trip ',
      'draw a picture',
      'create an awesome application'
    ]),
    new Column('Research', [
      'search beautiful places',
      'appreciate the painting',
      'learn about Angular'
    ]),
    new Column('Todo', [
      'go to the museum',
      'write a thank you letter',
      'go to my favorite cafe',
      'drink my favorite herb tea',
      'take a walk'
    ]),
    new Column('Done', [
      'stretch for about ten minutes',
      'brush teeth',
      'check Line',
      'walk dog'
    ])
  ]);

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];
  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  constructor() {
  }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
