export const routerQueryToString = (routerQuery: string | Array<string> | undefined) => {
  if (!routerQuery) return '';
  if (Array.isArray(routerQuery)) return routerQuery.join('+');
  return routerQuery;
};

export const changePlusToUnicode = (str: string) => {
  return str.replace(/\+/g, '%2B');
};

const wordEndingChange = (number: number, txt: Array<string>) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

export const moviesEndingChange = (number: number) => {
  return wordEndingChange(number, ['фильм', 'фильма', 'фильмов']);
};
