import { useParams } from "react-router-dom";

const blog = () => {
  const { id } = useParams();
  return <div>This is particular blog post: {id}</div>;
};

export default blog;