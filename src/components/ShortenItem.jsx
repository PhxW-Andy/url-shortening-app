const ShortenItem = ({ link, links, setLinks }) => {
  const handleCopyLink = (e) => {
    navigator.clipboard.writeText(e.target.value);

    e.target.innerText = "Copied!";
    e.target.className = "copied";

    setTimeout(() => {
      e.target.className = "";
      e.target.innerText = "Copy";
    }, 1000);
  };

  const handleDelete = () => {
    setLinks(links.filter((item) => link.id !== item.id));
  };

  return (
    <div className="link-item">
      <div className="original-link">
        <span title={link.original_link}>{link.original_link}</span>
      </div>
      <div className="shorten-link">
        <span title={link.short_link}>{link.short_link}</span>
        <div className="btn-wrapper">
          <button type="" value={link.short_link} onClick={handleCopyLink}>
            Copy
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortenItem;
