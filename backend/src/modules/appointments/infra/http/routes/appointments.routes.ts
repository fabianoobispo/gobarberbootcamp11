import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appoitmentsRoutes = Router();
const appointmentsController = new AppointmentsController();

appoitmentsRoutes.use(ensureAuthenticated);

appoitmentsRoutes.post('/', appointmentsController.create);

export default appoitmentsRoutes;
