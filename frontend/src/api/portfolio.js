const API_URL = "/api/v1";

export async function getPortfolio() {
  const response = await fetch(`${API_URL}/portfolio`);
  if (!response.ok) throw new Error("Failed to fetch portfolio");
  return response.json();
}