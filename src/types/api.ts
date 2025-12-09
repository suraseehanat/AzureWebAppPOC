export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface ApiData {
  users: User[];
  totalCount: number;
  timestamp: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: ApiData;
}
