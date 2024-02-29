function task4_function() {
    let value = 0;
    return {
        increment: function() {
          value++;
        },
        getValue: function() {
          return value;
        }
      };
}

const Obj = task4_function();

Obj.increment();
Obj.increment();
console.log(Obj.getValue());
