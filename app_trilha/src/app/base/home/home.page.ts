import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  travel: any[] = [ {name: " Parque Nacional da Serra dos Órgãos - Teresópolis", done: false, 
                      src: "../../assets/img/nacional.jpg",
                      conted:"trilha moderada, Duração: 3 horas"},
                    {name: " Uaná Etê Jardim Ecológico - Vassouras", done: false, 
                      src: "../../../assets/img/uana2.jpg"},
                    {name: " Vale do Alcantilado - Visconde de Mauá", done: false, 
                      src: "../../../assets/img/vale.jpg"},
                    {name: " Cachoeira Rio do Ouro - Magé", done: false, 
                      src: "../../../assets/img/cacho.jpg"},
                    {name: " Costão de Itacoatiara - Niterói", done: false, 
                      src: "../../../assets/img/costao.jpg"},
                    {name: " Pico da Caledônia - Nova Friburgo", done: false, 
                      src:"../../../assets/img/pico.jpg"},
                    {name: " Pedra do Macaco - Maricá", done: false, 
                      src: "../../../assets/img/pedra.jpg"},
                    {name: " Alto do Gaia - São Gonçalo", done: false, 
                      src: "../../../assets/img/gaia.jpg"},
                    {name: " Parque Estadual do Cunhambebe - Mangaratiba", done: false, 
                      src: "../../../assets/img/cunha.jpg"},
                    {name: " Travessia Serra do Piloto x Mazomba - Mangaratiba", done: false, 
                      src: "../../../assets/img/serra.jpg"},];

  constructor() { }


}
