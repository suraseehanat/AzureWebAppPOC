import type { User } from '../../types/api';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const initials = user.name.charAt(0).toUpperCase();

  return (
    <article className="user-card" aria-labelledby={`user-${user.id}-name`}>
      <div className="user-card__avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="user-card__content">
        <h3 id={`user-${user.id}-name`} className="user-card__name">
          {user.name}
        </h3>
        <dl className="user-card__details">
          <div className="user-card__detail">
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </div>
          <div className="user-card__detail">
            <dt>อายุ</dt>
            <dd>{user.age} ปี</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
