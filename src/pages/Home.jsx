import { useState, useEffect } from "react";
import Spinner from '../components/Spinner'
import Product from '../components/Product'
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const result = await res.json();
      setPosts(result);
    }
    catch(error){
      console.log(`Error ${error} has been occured.`);
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  
  }, [])
  

  return (
    <div className="">
      <div className="">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner className="" />
          </div>
        ) : posts.length > 0 ? (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-cols-4 grid-rows-5 mx-auto p-2 max-w-6xl min-h-[80vh] space-x-5 space-y-10">
            {" "}
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}{" "}
          </div>
        ) : (
          <div>
            <p>No Data Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
