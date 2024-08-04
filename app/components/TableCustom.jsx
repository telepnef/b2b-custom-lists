import { useState } from "react";
import Actions from "./Actions";

export default function TableCustom({ columns, values, title }) {
  const [expandedProducts, setExpandProduct] = useState([]);
  const [expandedVariants, setExpandVariant] = useState([]);

  const productExpandHandler = (id, operation) => {
    if (operation === "remove") {
      setExpandProduct(expandedProducts.filter((product) => product.id !== id));
    } else if (operation === "add") {
      setExpandProduct([
        ...expandedProducts,
        {
          id,
        },
      ]);
    }
  };

  const variantExpandHandler = (id, operation) => {
    if (operation === "remove") {
      setExpandVariant(expandedVariants.filter((variant) => variant.id !== id));
    } else if (operation === "add") {
      setExpandVariant([
        ...expandedVariants,
        {
          id,
        },
      ]);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              {title}
            </h1>
          </div>
        </div>
        <Actions />
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 pb-80 align-middle sm:px-6 lg:px-8">
              <div className="min-w-full divide-y divide-gray-300">
                <div>
                  <div className="flex">
                    {columns.map((column) => (
                      <div
                        key={column}
                        scope="col"
                        className="w-1/5 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        {column}
                      </div>
                    ))}
                    <div
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Go </span>
                    </div>
                  </div>
                </div>
                <div>
                  {values.map((value) => (
                    <div
                      aria-controls={`product-${value.id}`}
                      aria-expanded="false"
                      className="cursor-pointer border-t border-solid border-gray-200"
                      key={value.id}
                    >
                      <div className="flex">
                        <div className="w-1/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {value.id}
                        </div>
                        <div className="w-3/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {value.title}
                        </div>
                        <div className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <span className="ml-6 flex items-center justify-end">
                            {expandedProducts.some(
                              (product) => product.id === `product-${value.id}`,
                            ) ? (
                              <svg
                                className="h-5 w-5 cursor-pointer"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                onClick={() => {
                                  productExpandHandler(
                                    `product-${value.id}`,
                                    "remove",
                                  );
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="h-5 w-5 cursor-pointer"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                onClick={() => {
                                  productExpandHandler(
                                    `product-${value.id}`,
                                    "add",
                                  );
                                }}
                              >
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                              </svg>
                            )}
                          </span>
                        </div>
                      </div>
                      {value.variants.length &&
                        expandedProducts.some(
                          (product) => product.id === `product-${value.id}`,
                        ) > 0 && (
                          <div
                            data-variants={`product-${value.id}`}
                            className="pl-8"
                          >
                            {value.variants.map((variant) => (
                              <div
                                aria-controls={`variant-${variant.id}`}
                                className="border-y border-solid border-gray-100"
                                aria-expanded="false"
                                key={variant.id}
                              >
                                <div className="flex">
                                  <div className="w-1/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {variant.id}
                                  </div>
                                  <div className="w-3/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    {variant.title}
                                  </div>
                                  <div className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <span className="ml-6 flex items-center justify-end">
                                      {expandedVariants.some(
                                        (expandedVariant) =>
                                          expandedVariant.id ===
                                          `variant-${variant.id}`,
                                      ) ? (
                                        <svg
                                          className="h-5 w-5 cursor-pointer"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                          data-remove
                                          onClick={() => {
                                            variantExpandHandler(
                                              `variant-${variant.id}`,
                                              "remove",
                                            );
                                          }}
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      ) : (
                                        <svg
                                          className="h-5 w-5 cursor-pointer"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                          data-add
                                          onClick={() => {
                                            variantExpandHandler(
                                              `variant-${variant.id}`,
                                              "add",
                                            );
                                          }}
                                        >
                                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                      )}
                                    </span>
                                  </div>
                                </div>
                                {expandedVariants.find(
                                  (expandedVariant) =>
                                    expandedVariant.id ===
                                    `variant-${variant.id}`,
                                ) && (
                                  <div data-locations className="pl-6">
                                    <div className="flex">
                                      <div className="w-1/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        1
                                      </div>
                                      <div className="w-1/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        Location 1
                                      </div>
                                      <div className="w-2/5">
                                        <select
                                          defaultValue="view_only"
                                          id="location"
                                          name="location"
                                          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                          <option value="view_only">
                                            View Only
                                          </option>
                                          <option value="add_to_cart">
                                            Add to cart
                                          </option>
                                        </select>
                                      </div>
                                      <div className="flex w-1/5 items-center justify-end">
                                        <input
                                          id="remember-me"
                                          name="remember-me"
                                          type="checkbox"
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex">
                                      <div className="w-1/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        2
                                      </div>
                                      <div className="w-1/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        Location 2
                                      </div>
                                      <div className="w-2/5">
                                        <select
                                          defaultValue="view_only"
                                          id="location"
                                          name="location"
                                          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                          <option value="view_only">
                                            View Only
                                          </option>
                                          <option value="add_to_cart">
                                            Add to cart
                                          </option>
                                        </select>
                                      </div>
                                      <div className="flex w-1/5 items-center justify-end">
                                        <input
                                          id="remember-me"
                                          name="remember-me"
                                          type="checkbox"
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
