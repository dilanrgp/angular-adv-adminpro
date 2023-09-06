import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  public intervalSubs: Subscription;

  constructor() {

    // FORMA EN DESUSO
    // obs$.subscribe( 
    //   valor => console.log('Subs', valor),
    //   (error) => console.warn('Error', error),
    //   () => console.info('Obs terminado') );

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: valor => console.log('Subs', valor),
    //   error: (error) => console.warn('Error', error),
    //   complete: () => console.info('Obs terminado')
    // });

    this.intervalSubs = this.retornoIntervalo().subscribe(console.log);

  }

  ngOnDestroy(): void {

    this.intervalSubs.unsubscribe();

  }

  retornoIntervalo(): Observable<number> {
    return interval(100)
      .pipe(
        // take(10),
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
      );
  }


  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llego al valor de 2');

        }
      }, 1000);

    });

  }
}
