import type { ApiResponse } from '../types/api';

const API_URL = '/api/testhttp';

export async function fetchUsers(): Promise<ApiResponse> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data: ApiResponse = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'API returned unsuccessful response');
  }

  return data;
}
