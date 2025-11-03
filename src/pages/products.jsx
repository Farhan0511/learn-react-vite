import CardProducts from "../components/Fragments/CardProducts";

function ProductsPage() {
  return (
    <div className="flex justify-center items-center py-6">
      <CardProducts>
        <CardProducts.Header/>
        <CardProducts.Body title="Sepatu Joging" price="Rp 455.000"/>
      </CardProducts>
    </div>
  );
}

export default ProductsPage;
