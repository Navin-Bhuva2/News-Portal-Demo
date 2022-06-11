import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Container } from "./components/common";
import Header from "./components/Header";
import HotTopics from "./components/HotTopics";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";

function App() {
  const [postList, setPostList] = useState(null);

  const fetchPosts = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/content/posts?key=${process.env.REACT_APP_API_KEY}`
    );

    setPostList(response?.data?.posts);
  }, [postList, setPostList]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Container>
        <Header />
        {!postList ? (
          <div className="h-screen w-[100%] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {postList?.length ? (
              <>
                <HotTopics topic={postList?.[0]} />
                <LatestNews postList={postList} />
                <Footer />
              </>
            ) : (
              <Container>
                <p
                  className="mt-12 text-center font-link"
                  style={{ fontWeight: 700 }}
                >
                  Data is not available{" "}
                </p>
              </Container>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
