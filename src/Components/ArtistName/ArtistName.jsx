import style from "./ArtistName.module.css";
export const ArtistName = (artist) => {
  const artists = artist.artist;

  return (
    <p className={style.artistName}>
      {artists.map((el, index) => {
        return (
          <span key={index}>
            <a href={el.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              {(index ? "& " : "") + el.name}
            </a>
          </span>
        );
      })}
    </p>
  );
};
