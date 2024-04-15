import { useParams } from "react-router-dom";

function Article() {
    // const allValuesForTheDynamicSegments = useParams();
    // const id = allValuesForTheDynamicSegments.id;

    //La version destructurée des deux const au-dessus : 
  const { id } = useParams();

  return <h1>Hello from Article {id}</h1>;
}

export default Article;