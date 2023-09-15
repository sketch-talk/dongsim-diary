import { rest } from 'msw';
import imageUrl from './imageUrl.json';

export const handlers = [
  rest.post('*/posts/contents', (_, res, ctx) => {
    const mockData = imageUrl;

    return res(ctx.delay(1000), ctx.status(200), ctx.json(mockData));
  }),

  rest.post('*/photo/save', (_, res, ctx) => {
    const mockData = imageUrl;

    return res(ctx.delay(1000), ctx.status(200), ctx.json(mockData));
  }),
];
