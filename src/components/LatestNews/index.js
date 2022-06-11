import NewsCard from "./NewsCard";

const LatestNews = ({ postList }) => {
  return (
    <>
      <div className="mt-4">
        <h3>Latest News</h3>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {postList?.slice(1, postList?.length)?.map((post) => (
            <NewsCard post={post} key={post?.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestNews;
