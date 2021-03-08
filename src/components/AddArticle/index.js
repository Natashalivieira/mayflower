import ReactMarkdown from "react-markdown";

const AddArticle = ({ activeArticle, onUpdateArticle }) => {
  const onEditField = (field, value) => {
    onUpdateArticle({
      ...activeArticle,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeArticle) return <div className="no-active-Article">Keine Artikel veröffentlicht</div>;

  return (
    <div className="app-main">
      <div className="app-main-Article-edit">

        <input
          type="text"
          id="title"
          placeholder="Artikel Titel"
          value={activeArticle.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
    
        <textarea
          id="body"
          placeholder="Schreib Ihre Artikel hier"
          value={activeArticle.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>

      <div className="app-main-Article-preview">
        <h1 className="preview-title">{activeArticle.title}</h1>

        <ReactMarkdown className="markdown-preview">
          {activeArticle.body}
        </ReactMarkdown>
        
      </div>
    </div>
  );
};

export default AddArticle;