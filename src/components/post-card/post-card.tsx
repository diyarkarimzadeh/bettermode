import { IPost } from './post-card.iterface';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from 'lucide-react';
import { MessageCircleIcon } from 'lucide-react';

interface IPostCard {
  post: IPost;
}

const placeHolderImageUrl =
  'https://tribe-s3-production.imgix.net/0AzaxAmhiRICy9iz6BvWz?fit=max&w=1000&auto=compress,format';

const PostCard = ({ post }: IPostCard) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/posts/detail/${post.id}`);
  };
  return (
    <div
      onClick={() => {
        handleNavigation();
      }}
      className="relative w-[360px] h-[485px] bg-[#22252D] rounded-lg py-5 px-4 cursor-pointer"
    >
      <div className="pb-4">
        <img
          className="w-[328px] h-[185px] rounded-lg object-cover"
          src={
            post?.fields[0]?.relationEntities?.medias[0]?.url ||
            placeHolderImageUrl
          }
        />
      </div>
      <h1 className="text-lg font-semibold text-left h-[60px] line-clamp">
        {post.title}
      </h1>
      <p className="text-left text-slate-400">{post.description}</p>
      <div className="flex flex-row items-center justify-center gap-2 absolute bottom-4 left-5 pt-6">
        <HeartIcon size={18} />
        <p>{post.reactionsCount}</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 absolute bottom-4 left-20 pt-6">
        <MessageCircleIcon size={18} />
        <p>{post.repliesCount}</p>
      </div>
    </div>
  );
};

export default PostCard;
