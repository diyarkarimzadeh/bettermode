import { useMutation, useQuery } from '@apollo/client';
import { GET_POST } from '@/services/graph-ql/queries';
import { useParams } from 'react-router-dom';
import { ArrowLeftIcon, HeartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RootLayout from '@/components/general/layout';
import { ADD_REACTION } from '@/services/graph-ql/mutations';

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isUserLiked, setIsUserLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data, error, loading, refetch } = useQuery(GET_POST, {
    variables: { postId: id },
    fetchPolicy: 'cache-and-network',
  });

  const [addReaction] = useMutation(ADD_REACTION);

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

  useEffect(() => {
    if (data) {
      setIsUserLiked(data.getPost?.reactions[0]?.reacted);
      setLikeCount(data.getPost.reactionsCount);
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
      <div className="w-full flex flex-col items-start justify-start px-20 py-10 gap-5">
        <div className="flex flex-row items-center justify-center gap-4">
          <div
            onClick={() => navigate(-1)}
            className="p-2 cursor-pointer hover:bg-gray-500 rounded-full transition"
          >
            <ArrowLeftIcon />
          </div>
          <h1 className="text-left text-2xl font-semibold">
            {data.getPost.title}
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-3">
          <img
            className="rounded-full"
            width={32}
            src={data.getPost.createdBy.member.profilePicture.url}
          />
          <p className="font-semibold text-md">
            {data.getPost.createdBy.member.name}
          </p>
          <p className="font-semibold text-md">
            {new Date(data.getPost.createdAt).toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
        <p className="text-left font-medium text-slate-300">
          {data.getPost.textContent}
        </p>

        <div>
          <div className="flex gap-1 items-center justify-center">
            <div
              onClick={() => {
                setIsUserLiked((prev) => !prev);
                setLikeCount((prev) => (isUserLiked ? prev - 1 : prev + 1));
                if (!isUserLiked) {
                  handleAddReaction();
                }
              }}
              className="p-2 cursor-pointer hover:bg-gray-500 rounded-full transition"
            >
              {isUserLiked ? (
                <span className="w-[36px]" role="img" aria-label="sheep">
                  🩷
                </span>
              ) : (
                <HeartIcon />
              )}
            </div>
            <p className="font-bold">{likeCount}</p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default PostDetails;
