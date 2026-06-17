const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export async function fetchPortfolio() {
  try {
    const res = await fetch(`${API_BASE}/portfolio/all`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
