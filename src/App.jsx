import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <>
      <div className="content-wrapper max-w-screen text-base mx-auto px-8  bg-slate-200">
        <Header />
        <main className="main">
          <div className="slider">Slider</div>
          <div className="story">story</div>
          <div className="featored-mugs">featured-mugs</div>
          <div className="more-products">more-products</div>
          <div className="coffee-magazine">coffee=magazine</div>
          <div className="lifestyle-stories">lifestyle-stories</div>
          <div className="subscribe-us">subscribe-us</div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
