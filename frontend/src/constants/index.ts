export const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:4000'
    : 'https://dongsim.site';
