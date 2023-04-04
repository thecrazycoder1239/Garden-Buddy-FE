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
