import { IMAGE_MAP } from '../../content/images';

/** 그림 아래에 붙는 "설명용 도해 / 실제 사진" 구분 + 출처 표시 */
export default function ImageCredit({ id }: { id: string }) {
  const img = IMAGE_MAP[id];
  if (!img) return null;
  return (
    <p className="image-credit">
      <span className={`badge ${img.kind === 'photo' ? 'badge-photo' : 'badge-illust'}`}>
        {img.kind === 'photo' ? '실제 제품 사진' : '설명용 도해'}
      </span>
      {img.note}
    </p>
  );
}
