import PageHeader from "./components/PageHeader";
import CategoryPills from "./components/CategoryPills";
import "./index.css";
import { categories, videos } from "../data/home";
import { useState } from "react";
import VideoGridItem from "./components/VideoGridItem";
import Sidebar from "./components/Sidebar";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <>
      <div className="flex flex-col h-screen ">
        <PageHeader></PageHeader>
        <div className=" grid-for-pills flex-grow overflow-auto  pt-2">
          <Sidebar />
          <div className="min-w-0 ">
            <div className="overflow-x-hidden flex-shrink-0 px-8 pb-5 ">
              <div className="sticky top-0 bg-white z-10  ">
                <CategoryPills
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelect={setSelectedCategory}
                ></CategoryPills>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] px-8">
              {videos.map((video) => (
                <VideoGridItem {...video} key={video.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
