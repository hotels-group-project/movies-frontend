export const routerQueryToString = (routerQuery: string | Array<string> | undefined) => {
  if (!routerQuery) return '';
  if (Array.isArray(routerQuery)) return routerQuery.join('+');
  return routerQuery;
};
