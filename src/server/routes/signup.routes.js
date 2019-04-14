const express = require("express");
const router = express.Router();
const signup_controller = require("../controllers/signup.controller");

router.get('/test', signup_controller.test);
router.post('/create', signup_controller.user_create);
router.get('/:id', signup_controller.user_details);
router.put('/:id/update', signup_controller.user_update);
router.delete('/:id/delete', signup_controller.user_delete);
module.exports = router;