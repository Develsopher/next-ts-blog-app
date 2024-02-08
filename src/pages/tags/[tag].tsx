import { GetServerSideProps } from 'next';
import PostLists from '@/components/PostList';

type TagPostsProps = {
  tag: string;
};

export default function TagPosts({ tag }: TagPostsProps) {
  return <PostLists tag={tag} />;
}

export const getServerSideProps: GetServerSideProps<TagPostsProps> = async ({
  query,
}) => {
  return {
    props: {
      tag: query.tag as string,
    },
  };
};
