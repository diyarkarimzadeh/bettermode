import { ApolloError } from '@apollo/client';
import { LOAD_POSTS } from '@/services/graph-ql/queries';
import RootLayout from '@/components/general/layout';
import { Button } from '@/components/ui/button';
import PostSkeleton from '@/components/post-skeleton';
import { client } from '@/services/apollo-client';
import { useEffect, useState } from 'react';
import { PostData, Node } from '@/interfaces/posts';
import PostCard from '@/components/post-card';
import { LoaderIcon } from 'lucide-react';

const Posts = () => {
  const [postData, setPostData] = useState<PostData>();
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState<ApolloError | null>(null);
  const [nextPageId, setNextPageId] = useState<string>();
  const [hasNextPage, setHasNextPage] = useState(false);
  const shouldRenderShowMore = (!loading || !!error?.message) && hasNextPage;

  const fetchPosts = async () => {
    const variables = {
      limit: 3,
      spaceIds: ['O8GQSNRxOUSM'],
      postTypeIds: ['78RSEMrptkHBo5Q'],
      orderByString: 'publishedAt',
      reverse: false,
      filterBy: [],
      after: nextPageId || null,
    };
    if (!nextPageId) {
      setLoading(true);
    } else {
      setBtnLoading(true);
    }

    setError(null);
    try {
      const { data, error } = await client.query<PostData>({
        query: LOAD_POSTS,
        variables: variables,
      });
      const { pageInfo, totalCount, nodes } = data.posts || {};
      if (error) {
        setError(error);
      }
      setHasNextPage(pageInfo?.hasNextPage);
      if (pageInfo?.hasNextPage) {
        setNextPageId(pageInfo?.endCursor);
      }
      if (postData) {
        setPostData((prevState) => ({
          ...prevState,
          posts: {
            ...prevState!.posts,
            nodes: [...prevState!.posts.nodes, ...nodes],
            totalCount,
            pageInfo,
          },
        }));
      } else {
        setPostData(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setBtnLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (loading) return <PostSkeleton />;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <div className="flex flex-row gap-8 items-center justify-center flex-wrap w-full py-8">
        {postData?.posts.nodes.map((post: Node) => (
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
              onClick={fetchPosts}
              className="bg-[#0367F3]"
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
