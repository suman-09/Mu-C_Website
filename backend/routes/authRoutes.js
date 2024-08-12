const { Router } = require("express");
const authContoller = require("../controllers/authControllers");

const router = Router()

router.post("/registermember", authContoller.member_register);

module.exports = router;