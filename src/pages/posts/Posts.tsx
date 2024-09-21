import { useQuery } from '@apollo/client';
import { LOAD_POSTS } from '@/services/graph-ql/queries';
import RootLayout from '@/components/general/layout';
import { Button } from '@/components/ui/button';
import PostSkeleton from '@/components/post-skeleton';
import { useEffect, useState } from 'react';
import { PostData, Node } from '@/interfaces/posts';
import PostCard from '@/components/post-card';
import { LoaderIcon } from 'lucide-react';

const Posts = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [nextPageId, setNextPageId] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  const variables = {
    limit: 3,
    spaceIds: ['O8GQSNRxOUSM'],
    postTypeIds: ['78RSEMrptkHBo5Q'],
    orderByString: 'publishedAt',
    reverse: false,
    filterBy: [],
  };

  const { data, loading, error, fetchMore } = useQuery<PostData>(LOAD_POSTS, {
    variables,
  });

  const shouldRenderShowMore = (!loading || !!error?.message) && hasNextPage;

  useEffect(() => {
    if (data) {
      setHasNextPage(data.posts.pageInfo.hasNextPage);
      setNextPageId(data.posts.pageInfo.endCursor);
    }
  }, [data]);

  const renderPosts = () => {
    if (loading) return <PostSkeleton />;
    if (error) return <p>Error: {error?.message}</p>;
    return (
      <div className="flex flex-row gap-8 items-center justify-center flex-wrap w-full py-8">
        {data?.posts.nodes.map((post: Node) => (
          <PostCard key={post.id} post={post} />
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
        {shouldRenderShowMore && (
          <div>
            <Button
              onClick={() => {
                setBtnLoading(true);
                fetchMore({
                  variables: {
                    after: nextPageId,
                  },
                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prevResult;
                    setBtnLoading(false);
                    return {
                      ...fetchMoreResult,
                      posts: {
                        ...fetchMoreResult.posts,
                        nodes: [
                          ...prevResult.posts.nodes,
                          ...fetchMoreResult.posts.nodes,
                        ],
                      },
                    };
                  },
                });
              }}
              className="bg-[#0367F3] border-0 hover:bg-[#0146f4] hover:border-0"
              disabled={btnLoading}
            >
              {btnLoading && (
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Show More
            </Button>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default Posts;
