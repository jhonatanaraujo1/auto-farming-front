import {Component, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../services/TokenStorageService";
import {TaskService} from "../../services/task.service";
import {EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  step = 0;
  resultado = [

    {
      "task_title": "Conversando",
      "task_response": "Converse por 4 horas",
    },
    {
      "task_title": "Feed",
      "task_response": "Rolar o feed por 700 horas sem parar"
    },
    {
      "task_title": "Fotos",
      "task_response": "Curta fotos em um espaco de 1 minuto cada foto"
    },
    {
      "task_title": "Comentario",
      "task_response": "Comente fotos que faca sentido com seus anuncios"
    },
    {
      "task_title": "Assistindo",
      "task_response": "Assista videos"
    },
    {
      "task_title": "Assistindo",
      "task_response": "Assista lives por 900 horas sem parar"
    }
  ]
  errorMessage = '';


  constructor(private tokenStorage: TokenStorageService, private taskService: TaskService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProfileTask()
  }

  getProfileTask() {
    this.taskService.getListTask(parseInt(<string>this._route.snapshot.paramMap.get('id'))).subscribe({
      next: data => {
        this.resultado = data;
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
      }
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
