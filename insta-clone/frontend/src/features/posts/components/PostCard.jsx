import React from 'react'

const PostCard = ({data}) => {
    console.log(data);
  return (
    data.map((e,idx) => (
        <div key={e._id} className="post">
        <div className="user">
            <div className="left-side">
                <img src="https://ik.imagekit.io/ad6av31ld/blank-profile-picture-973460_640.webp?updatedAt=1770787184788" alt="" />
                <p>{e.user.username}</p>
            </div>
            <div className="right-side">
                <button className='follow-btn'>Follow</button>
                <i className="ri-more-fill"></i>
            </div>
        </div>
        <div className="post-content">
            <img src={e.imgUrl} alt="" />
        </div>
        <div className="post-details">
            <div className="left-details">
                <div className="like">
                    <i className="ri-heart-3-line"></i>
                    <p className='like-count'>99</p>
                </div>
                <div className="comment">
                    <i className="ri-chat-3-line"></i>
                    <p className='comment-count'>13</p>
                </div>
                <div className="send">
                     <i className="ri-send-ins-line"></i>
                </div>
            </div>
            <div className="right-details">
                <i className="ri-bookmark-line"></i>
            </div>
        </div>
        <p className="post-caption">
        <span className="user">{e.user.username}</span>{" "}
                {e.caption}
        </p>
    </div>
    ))
    
  )
}

export default PostCard