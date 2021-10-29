import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage {

  travel: any[] = [ {name: ' Parque Nacional da Serra dos Órgãos - Teresópolis', done: false},
                    {name: ' Uaná Etê Jardim Ecológico - Vassouras', done: false},
                    {name: ' Vale do Alcantilado - Visconde de Mauá', done: false},
                    {name: ' Cachoeira Rio do Ouro - Magé', done: false},
                    {name: ' Costão de Itacoatiara - Niterói', done: false},
                    {name: ' Pico da Caledônia - Nova Friburgo', done: false},
                    {name: ' Pedra do Macaco - Maricá', done: false},
                    {name: ' Alto do Gaia - São Gonçalo', done: false},
                    {name: ' Parque Estadual do Cunhambebe - Mangaratiba', done: false},
                    {name: ' Travessia Serra do Piloto x Mazomba - Mangaratiba', done: false},];

  constructor(private actionControl: ActionSheetController) { 


    this.readLocalStorage();
    
  }

  async openActions(item: any) {
    const actionSheet = await this.actionControl.create({
      header: 'O que fazer?',
      buttons: [{
          text: item.done ? 'Desmarcar' : 'Marcar',
          icon: item.done ? 'radio-button-off' : 'checkmark-circle',
          handler: () => {
            item.done = !item.done;
            this.updateLocalStorage();
          }
        },{
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Desistiu da opção');
          }
        }
      ]
    });

    actionSheet.present();
  }

  updateLocalStorage(){
    localStorage.setItem('travelDB',JSON.stringify(this.travel));
  }
  
  readLocalStorage(){
    let travelJson = localStorage.getItem('travelDB');

    if(travelJson != null){
      this.travel = JSON.parse(travelJson);
    }
  }
}
