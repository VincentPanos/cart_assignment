import { useGetData } from "../api";
import { AbsoluteCenter } from "../components/AbsoluteCenter";
import { Spinner } from "../components/Spinner";
import { Card } from "../components/Card";
import { Product } from "../types";

const Loading = () => {
  return (
    <AbsoluteCenter>
      <Spinner />
    </AbsoluteCenter>
  );
};

export function Home() {
  const { data, isLoading, error } = useGetData<Product>("products");

  if (error) return <div>{error}</div>;
  if (isLoading && data.length === 0) return <Loading />;

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
