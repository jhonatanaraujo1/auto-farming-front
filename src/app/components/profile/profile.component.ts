import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {

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
