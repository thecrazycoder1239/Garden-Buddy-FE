import { Strategy, StrategyHandler } from "workbox-strategies";

export class StaleWhileRevalidatePosts extends Strategy {
  _handle(request: Request, handler: StrategyHandler) {
    const fetchAndPutInCache = handler
      .fetch(request)
      .then((response) => {
        return Promise.all([
          response,
          handler.cachePut(request.url, response.clone()),
        ]);
      })
      .then(([response]) => response);

    return handler.cacheMatch(request.url).then((response) => {
      return response || fetchAndPutInCache;
    });
  }
}

export class CacheFirstPosts extends Strategy {
  _handle(request: Request, handler: StrategyHandler) {
    const startOfQuery = request.url.indexOf('?')

    const cacheKey = request.url.slice(0, startOfQuery);

    return handler.cacheMatch(cacheKey)
      .then((response) => {
        if (response) {
          return response
        }

        return handler.fetch(request)
          .then((response) => {
            handler.waitUntil(handler.cachePut(cacheKey, response.clone()))

            return response;
          })

      })
  }
}