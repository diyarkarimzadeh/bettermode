import { useQuery } from '@apollo/client';
import { LOAD_POSTS } from '@/services/graph-ql/queries';
import { IPost } from '@/components/post-card/post-card.iterface';
import PostCard from '@/components/post-card';
import RootLayout from '@/components/general/layout';
import { Button } from '@/components/ui/button';
import PostSkeleton from '@/components/post-skeleton';

const Posts = () => {
  const variables = {
    limit: 8,
    spaceIds: ['O8GQSNRxOUSM'],
    postTypeIds: ['78RSEMrptkHBo5Q'],
    orderByString: 'publishedAt',
    reverse: false,
    filterBy: [],
  };

  const { loading, error, data } = useQuery(LOAD_POSTS, { variables });

  const renderPosts = () => {
    if (loading) return <PostSkeleton />;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <div className="flex flex-row gap-8 items-center justify-center flex-wrap w-full py-8">
        {data.posts.nodes.map((post: IPost) => (
          <PostCard post={post} />
        ))}
      </div>
    );
  };

  return (
    <RootLayout>
      <div className="w-full flex flex-col items-center justify-center px-28 py-12 bg-[#000615]">
        <div className="w-full pt-5">
          <h1 className="text-3xl font-semibold">📚 Posts</h1>
        </div>
        <div className="pt-8 bg-[#000615]">{renderPosts()}</div>
        {(!loading || !!error?.message) && (
          <div>
            <Button className="bg-[#0367F3]">Show More</Button>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default Posts;
