import Product from "./components/Product";
import { data } from "./data";

const App = () => {
  return (
    <>
      <div className="container px-4 mx-auto mt-5 flex flex-wrap  gap-4 justify-between">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;
