import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import "./PostCard.css";
import { useDisclosure } from "@chakra-ui/react";
import { AiFillAlert, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from "../Comment/commentModal";


const PostCard = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const [isPostLiked, setisPostLiked] = useState(false);
  const [isSaved, setisSaved] = useState(false);

  const handleSavePost = () => {
    setisSaved(!isSaved);
  };
  const handlePostLike = () => {
    setisPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setshowDropDown(!showDropDown);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleopenCommentModal = () => {
    onOpen()
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img className="h-12 w-12 rounded-full" src="logo.png" alt="" />
            <div className="pl-2">
              <p className="font-semibold text-sm">Username</p>
              <p className='"font-thin text-sm'>Location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p
                  className="bg-black text-white
                px-4 py-1 rounded-md cursor-pointer"
                >
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src="logo.png" alt="" />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-700"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment
              onClick={handleopenCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 Likes</p>
          <p className="opacity-50 py-2 cursor-pointer">View all</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex w-full items-center px-5">
            <BsEmojiSmile />
            <input
              className="commentInput"
              type="text"
              placeholder="Comment.."
            />
          </div>
        </div>
      </div>

      <CommentModal
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
