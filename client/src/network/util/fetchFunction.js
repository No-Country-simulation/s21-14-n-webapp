export async function fetchData(input, init) {
  const headers = init.body instanceof FormData ? {} : { "Content-Type": "application/json" };

  const response = await fetch(input, {
      ...init,
      headers, 
  });

  if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const errorMessage = errorBody?.error || "Error desconocido";
      console.error(`Error ${response.status}: ${errorMessage}`);
      throw new Error(errorMessage);
  }

  return response.json();
}
