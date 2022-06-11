import moment from "moment";

const HotTopics = ({ topic }) => {
  return (
    <div className="mt-4">
      <h3 className="font-link" style={{ fontWeight: 700 }}>
        Hot topics
      </h3>
      <div className="flex">
        <div className="relative">
          <img
            src={topic?.feature_image}
            className="max-w-screen-md feature-img"
            alt=""
          />
          <div className="absolute bottom-5 post-content">
            <p className="text-white w-[400px] text-3xl ml-12">
              {topic?.title}
            </p>
            <div>
              <span className="text-white w-[400px] text-sm ml-12">
                {moment.utc(topic?.created_at).fromNow()}
              </span>
              <span className="text-white w-[400px] text-sm ml-12">
                CNN Indonesia
              </span>
            </div>
          </div>
        </div>
        <div className="ml-5 contentsection">
          <span className="text-3xl">{topic?.excerpt?.split(" ")[0]}</span>
          {topic?.excerpt?.slice(
            topic?.excerpt?.indexOf(" "),
            topic?.excerpt?.length
          )}
        </div>
      </div>
    </div>
  );
};

export default HotTopics;
