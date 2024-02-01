const router = require('express').Router();
const userRoutes = require('./userRoutes');
const aiRoutes = require('./aiRoutes');
// const statusRoutes = require('./statusRoutes');
// const activityRoutes = require('./activityRoutes');

router.use('/users', userRoutes);
router.use('/ai', aiRoutes);
// router.use('/status', statusRoutes)
// router.use('/activity', activityRoutes);

module.exports = router
