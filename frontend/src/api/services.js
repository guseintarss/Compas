const API_URL = "/api/v1";

export async function getServices() {
  const response = await fetch(`${API_URL}/services`);
  if (!response.ok) throw new Error("Failed to fetch services");
  return response.json();
}