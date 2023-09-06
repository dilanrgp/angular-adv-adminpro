import { Component } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent {

  ngOnInit(): void {

    // this.getUsuarios();
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    } );

    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('Hola mUndo');

    //   } else {
    //     reject('Algo salio mal')
    //   }



    // });

    // promesa.then((resp) => {
    //   console.log('Termine');
    //   console.log('Mensaje', resp);

    // }).catch( error => console.log('Error en la promesa', error));

    // console.log('Fin del init');
  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data) );
    });
    
   
    return promesa;
  }

}
