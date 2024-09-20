import { Skeleton } from '../ui/skeleton';
import { emptyArrayGenerator } from '@/utils/empty-array-generator';

const PostSkeleton = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 flex-wrap py-8">
      {emptyArrayGenerator(3).map((_, index) => (
        <Skeleton key={index} className="w-[360px] h-[280px] rounded-lg" />
      ))}
    </div>
  );
};

export default PostSkeleton;
