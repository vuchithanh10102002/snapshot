function Image({ url, title }) {
  return (
    <li className="w-56 h-40 overflow-hidden mb-4">
      <img
        src={url}
        alt={title}
        className="transition tranform ease-linear duration-700"
      ></img>
    </li>
  );
}

export default Image;
