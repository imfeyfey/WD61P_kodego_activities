var presidents = [
  {
    name: 'Bongbong Marcos',
    details: '2022-Present',
  },
  {
    name: 'Rodrigo Duterte',
    details: '2016-2012',
  },
  {
    name: 'Benigno Aquino III',
    details: '2010-2016',
  },
  {
    name: 'Gloria Macapagal Arroyo',
    details: '2001-2010',
  },
  {
    name: 'Joseph Ejercito Estrada',
    details: '1998-2001',
  },
  {
    name: 'Fidel V. Ramos',
    details: '1992-1998',
  },
  {
    name: 'Corazon Aquino',
    details: '1986-1992',
  },
  {
    name: 'Ferdinand Marcos',
    details: '1965-1986',
  },
  {
    name: 'Diosdado Macapagal',
    details: '1961-1965',
  },
];

let imageVariable = document.createElement('img');
imageVariable.setAttribute('src','logo.png');
document.querySelector('#root').appendChild(imageVariable);

for (let i=0;i<presidents.length; i++) {
  let divE = document.createElement('div');
  divE.setAttribute('class','card');
  
  let h1 =document.createElement('h1');
  divE.appendChild(h1);
  h1.textContent = presidents[i].name;

  let p =document.createElement('p');
  divE.appendChild(p);
  p.textContent = presidents[i].details;

  document.querySelector('#root').appendChild(divE);
}