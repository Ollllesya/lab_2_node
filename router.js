function createRouter() {
    const _routes = new Map();
  
    function addRoute(url, method, controller) {
      const key = method.toUpperCase() + url;
      _routes.set(key, controller);
    }
  
    function getRoutes() {
      return _routes;
    }
  
    return {
      addRoute,
      getRoutes,
    };
  }
  
  export const router = createRouter();