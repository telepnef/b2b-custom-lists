export default function Actions() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Bulk permissions edit
        </label>
        <select
          id="location"
          name="location"
          defaultValue="view_only"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="view_only">View only</option>
          <option value="add_to_cart">Add to cart</option>
        </select>
      </div>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Apply
      </button>
    </div>
  );
}
