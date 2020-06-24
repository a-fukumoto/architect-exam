'use strict';
const postsHandler = require('./posts-handler');

// こっちはURLに対しての処理
function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      // TODO ログアウト処理
      break;
    default:
      break;
  }
}

module.exports = {
  route
};