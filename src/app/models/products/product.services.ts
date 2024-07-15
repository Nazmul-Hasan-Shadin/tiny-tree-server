import { QueryBuilder } from "../../builder/builderQuery";
import { TProduct } from "./products.interface";
import Product from "./products.model";

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const updateProductIntoDb = async (id, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    runValidators: true,
  });
  return result;
};

const deleteProductIntoDb = async (id) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const getAllProductFromDb = async (query: Record<string, unknown>) => {
  console.log('iam query',query);
  
  const productSearchableField = ["title", "category", "description"];


  const productQuery = new QueryBuilder(Product.find(), query).search(
    productSearchableField
  ).filter().paginate();
  const result = await productQuery.modelQuery;
  return result;
};
const getSingleProductFromDbById = async (id:string) => {
  const result= await Product.findById(id)
  return result;
};


export const ProductServices = {
  createProductIntoDb,
  updateProductIntoDb,
  deleteProductIntoDb,
  getAllProductFromDb,
  getSingleProductFromDbById
};
