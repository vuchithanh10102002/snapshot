import Image from "./Image";

function Gallery(props) {
  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} alt={title} key={id} />;
    });
  }
  return <ul className="flex flex-wrap justify-between">{images}</ul>;
}

export default Gallery;
