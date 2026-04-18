const express = require("express");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

const router = express.Router({ mergeParams: true });


// Reviews
// Post / Create Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


// Reviews
// Delete Review Route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;

