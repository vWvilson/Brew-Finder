const express = require("express");
const router = express.Router();
const brew_controller = require("../controllers/brew.controller");

router.get('/test', brew_controller.test);
router.post('/create', brew_controller.user_create);
router.get('/:id', brew_controller.user_details);
router.put('/:id/update', brew_controller.user_update);
router.delete('/:id/delete', brew_controller.user_delete);
module.exports = router;