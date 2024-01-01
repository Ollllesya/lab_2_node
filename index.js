import { router } from './newRouter.js';
import { createHttpServer } from './http-server.js';
import { getController, postController, optionsController } from './controller.js';

const PORT = 3000;

router.addRoute('/nodeget', 'GET', getController);
router.addRoute('/nodepost', 'POST', postController);
router.addRoute('/nodeoptins', 'OPTIONS', optionsController);

createHttpServer(router.routes, PORT);