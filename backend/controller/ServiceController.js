const Service = require("../models/ServiceModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");

// create Service --Admin
exports.createService = catchAsyncErrors(async (req, res, next) => {
    const { file } = req;
  
    console.log(req.body);
    
    const service = await Service.create({
      image: `${req.protocol}://${req.headers.host}/uploads/${file.path.split("\\").pop()}`,
      user: req.user.id,
      ...req.body
    });
  
    res.status(201).json({
      success: true,
      service,
    });
});

// Get All Service (Admin)
exports.getAdminServices = catchAsyncErrors(async (req, res, next) => {
    const products = await Service.find();
  
    res.status(200).json({
      success: true,
      products,
    });
});

// get All Service
exports.getAllServices = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 8;
  
    const servicesCount = await Service.countDocuments();
  
    const feature = new Features(Service.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const services = await feature.query;
    res.status(200).json({
      success: true,
      services,
      servicesCount,
      resultPerPage,
    });
});

// delete Sservice
exports.deleteService = catchAsyncErrors(async (req, res, next) => {
    const service = await Service.findById(req.params.id);
  
    if (!service) {
      return next(new ErrorHandler("Service is not found with this id", 404));
    }
  
    
    //   const result = await cloudinary.v2.uploader.destroy(
    //     service.image
    //   );
    
  
    await service.remove();
  
    res.status(200).json({
      success: true,
      message: "Service deleted succesfully",
    });
});

// single Product details
exports.getSingleService = catchAsyncErrors(async (req, res, next) => {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return next(new ErrorHandler("Service is not found with this id", 404));
    }

    res.status(200).json({
      success: true,
      service,
    });
});
