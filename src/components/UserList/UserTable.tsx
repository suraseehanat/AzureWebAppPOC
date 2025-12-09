import type { User } from '../../types/api';

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <div className="user-table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">Email</th>
            <th scope="col">อายุ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="user-table__name">
                  <span className="user-table__avatar" aria-hidden="true">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.age} ปี</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
