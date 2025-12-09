import { useUsers } from '../../hooks/useUsers';
import { StatusMessage } from '../StatusMessage';
import { MetadataBar } from '../MetadataBar';
import { UserTable } from './UserTable';
import { UserCard } from './UserCard';
import './UserList.css';

export function UserList() {
  const { data, message, loading, error, refetch } = useUsers();

  if (loading) {
    return <StatusMessage type="loading" />;
  }

  if (error) {
    return <StatusMessage type="error" message={error} onRetry={refetch} />;
  }

  if (!data || data.users.length === 0) {
    return <StatusMessage type="empty" />;
  }

  return (
    <div className="user-list">
      <MetadataBar
        totalCount={data.totalCount}
        timestamp={data.timestamp}
        message={message || undefined}
      />

      {/* Desktop: Table */}
      <div className="user-list__table">
        <UserTable users={data.users} />
      </div>

      {/* Mobile: Cards */}
      <div className="user-list__cards">
        {data.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
