export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mb-6">
      {/* Search Icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search products by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          pl-10
          pr-4
          py-2.5
          border
          rounded-lg
          bg-white
          text-gray-700
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      />
    </div>
  );
}
