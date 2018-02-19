import React from "react";
import { Article } from "./Article";

export const ArticleList = (props) => (
  <div>
    {Object.values(props.articles).map(article => {
      return <Article
        key={article.id}
        article={article}
        actions={props.articleActions}
      />
    })}
  </div>
);