

require('@code-fellows/supergoose');

const Categorie = require('../models/categories-model.js');
const Product = require('../models/products-model.js');

describe('categorie Model', () => {
  it('can create() a new categorie item', () => {
    const categorie = new Categorie();

    let obj = { name: 'test name', display_name: 'test display', description: 'test description' };
    return categorie.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a categorie item', () => {
    const categorie = new Categorie();

    let obj = { name: 'test name', display_name: 'test display', description: 'test description' };

    return categorie.create(obj)
      .then(record => {
        return categorie.get(record._id)
          .then(item => {
            Object.keys(obj).forEach((key) => {
              expect(item[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a categorie item', () => {
    const categorie = new Categorie();

    let obj = { name: 'test name', display_name: 'test display', description: 'test description' };
    let obj2 = { name: 'test name updated', display_name: 'test display updated', description: 'test description updated' };

    return categorie.create(obj)
      .then(record => {
        return categorie.update(record._id,obj2)
          .then(item => {
            Object.keys(obj).forEach((key) => {
              expect(item[key]).toEqual(obj2[key]);
            });
          });
      });
  });

  it('can delete() a categorie item', () => {
    const categorie = new Categorie();

    let obj = { name: 'test name', display_name: 'test display', description: 'test description' };

    return categorie.create(obj)
      .then(record => {
        return categorie.delete(record._id)
          .then(item => {
            Object.keys(obj).forEach((key) => {
              expect(item[key]).toEqual(obj[key]);
            });
          });
      });
  });
});




describe('Product Model', () => {
  it('can create() a new product item', () => {
    const product = new Product();

    let obj = {category:'test category' , name: 'test name', display_name: 'test display', description: 'test description' };
    return product.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a Product item', () => {
    const product = new Product();

    let obj = {category:'test category' , name: 'test name', display_name: 'test display', description: 'test description' };

    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(item => {
            Object.keys(obj).forEach((key) => {
              expect(item[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a product item', () => {
    const product = new Product();

    let obj = {category:'test category' , name: 'test name', display_name: 'test display', description: 'test description' };
    let obj2 = {category:'test category updated' , name: 'test name updated', display_name: 'test display', description: 'test description' };

    return product.create(obj)
      .then(record => {
        return product.update(record._id,obj2)
          .then(item => {
            Object.keys(obj).forEach((key) => {
              expect(item[key]).toEqual(obj2[key]);
            });
          });
      });
  });

  it('can delete() a product item', () => {
    const product = new Product();

    let obj = {category:'test category' , name: 'test name', display_name: 'test display', description: 'test description' };

    return product.create(obj)
      .then(record => {
        return product.delete(record._id)
          .then(item => {
            Object.keys(obj).forEach((key) => {
              expect(item[key]).toEqual(obj[key]);
            });
          });
      });
  });
});