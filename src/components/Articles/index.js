import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "../../App.css";
import AddArticle from "../AddArticle";
import ListArticles from "../ListArticles";

function Articles() {
  
  const [articles, setarticles] = useState(
    localStorage.articles ? JSON.parse(localStorage.articles) : []
  );

  const [activeArticle, setActiveArticle] = useState(false);

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const onAddArticle = () => {
    const newArticle = {
      id: uuid(),
      title: "Artikel ohne Titel",
      body: "",
      lastModified: Date.now(),
    };

    setarticles([newArticle, ...articles]);
    setActiveArticle(newArticle.id);
  };

  const onDeleteArticle = (ArticleId) => {
    setarticles(articles.filter(({ id }) => id !== ArticleId));
  };

  const onUpdateArticle = (updatedArticle) => {
    const updatedarticlesArr = articles.map((Article) => {
      if (Article.id === updatedArticle.id) {
        return updatedArticle;
      }

      return Article;
    });

    setarticles(updatedarticlesArr);
  };

  const getActiveArticle = () => {
    return articles.find(({ id }) => id === activeArticle);
  };

  return (
    <div className="App">
      <ListArticles
        articles={articles}
        onAddArticle={onAddArticle}
        onDeleteArticle={onDeleteArticle}
        activeArticle={activeArticle}
        setActiveArticle={setActiveArticle}
      />
      <AddArticle activeArticle={getActiveArticle()} onUpdateArticle={onUpdateArticle} />
    </div>
  );
}

export default Articles;