export default function ProductTable({ products, onEdit }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Product Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Price
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Category
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Stock
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, index) => (
            <tr
              key={p.id}
              className={`border-t ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50 transition`}
            >
              <td className="px-4 py-3 font-medium text-gray-800">
                {p.name}
              </td>

              <td className="px-4 py-3 text-gray-700">
                ₹{p.price}
              </td>

              <td className="px-4 py-3">
                <span className="inline-block px-2 py-1 text-xs rounded bg-gray-200">
                  {p.category}
                </span>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`font-medium ${
                    p.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {p.stock > 0 ? `${p.stock} available` : "Out of stock"}
                </span>
              </td>

              <td className="px-4 py-3">
                <button
                  onClick={() => onEdit(p)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty state */}
      {products.length === 0 && (
        <div className="p-4 text-center text-gray-500">
          No products found
        </div>
      )}
    </div>
  );
}
