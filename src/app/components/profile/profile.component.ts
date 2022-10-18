import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  step = 0;
  constructor() { }
  resultado = [
    [{"task_create_talk": "Converse por 4 horas"}],
    [{"task_roll_feed": "Rolar o feed por 700 horas sem parar"}],
    [{"task_like_picutres": "Curta fotos em um espaco de 1 minuto cada foto"}],
    [{"task_comment_picture": "Comente fotos que faca sentido com seus anuncios"}],
    [{"task_watch_movies": "Assista videos"}],
    [{"task_watch lives": "Assista lives por 900 horas sem parar"}],
  ]
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
