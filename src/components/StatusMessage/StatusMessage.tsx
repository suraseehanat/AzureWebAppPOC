import './StatusMessage.css';

interface StatusMessageProps {
  type: 'loading' | 'error' | 'empty';
  message?: string;
  onRetry?: () => void;
}

export function StatusMessage({ type, message, onRetry }: StatusMessageProps) {
  return (
    <div
      className={`status-message status-message--${type}`}
      role={type === 'loading' ? 'status' : 'alert'}
      aria-busy={type === 'loading'}
    >
      {type === 'loading' && (
        <>
          <div className="status-message__spinner" aria-hidden="true" />
          <span>{message || 'กำลังโหลดข้อมูล...'}</span>
        </>
      )}

      {type === 'error' && (
        <>
          <div className="status-message__icon" aria-hidden="true">!</div>
          <span>{message || 'เกิดข้อผิดพลาด'}</span>
          {onRetry && (
            <button className="status-message__retry" onClick={onRetry}>
              ลองใหม่
            </button>
          )}
        </>
      )}

      {type === 'empty' && (
        <>
          <div className="status-message__icon" aria-hidden="true">-</div>
          <span>{message || 'ไม่พบข้อมูล'}</span>
        </>
      )}
    </div>
  );
}
