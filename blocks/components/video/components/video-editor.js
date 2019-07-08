export const VideoEditor = (props) => {
  const {
    blockClass,
    url,
  } = props;

  return (
    <video className={blockClass} loop muted>
      <source src={url} type="video/mp4" />
    </video>
  );
};
