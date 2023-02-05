/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
export const array = [10,20,30,40];

export const heroes = [
  {
      hero : 'Batman',
      name : 'Bruce Wayne',
      company : 'DC',
  },
  {
      hero : 'Iron Man',
      name : 'Tony Stark',
      company : 'Marvel',
  },
  {
      hero : 'Spiderman',
      name : 'Peter Parker',
      company : 'Marvel',
  },
  {
      hero : 'Superman',
      name : 'Clark Kent',
      company : 'DC',
  },
];

export const user = {
  name: 'Abelardo',
  lastName: 'Ramirez',
  age: 30,
  address: {
    street: 'Cholul',
    number: 200,
    // eslint-disable-next-line prettier/prettier
    coordinates: {
      x: '10.292471947',
      y: '20.292471947',
    },
  },
};

// export const sayHiToUser = (user) => {
//   const { name, address : { street } } = user;
//   return `Hello ${name}, your street is ${street}`;
// }

export const sayHiToUser = ({ name, address : { street } }) => `Hello ${name}, your street is ${street}`;

const sayHello = () => 'Hello, nice to meet you';


export default sayHello;
