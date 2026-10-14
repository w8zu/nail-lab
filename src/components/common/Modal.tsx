import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  onKey?: (e: KeyboardEvent) => void;
}

export default function Modal({ open, onClose, labelledBy, children, onKey }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // 콜백은 ref로 들고 있어, 내용이 바뀌어도 포커스·스크롤 잠금 효과가 다시 실행되지 않게 한다
  const handlers = useRef({ onClose, onKey });
  handlers.current = { onClose, onKey };

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handlers.current.onClose();
      else handlers.current.onKey?.(e);
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
      prev?.focus();
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={labelledBy} tabIndex={-1} ref={ref} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
