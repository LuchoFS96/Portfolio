export function Youtube({ url }) {
  return (
    <div>
      <div className="hidden md:block">
        <iframe
          width="853"
          height="450"
          src={`https://www.youtube.com/embed/${url}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="md:hidden pt-5">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${url}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}
