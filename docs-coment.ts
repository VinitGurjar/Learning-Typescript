//Documentstion comment
/**
 * Creates a fruit salad by combining two types of fruits.
 *
 * @param fruit1 - The first type of fruit to be used in the salad.
 * @param fruit2 - The second type of fruit to be used in the salad.
 *
 * @returns {void} - This function does not return anything.
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  console.log(salad);
}


/**
 * Proclaims a given status a certain number of times.
 *
 * @param status - The status to be proclaimed. Defaults to 'not ready...' if not provided.
 * @param repeat - The number of times the status should be proclaimed. Defaults to 1 if not provided.
 *
 * @returns {void} - This function does not return anything.
 */

function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
