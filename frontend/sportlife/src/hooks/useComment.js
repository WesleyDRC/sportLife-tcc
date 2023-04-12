import { useContext } from "react";
import { CommentContext } from "../contexts/comment";

const useComment = () => {
  return useContext(CommentContext);
};

export default useComment;
