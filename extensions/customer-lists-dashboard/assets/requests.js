class RequestsList extends HTMLElement {
  static observedAttributes = ["customer"];

  constructor() {
    super();
  }

  getListContent() {
    return {
      requests: [
        {
          id: "7115154554966",
          product_title: "Product 123",
          variant_title: "Variant 329",
          location: "Location 23989",
        },
        {
          id: "7115154554966",
          product_title: "Product 123",
          variant_title: "Variant 329",
          location: "Location 23989",
        },
      ],
    };
  }

  handleDropdown(e) {
    console.log(e);
  }

  populateRows(id) {
    const table = this.querySelector("[data-body]");
    const list = this.getListContent();
    let tableContent = "";

    list.requests.forEach((request) => {
      // Product Wrapper
      tableContent += `<tr>
                    <td class="whitespace-nowrap py-4 pr-3 text-sm text-gray-500">${request.id}</td>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">${request.product_title}</td>
                    <td class="whitespace-nowrap py-4 pr-3 text-sm text-gray-500">${request.variant_title}</td>
                    <td class="whitespace-nowrap py-4 pr-3 text-sm text-gray-500">${request.location}</td>

                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button
                        type="button"
                        class="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        class="rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                      >
                        Reject
                      </button>
                    </td>

                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <input
                        style="position: static;opacity: 1; pointer-events: all;"
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="!h-4 !w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-0"
                      >
                    </td>
                  </tr>
                  `;
    });

    table.insertAdjacentHTML("afterbegin", tableContent);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(oldValue);
    console.log(name, newValue);
    if (name === "customer" && oldValue !== newValue) {
      this.populateRows(newValue);
    }
  }
}

customElements.define("requests-lists", RequestsList);
