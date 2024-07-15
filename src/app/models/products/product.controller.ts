import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProductServices } from "./product.services";

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await ProductServices.createProductIntoDb(productData);
  console.log(result);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product added Successful",
    data: result,
  });
});

const updateroduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await ProductServices.updateProductIntoDb(
    req.params.id,
    productData
  );
  console.log(result);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product updated Successful",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProductFromDbById(req?.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "  Product fetched   Successful",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDb(req?.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "all  Product fetched   Successful",
    data: result,
  });
});

const deleteProductIntoDb = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProductIntoDb(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product deleted Successful",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  updateroduct,
  deleteProductIntoDb,
  getAllProduct,
  getSingleProduct
};
