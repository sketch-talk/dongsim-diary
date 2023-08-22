export const fetchAPI = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`${response.status} 에러`);
  }

  return response.json();
};
