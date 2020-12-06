import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const POST = 80

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(POST, (err) => {
    if (err) console.log('error', err);
  });
