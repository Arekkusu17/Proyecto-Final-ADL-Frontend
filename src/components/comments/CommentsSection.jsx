import { useContext, useEffect } from "react"
import CommentsListItem from "./CommentsListItem"
import { CommentsContext } from "../../context/CommentsProvider"
import NewComment from "./newComment"

export default function CommentsSection({ classId }) {
  const { comments, getClassComments } = useContext(CommentsContext)


  useEffect(() => {
    getClassComments(classId)
  }, [])

  const listComments = comments.map((commentItem) => {
    return (
      <CommentsListItem key={commentItem.id} commentItem={commentItem} />
    )
  })


  return (
    <>
      <NewComment classId={classId} />
      {comments.length > 0 ? listComments : <div>Vacio de comments</div>}
    </>)
}