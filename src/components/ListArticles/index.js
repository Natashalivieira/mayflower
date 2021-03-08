const ListArticles = ({
    articles,
    onAddArticle,
    onDeleteArticle,
    activeArticle,
    setActiveArticle,
  }) => {
    const sortedarticles = articles.sort((a, b) => b.lastModified - a.lastModified);
  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Artikel</h1>
          <button onClick={onAddArticle}>Hinzufügen</button>
        </div>
        <div className="app-sidebar-articles">

          {sortedarticles.map(({ id, title, body, lastModified }, i) => (

            <div
              className={`app-sidebar-Article ${id === activeArticle && "active"}`}
              onClick={() => setActiveArticle(id)}
            >
              <div className="sidebar-Article-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteArticle(id)}>Löschen</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="Article-meta">
                Zuletzt bearbeitet{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ListArticles;