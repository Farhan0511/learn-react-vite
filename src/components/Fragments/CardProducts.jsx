function CardProducts({ children }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        {children}
    </div>
  );
}

function Header() {
  return (
    <a href="#">
      <img
        src="/images/shoes-1.jpg"
        alt="shoes-1"
        className="w-full h-56 object-cover"
      />
    </a>
  );
}

function Body({ title, price }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1 mb-3">
        Comfortable outdoor sport shoes
      </p>

      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">{price}</span>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition cursor-pointer">
          Buy
        </button>
      </div>
    </div>
  );
}

CardProducts.Header = Header;
CardProducts.Body = Body;

export default CardProducts;
