import myRequest from '..';

export function getHomeHighScoreData() {
  return myRequest.get({
    url: '/home/highscore'
  });
}

export function getHomeGoodPriceData() {
  return myRequest.get({
    url: '/home/goodprice'
  });
}

export function getHomeDiscountData() {
  return myRequest.get({
    url: '/home/discount'
  });
}

export function getHomeHotRecommendData() {
  return myRequest.get({
    url: '/home/hotrecommenddest'
  });
}

export function getHomePlusData() {
  return myRequest.get({
    url: '/home/plus'
  });
}

export function getHomeLongforData() {
  return myRequest.get({
    url: '/home/longfor'
  });
}
