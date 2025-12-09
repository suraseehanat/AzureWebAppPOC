import './MetadataBar.css';

interface MetadataBarProps {
  totalCount: number;
  timestamp: string;
  message?: string;
}

export function MetadataBar({ totalCount, timestamp, message }: MetadataBarProps) {
  const formattedTime = new Intl.DateTimeFormat('th-TH', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(timestamp));

  return (
    <div className="metadata-bar">
      <div className="metadata-bar__left">
        {message && <span className="metadata-bar__message">{message}</span>}
      </div>
      <div className="metadata-bar__right">
        <span className="metadata-bar__count">
          <strong>{totalCount}</strong> รายการ
        </span>
        <span className="metadata-bar__timestamp">{formattedTime}</span>
      </div>
    </div>
  );
}
