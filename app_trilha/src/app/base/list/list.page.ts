import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private actionControl: ActionSheetController) { }

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

}
