export async function fetchData(input, init = {}) {
  const { method = "GET", body } = init;

  const headers = body instanceof FormData ? {} : { "Content-Type": "application/json", ...init.headers };

  console.log("📡 Enviando a la API:", {
    url: input,
    method,
    headers,
    body: body instanceof FormData ? "FormData (no visible en consola)" : body,
  });

  const config = {
    ...init,
    method,
    headers,
  };

  if (body && method !== "GET") {
    config.body = body instanceof FormData ? body : JSON.stringify(body);
  }

  const response = await fetch(input, config);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const errorMessage = errorBody?.error || "Error desconocido";
    console.error(`❌ Error ${response.status}: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  const responseData = await response.json();
  console.log("✅ Respuesta recibida:", responseData);

  return responseData;
}
