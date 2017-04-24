export default (url, method, body) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const init = {
    method: method,
    headers: headers
  };
  if (body) {
    init.body = JSON.stringify(body);
  }
  return new Request(url, init);
};