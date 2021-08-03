import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Notification } from '../models/notification'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [PeticionesService]
})
export class HomePage implements OnInit {

  public ListStudents: any;
  public notification: Notification;

  constructor(

    private _peticionesService: PeticionesService,
    public alertController: AlertController

  ) {
    
  }

  ngOnInit(){

    this._peticionesService.getStudents().subscribe(

      

      response => {
        
        console.log(response);

        this.ListStudents = response.students;
        this.notification = response;

      },error => {

        console.log(<any>error);

      }

    );

  }

  

  onSubmit(){

    //debugger
	  
    this._peticionesService.saveNotification(this.notification).subscribe(

      response => {

        this.presentAlert();  

      },

      error => {

          console.log(<any>error);
      }

    );

  }

  async presentAlert() {

    const alert = await this.alertController.create({

      cssClass: 'my-custom-class',
      message: 'Notificación enviada',
      buttons: ['Entendido']

    });

    await alert.present();
  }

}
