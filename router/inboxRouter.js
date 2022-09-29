// external router
const express = require("express");
const router = express.Router();

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewears/common/decorateHtmlResponse");


// login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox)

module.exports = router;

