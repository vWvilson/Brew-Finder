const express = require("express");
const router = express.Router();
const brew_controller = require("../controllers/brew.controller");

router.get('/list', brew_controller.list);
router.get('/test', brew_controller.test);
router.post('/create', brew_controller.brew_create);
router.get('/:id', brew_controller.brew_details);
router.put('/:id/update', brew_controller.brew_update);
router.delete('/:id/delete', brew_controller.brew_delete);
module.exports = router;
