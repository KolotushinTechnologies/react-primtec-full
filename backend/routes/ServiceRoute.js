// Import Engine Modules
const express = require("express");

// Import Controllers
const {
    createService,
    getAdminServices,
    getAllServices,
    deleteService,
    getSingleService,
} = require("../controller/ServiceController");

// Import Middlewares
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// Import Multer
const multer = require("../utils/multer");

const router = express.Router();

router.route("/services").get(getAllServices);

router
  .route("/admin/service")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminServices);

router
  .route("/service/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), multer.single("file"), createService);

router
  .route("/service/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteService)
  .get(getSingleService);

module.exports = router;
