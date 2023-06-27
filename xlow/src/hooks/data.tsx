export const requestProductList = async (): Promise<any[]> => {
  const URL = "http://desafio.xlow.com.br/search";
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const requestProductListById = async (id: number): Promise<any> => {
  const URL = `http://desafio.xlow.com.br/search/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
