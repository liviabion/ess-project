import { Router } from 'express';

import UserRouter from './UserRoutes';
import paymentRouter from './cardPaymentRoute';

const router = Router();

router.use('/user', UserRouter);
router.use('/payment_methods', paymentRouter)

router.route('/').get((_, res) => {
  res.status(200).send('🚀 ESS Server running');
});

export default router;
