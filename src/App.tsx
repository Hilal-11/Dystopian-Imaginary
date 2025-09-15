import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import ExplorePage from "@/pages/explore";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import GenerateImages from "./pages/generateImages";
import ImageDetails from "./pages/ImageDetails";
function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ExplorePage />} path="/explore" />
      <Route path="/explore/image/:id" element={<ImageDetails />} />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blogs" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<GenerateImages />} path="/generate" />
      <Route element={<GenerateImages />} path="/generate" />
      <Route element={<GenerateImages />} path="/generate" />
      
    </Routes>
  );
}

export default App;
