import { rest } from 'msw';
import savedImageUrl from './savedImageUrl.json';
import resultPost from './resultPost.json';

export const handlers = [
  rest.post('*/posts/save', (_, res, ctx) => {
    const mockData = savedImageUrl;

    if (Math.random() < 0.5) {
      return res(ctx.status(200), ctx.json(mockData));
    }

    return res(ctx.status(500), ctx.json({ errorMessage: 'Not Found' }));
  }),

  rest.get(`*/posts/result/:image_name`, (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(resultPost));
  }),
];
