export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  ranking: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: '/assets/images/iphn1.png',
    ranking: '4.0/10'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: '/assets/images/iphn2.png',
    ranking: '8.1/10'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A standart phone with one of the best cameras',
    image: '/assets/images/iphn3.png',
    ranking: '5.3/10'
  },
  
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
