import { PARTS } from '../../content/parts';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          NAIL&nbsp;LAB
        </a>
        <nav className="site-nav" aria-label="파트 이동">
          {PARTS.map((p) =>
            p.available ? (
              <a key={p.id} href={`#${p.id}`}>
                <span className="nav-label">{p.label}</span>
                <span className="nav-title">{p.title}</span>
              </a>
            ) : (
              <span key={p.id} className="nav-disabled" aria-disabled="true" title={p.description}>
                <span className="nav-label">{p.label}</span>
                <span className="nav-title">{p.title}</span>
              </span>
            ),
          )}
          <a href="#sources">
            <span className="nav-title">출처</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
