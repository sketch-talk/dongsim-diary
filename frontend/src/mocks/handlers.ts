import { rest } from 'msw';
import savedImageUrl from './savedImageUrl.json';
import resultPost from './resultPost.json';

export const handlers = [
  rest.post('*/posts/save', (_, res, ctx) => {
    const mockData = savedImageUrl;

    return res(ctx.delay(1000), ctx.status(200), ctx.json(mockData));
  }),

  rest.get(`*/posts/result/:image_name`, (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(resultPost));
  }),
];
