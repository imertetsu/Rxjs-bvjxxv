import './style.css';

import { of, map, from, filter, tap, toArray } from 'rxjs';

/*of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);
*/
// Open the console in the bottom right to see results.
const numbers: number[] = [1, 2, 3, 4, 5];

//se convierte en un Subject o Observable
// of es un operador de creacion
//of(numbers);
//from(numbers);
const numbers$ = from(numbers).pipe(
  tap((value) => console.log('value 1: ', value)),
  map((value) => value * 2),
  tap((value) => console.log('value 2: ', value)),
  map((value) => value + 1),
  //filter(value => value === 5)
  tap((value) => console.log('final value ', value))
);

/*numbers$.subscribe(value => {
  console.log(value);
});*/

//Ejemplo con Objectos
interface Apple {
  color: string;
  size: 'small' | 'medium' | 'large';
  hasLeaf: boolean;
}

const apples: Apple[] = [
  {
    color: 'red',
    size: 'small',
    hasLeaf: true,
  },
  {
    color: 'red',
    size: 'medium',
    hasLeaf: false,
  },
  {
    color: 'green',
    size: 'medium',
    hasLeaf: true,
  },
  {
    color: 'green',
    size: 'medium',
    hasLeaf: false,
  },
];

const apples$ = from(apples).pipe(
  filter((value) => value.color === 'red'),
  tap((value) => console.log('se quitaron las hojas')),
  /*map(value => {
      if(value.hasLeaf){
        value.hasLeaf = false;
      }
      return value;
    }),*/
  map((apple) => ({ ...apple, hasLeaf: false })),
  filter((apple) => apple.size === 'medium'),
  toArray()
);

apples$.subscribe((value) => console.log(value));
