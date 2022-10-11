import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from "./service/login.service";
import { TokenStorageService } from 'src/app/services/TokenStorageService';

declare let particlesJS: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router,
              private AuthService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.invokeParticles()
  }

  public invokeParticles(): void {
    particlesJS('particles-js', this.ParticlesConfig, function() {});
  }

  onSubmit(): void {

    const { email, password } = this.loginForm.value;

    this.AuthService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  ParticlesConfig = {
    "particles": {
        "number": {
            "value": 192,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

//   ParticlesConfig = {
//     particles: {
//       number: {
//         value: 192,
//       },
//       color: {
//         value: '#283593'
//       },
//       shape: {
//         type: 'polygon',
//         stroke: {
//           width: 1,
//           color: '#283593'
//         },
//         polygon: {
//           nb_sides: 6
//         }
//       },
//       opacity: {
//         value: 1,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 0.8,
//           opacity_min: 0.25,
//           sync: true
//         }
//       },
//       size: {
//         value: 2,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 10,
//           size_min: 1.25,
//           sync: true
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: '#283593',
//         opacity: 1,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 8,
//         direction: 'none',
//         random: true,
//         straight: false,
//         out_mode: 'out',
//         bounce: true,
//         attract: {
//           enable: true,
//           rotateX: 2000,
//           rotateY: 2000
//         }
//       }
//     },
//     retina_detect: true
//  }
}
