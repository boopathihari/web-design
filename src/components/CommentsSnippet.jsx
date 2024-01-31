import React, { useEffect, useState } from "react";
import { AiOutlineLike,AiOutlineDislike } from "react-icons/ai";

export default function Comment() {
  const [comments, setComments] = useState(() => {

  const storedComments = localStorage.getItem("comments");
    return storedComments ? JSON.parse(storedComments) : [
      {
        "id": 1,
        "user": "@Sudharsan",
        "comment": "Hello This is great."
      },
      {
        "id": 2,
        "user": "@Barath",
        "comment": "Awesome Work Keep it up"
      },
      {
        "id": 3,
        "user": "@Hari",
        "comment": "Great Idea. Keep it up."
      }
    ];
  });

  const [newComment, setNewComment] = useState("");
  
 
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);


  const commentHandler = () => {
    if (!newComment) {
      alert("Your comments is empty");
      return;
    }

    const commentObj = {
      id: comments.length,
      user: "@Boopathi Hari",
      comment: newComment,
    };

    setComments([commentObj,...comments]);
    setNewComment("");

  };

  return (
    <div>
        <h1 className="text-center mt-4 text-[24px]">Comment Box Snippet</h1>
      <div className="w-[80%] mx-auto mt-[5%] flex gap-4 justify-center items-center">
        <div class="relative w-[80%]">
          <textarea
            id="hs-floating-textarea"
            class="w-full h-[5rem] p-5 border border-black rounded-lg"
            placeholder="Add your comments"
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            value={newComment}
          ></textarea>
        </div>

        <div className=" ">
          <button
            type="button"
            class="text-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 "
            onClick={commentHandler}
            
          >
            POST
          </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        {comments.map((comment) => (
          <>
            <div className="p-4 rounded-lg card border shadow-md border-gray-200 mt-4">
              <p className="text-sm text-gray-500 mb-2">{comment.user}</p>
              <p>{comment.comment}</p>

              <div className="flex gap-4 mt-3 items-center">
              <AiOutlineLike className="cursor-pointer text-lg"/>
              <AiOutlineDislike className="cursor-pointer text-lg"/>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
