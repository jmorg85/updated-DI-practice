import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CallGithubAPI } from '../services/CallGithub';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Response } from '../models/Response';

@Component({
  imports: [RouterOutlet, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  githubService = inject(CallGithubAPI);
  results$: Observable<Response[]>;

  constructor() {
    this.results$ = this.githubService.GetAll();
  }
}
