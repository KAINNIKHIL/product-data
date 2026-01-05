export default function ProductCard({ products, onEdit }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="group bg-white rounded-2xl border border-gray-200 
                     hover:border-blue-500 hover:shadow-xl 
                     transition-all duration-300"
        >
          <div className="p-5 flex flex-col h-full">
            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600 transition">
              {p.name}
            </h3>

            {/* Price */}
            <p className="text-xl font-bold text-blue-600 mt-2">
              ₹{p.price.toLocaleString()}
            </p>

            {/* Meta Info */}
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium">Category</span>
                <span className="text-gray-800">{p.category}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Stock</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold
                    ${
                      p.stock > 10
                        ? "bg-green-100 text-green-700"
                        : p.stock > 0
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {p.stock > 0 ? `${p.stock} left` : "Out of stock"}
                </span>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Action */}
            <button
              onClick={() => onEdit(p)}
              className="mt-4 w-full rounded-lg py-2 text-sm font-semibold
                         bg-blue-50 text-blue-600 
                         hover:bg-blue-600 hover:text-white
                         transition-all"
            >
              Edit Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
