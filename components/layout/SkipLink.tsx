'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        top: -60,
        left: 8,
        zIndex: 99999,
        padding: '8px 16px',
        background: '#FFB703',
        color: '#023047',
        fontWeight: 600,
        borderRadius: 4,
        transition: 'top 0.2s',
      }}
      onFocus={(e) => { (e.target as HTMLElement).style.top = '8px'; }}
      onBlur={(e) => { (e.target as HTMLElement).style.top = '-60px'; }}
    >
      Skip to main content
    </a>
  );
}
