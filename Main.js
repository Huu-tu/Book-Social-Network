const fav = [
  { actress: 'Millie', age: 16 },
  { actress: 'Kiernan Shipka', age: 19 },
  { actress: 'Emma Watson', age: 29 }
];

const result = fav.find(({ actress }) => actress === 'Millie Bobby Brown');

console.log(result)