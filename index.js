import { router } from './router.js';
import { createHttpServer } from './http-server.js';
import { getController, postController, optionsController } from './controller.js';

const PORT = 3000;

router.addRoute('/', 'GET', getController);
router.addRoute('/example', 'POST', postController);
router.addRoute('/example', 'OPTIONS', optionsController);

createHttpServer(router.getRoutes(), PORT);