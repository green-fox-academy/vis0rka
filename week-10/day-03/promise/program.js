
/* const onRejected = (error) => {
console.log(error.message);
}; */

const first = () => {
 return Promise.reject('SECRET VALUE')
}

const second = () => {
  return first();
}

first().then()

