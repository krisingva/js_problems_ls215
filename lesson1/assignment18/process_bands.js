/*
transform bands in array:
  - name value strings capitalized and remove .
  - country value changed to 'Candada'
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processName(name) {
  return name.replaceAll('.', '')
             .split(' ')
             .map(word => word[0].toUpperCase() + word.slice(1))
             .join(' ');
}

// Using forEach to mutate each element:
// function processBands(data) {
//   data.forEach(obj => {
//     obj.name = processName(obj.name);
//     obj.country = 'Canada';
//   });

//   return data;
// }

// Using map and return an object literal:
function processBands(data) {
  return data.map(obj => {
    return { name: processName(obj.name),
             country: 'Canada',
             active: obj.active,
    }
  });
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]