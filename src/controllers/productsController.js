import Product from "@/model/Product";

export async function createProduct(data) {
  const product = new Product(data);
  await product.save();
  return product;
}

export async function readProduct() {
  const products = await Product.find();
  return products;
}

export async function updateProduct(id, data) {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await Product.findByIdAndDelete(id);
  return product;
}
