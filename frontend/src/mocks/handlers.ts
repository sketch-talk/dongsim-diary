import { rest } from 'msw';
import imageUrl from './imageUrl.json';

export const handlers = [
  rest.post('*/post/contents', (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(201));
  }),

  rest.get('*/post/imageUrl', (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(imageUrl));
  }),
];
