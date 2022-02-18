import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<joke>();
  constructor() { }

  ngOnInit(): void {
  }

  createJoke(){
    this.jokeCreated.emit(new joke('A Setup', 'A Punchline') );
  }

}
