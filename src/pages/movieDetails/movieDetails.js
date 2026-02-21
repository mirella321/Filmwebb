import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();  

  
  return (
    <>
      <h1>Movie Details</h1>
      <span>{id}</span>
    </>
  );
}
