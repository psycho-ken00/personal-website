const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function sitePath(path = '/') {
  return `${base}/${path.replace(/^\//, '')}`;
}
