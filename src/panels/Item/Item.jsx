import { Caption, Card, Paragraph } from '@vkontakte/vkui';
import './Item.css';

export const Item = ({ ownerId, photoId, sizes, text, date }) => {
  const link = `https://vk.com/photo${ownerId}_${photoId}`;
  const imgIrc = sizes.find((e) => e.type === 'm').url;
  const description = text ? text : 'нет описания';

  return (
    <Card mode="shadow" className="card">
      <a
        href={link}
        target="_blank"
        className="card__content"
      >
        <img src={imgIrc} className="card__img" />

        <Paragraph className="card__description">{description}</Paragraph>
        <Caption  className="card__data" level="3">Размещено: {date}</Caption>
      </a>
    </Card>
  );
};
