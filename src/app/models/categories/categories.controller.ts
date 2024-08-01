import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CategoriesServices } from "./categories.services";

const createCategories = catchAsync(async (req, res) => {
  const result = await CategoriesServices.createCategoriesIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,

    message: "Category is created succesfull",
    data: result,
  });
});

const getAllCategories = catchAsync(async (req, res) => {
  const categoryId = req.params.categoryId;
  const result = await CategoriesServices.getAllCategoriesFromDb(categoryId);
  sendResponse(res, {
    success: true,
    statusCode: 200,

    message: "Category is Fetched succesfully",
    data: result,
  });
});

const updateCategories = catchAsync(async (req, res) => {
  const categoryId = req.params.id;
  console.log(req.body,'iam inside req.body');

  const result = await CategoriesServices.updateCategoriesIntoDb(
    categoryId,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,

    message: "Category is updated succesfully",
    data: result,
  });
});

const deleteCategories = catchAsync(async (req, res) => {
  const categoryId = req.params.id

  const result = await CategoriesServices.deleteCategoriesFromDb(categoryId);
  sendResponse(res, {
    success: true,
    statusCode: 200,

    message: "Category is Deleted succesfully",
    data: result,
  });
});

export const CategoriesController = {
  createCategories,
  updateCategories,
  deleteCategories,
  getAllCategories,
};
