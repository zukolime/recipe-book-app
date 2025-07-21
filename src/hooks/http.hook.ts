export const useHttp = () => {
  const request = async (
    url: string,
    method = "GET",
    body: any = null,
    headers: any = {}
  ) => {
    if (!headers["Content-Type"] && body) {
      headers["Content-Type"] = "application/json";
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
