import { useState, useEffect, useCallback } from 'react';
import type { ApiData } from '../types/api';
import { fetchUsers } from '../services/api';

interface UseUsersReturn {
  data: ApiData | null;
  message: string | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useUsers(): UseUsersReturn {
  const [data, setData] = useState<ApiData | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchUsers();
      setData(response.data);
      setMessage(response.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาด');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, message, loading, error, refetch: fetchData };
}
