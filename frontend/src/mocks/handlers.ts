import { rest } from 'msw';

export const handlers = [
  rest.post('/post/contents', (_, res, ctx) => {
    return res(ctx.status(201));
  }),
];
