import { Card, Link, Paragraph } from '@vkontakte/vkui';
import './Item.css';

export const Item = ({ ownerId, photoId, sizes, text }) => {
  const link = `https://vk.com/photo${ownerId}_${photoId}`;
  const imgIrc = sizes.find((e) => e.type === 'm').url;
  const description = text ? text : 'нет описания';

  return (
    <Card mode="shadow" className="card">
      <Link
        href={link}
        target="_blank"
        style={{
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          rowGap: '24px',
          // textDecoration: 'none',
        }}
      >
        <img
          src={imgIrc}
          style={{ objectFit: 'contain' }}
        />
        <Paragraph className="paragraph">{description}</Paragraph>
      </Link>
    </Card>
  );
};
