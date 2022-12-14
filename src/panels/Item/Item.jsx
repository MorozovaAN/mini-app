import { Card, Headline, Link } from '@vkontakte/vkui';

export const Item = ({ link, imgIrc, text }) => {
  const description = text ? text : 'нет описания';
  return (
    <Card
      mode="shadow"
      style={{ height: '200px', width: '150px', padding: '10px' }}
    >
      <Link
        href={link}
        style={{
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src={imgIrc}
          style={{ maxHeight: '150px', objectFit: 'contain' }}
        />
        <Headline>{description}</Headline>
      </Link>
    </Card>
  );
};
