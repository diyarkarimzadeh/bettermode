import { useMutation, useQuery } from '@apollo/client';
import { GET_POST } from '@/services/graph-ql/queries';
import { useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  HeartIcon,
  CalendarDaysIcon,
  MessageCircleIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RootLayout from '@/components/general/layout';
import { ADD_REACTION, REMOVE_REACTION } from '@/services/graph-ql/mutations';
import { Data } from './PostDetails.interface';
import { Badge } from '@/components/ui/badge';

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUserLiked, setIsUserLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const isUserLoggedIn = !!localStorage.getItem('accessToken');

  const { data, error, loading, refetch } = useQuery<Data>(GET_POST, {
    variables: { postId: id },
    fetchPolicy: 'cache-and-network',
  });

  const [addReaction] = useMutation(ADD_REACTION);
  const [removeReaction] = useMutation(REMOVE_REACTION);

  const handleAddReaction = async () => {
    try {
      const { data } = await addReaction({
        variables: {
          input: {
            reaction: 'heart',
            overrideSingleChoiceReactions: true,
          },
          postId: id,
        },
      });
      console.log('Reaction added successfully:', data);
      refetch();
    } catch (err) {
      console.error('Error adding reaction:', err);
    }
  };

  const handleRemoveReaction = async () => {
    try {
      const { data } = await removeReaction({
        variables: {
          postId: id,
          reaction: 'heart',
        },
      });
      console.log('Reaction removed successfully:', data);
      refetch();
    } catch (err) {
      console.error('Error removing reaction:', err);
    }
  };

  const handleLikeAction = () => {
    if (isUserLoggedIn) {
      setIsUserLiked((prev) => !prev);
      setLikeCount((prev) => (isUserLiked ? prev - 1 : prev + 1));
      if (!isUserLiked) {
        handleAddReaction();
      } else {
        handleRemoveReaction();
      }
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (data) {
      setIsUserLiked(data?.getPost?.reactions[0]?.reacted);
      setLikeCount(data?.getPost?.reactionsCount);
    }
  }, [data]);

  if (loading && !data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <RootLayout hasBackground>
      <div className="w-full flex flex-col items-start justify-start px-5 sm:px-10 md:px-20 py-10 gap-5">
        <div className="flex flex-row items-center justify-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="p-2 cursor-pointer hover:bg-gray-500 rounded-full transition"
          >
            <ArrowLeftIcon />
          </div>
          <h1 className="text-left text-xl sm:text-2xl font-semibold">
            {data?.getPost.title}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-row items-center gap-3">
            <img
              className="rounded-full"
              width={32}
              src={data?.getPost.createdBy.member.profilePicture.url}
            />
            <p className="font-medium text-md">
              {data?.getPost.createdBy.member.name}
            </p>
          </div>

          <p className="hidden sm:block">|</p>

          <div className="flex flex-row items-center justify-center gap-3">
            <CalendarDaysIcon />
            <p className="font-medium text-md">
              {new Date(
                data?.getPost.createdAt ? data?.getPost.createdAt : new Date(),
              ).toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <p className="text-left font-medium text-slate-400">
          {data?.getPost.textContent}
        </p>
        <div className="flex gap-2">
          {data?.getPost.tags.map((item) => (
            <Badge variant="secondary">{item.title}</Badge>
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div
            onClick={handleLikeAction}
            className="p-2 w-[40px] h-[40px] cursor-pointer hover:bg-gray-500 rounded-full transition"
          >
            {isUserLiked ? (
              <span className="w-[36px]" role="img" aria-label="sheep">
                🩷
              </span>
            ) : (
              <HeartIcon />
            )}
          </div>
          <p className="font-bold">{likeCount} Likes</p>
          <div className="py-2 pl-2 pr-1">
            <MessageCircleIcon />
          </div>
          <p className="font-bold">{data?.getPost.repliesCount} Replies</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default PostDetails;
