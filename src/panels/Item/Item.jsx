export const Item = ({ link, imgIrc, text }) => {
    return (
      <a href={link}>
        <img src={imgIrc} width="100" />
        <p>{text}</p>
      </a>
    );
  };