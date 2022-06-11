import moment from "moment";

const NewsCard = ({ post }) => {
  return (
    <div>
      <img src={post?.feature_image} className="rounded-md" alt="" />
      <h5 className="mt-2 ">{post?.title}</h5>
      <div className="mt-3 text-xs">
        <span className="mr-4 font-link">
          {" "}
          {moment.utc(post?.created_at).fromNow()}
        </span>
        <span className="font-link">CNN Indonesia</span>
      </div>
    </div>
  );
};

export default NewsCard;
