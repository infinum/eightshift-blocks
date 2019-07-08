export const ImageEditor = (props) => {
  const {
    blockClass,
    url,
  } = props;

  return (
    <img className={blockClass} src={url} alt="" />
  );
};
