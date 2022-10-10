const router = require("express").Router();

const usersRoute = require("./usersApi");
const thoughtsRoute = require("./thoughtsApi");

router.use("/users", usersRoute);
router.use("/thoughts", thoughtsRoute);

module.exports = router;
