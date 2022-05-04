import Product from "./product";

describe("Product unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Produtc", 10);
    }).toThrowError("product: Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      const product = new Product("123", "", 10);
    }).toThrowError("product: Name is required");
  });

  it("Should throw error when id and name are empty", () => {
    expect(() => {
      const product = new Product("", "", 10);
    }).toThrowError("product: Id is required,product: Name is required");
  });

  it("Should throw error when price is less than 0", () => {
    expect(() => {
      const product = new Product("123", "Product", -1);
    }).toThrowError("product: Price must be greater than zero");
  });

  it("Should change name of product", () => {
    const product = new Product("123", "Product", 10);
    product.changeName("Product 2");
    expect(product.name).toBe('Product 2');
  });

  it("Should change price of product", () => {
    const product = new Product("123", "Product", 10);
    product.changePrice(23);
    expect(product.price).toBe(23);
  });
});