import React from 'react';
import { FaUserCircle, FaEllipsisH, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import {
  PostsContainer,
  PostCard,
  PostHeader,
  PostAuthor,
  PostAvatar,
  PostInfo,
  PostName,
  PostTime,
  PostOptions,
  PostContent,
  PostText,
  PostImage,
  PostActions,
  PostAction,
  PostActionCount,
  PostComments,
  CommentForm,
  CommentInput,
  CommentAvatar
} from './styles';

// Dữ liệu mẫu cho bài đăng
const postsData = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Nguyễn Văn A',
      avatar: null
    },
    content: 'Hôm nay là một ngày tuyệt vời! 🌞',
    image: null,
    time: '2 giờ trước',
    likes: 15,
    comments: 3
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'Trần Thị B',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    content: 'Vừa đi du lịch Đà Lạt về, chia sẻ với mọi người vài tấm hình đẹp nhé!',
    image: 'https://picsum.photos/id/10/800/600',
    time: '5 giờ trước',
    likes: 42,
    comments: 7
  },
  {
    id: 3,
    author: {
      id: 3,
      name: 'Lê Văn C',
      avatar: 'https://i.pravatar.cc/150?img=7'
    },
    content: 'Cuối tuần này ai có kế hoạch gì không? Mình đang tính đi xem phim, ai muốn đi cùng không?',
    image: null,
    time: '1 ngày trước',
    likes: 8,
    comments: 12
  }
];

const PostsList = () => {
  return (
    <PostsContainer>
      {postsData.map(post => (
        <PostCard key={post.id}>
          <PostHeader>
            <PostAuthor>
              <PostAvatar>
                {post.author.avatar ? (
                  <img src={post.author.avatar} alt={post.author.name} />
                ) : (
                  <FaUserCircle />
                )}
              </PostAvatar>
              <PostInfo>
                <PostName>{post.author.name}</PostName>
                <PostTime>{post.time}</PostTime>
              </PostInfo>
            </PostAuthor>
            <PostOptions>
              <FaEllipsisH />
            </PostOptions>
          </PostHeader>
          
          <PostContent>
            <PostText>{post.content}</PostText>
            {post.image && <PostImage src={post.image} alt="Post" />}
          </PostContent>
          
          <PostActionCount>
            <div>
              <FaThumbsUp /> {post.likes}
            </div>
            <div>{post.comments} bình luận</div>
          </PostActionCount>
          
          <PostActions>
            <PostAction>
              <FaThumbsUp /> Thích
            </PostAction>
            <PostAction>
              <FaComment /> Bình luận
            </PostAction>
            <PostAction>
              <FaShare /> Chia sẻ
            </PostAction>
          </PostActions>
          
          <PostComments>
            <CommentForm>
              <CommentAvatar>
                <FaUserCircle />
              </CommentAvatar>
              <CommentInput placeholder="Viết bình luận..." />
            </CommentForm>
          </PostComments>
        </PostCard>
      ))}
    </PostsContainer>
  );
};

export default PostsList; 