export class Repeticiones {
        constructor(arr) {
          this.arr = arr;
          return this.contar();
        }
      
        contar() {
          var nombres = [];
          this.arr.forEach((pet) => {
            nombres.push(pet.name);
          });
          let counts = {};
          nombres.forEach((el) => (counts[el] = 1 + (counts[el] || 0)));
          return counts;
        }
      }