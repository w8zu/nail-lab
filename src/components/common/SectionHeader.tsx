interface Props {
  index: string;
  title: string;
  lead?: string;
}

export default function SectionHeader({ index, title, lead }: Props) {
  return (
    <header className="section-header">
      <span className="section-index">{index}</span>
      <h3>{title}</h3>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
