import { Loading } from "../components/Loading";
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { Stepper } from "../components/Stepper";
import { Total } from "../components/Total";
import { Step } from "../types";
import { useProducts } from "../contexts/useProducts";

const nextButton: Step = {
  label: "NEXT",
  to: "/cart",
  disabled: false,
};

export function Home() {
  const { data, isLoading, error } = useProducts();

  if (error) return <div>{error}</div>;
  if (isLoading && data.length === 0) return <Loading />;

  return (
    <div className="flex flex-col space-y-8 ">
      <Stepper step={"home"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 justify-items-center">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Total small />
        <Pagination next={nextButton} />
      </div>
    </div>
  );
}
