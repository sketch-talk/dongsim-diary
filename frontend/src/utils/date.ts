export const parsedDate = (date: string | undefined) => {
  const computeDateDetails = (date: Date) => {
    const getYear = date.getFullYear();
    const getMonth = date.getMonth() + 1;
    const getDate = date.getDate();
    const getDay = date.getDay();
    const day = ['일', '월', '화', '수', '목', '금', '토'];

    return { getYear, getMonth, getDate, getDay, day };
  };

  const today = date ? new Date(date) : new Date();
  return computeDateDetails(today);
};
