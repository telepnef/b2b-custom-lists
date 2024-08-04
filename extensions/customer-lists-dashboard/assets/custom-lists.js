class CustomLists extends HTMLElement {
  static observedAttributes = ["customer"];

  constructor() {
    super();
  }

  getListContent() {
    return {
      products: [
        {
          id: "7115154554966",
          title: "Product 1",
          variants: [
            {
              id: "983928389",
              title: "Variant test 1",
            },
            {
              id: "89398832",
              title: "Variant test 2",
            },
          ],
          locations: [
            {
              id: 23121,
              title: "Location 23",
            },
            {
              id: 9344,
              title: "Locations 91",
            },
          ],
        },
        {
          id: "53453",
          title: "Product 42341",

          locations: [
            {
              id: 2312231,
              title: "Location 235",
            },
          ],
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

    list.products.forEach((product) => {
      const variants = product.variants;

      // Product Wrapper
      let row = `<div
                  class="cursor-pointer border-y border-solid border-gray-200"
                  
                >
                  <div class="flex">
                    <div class="w-1/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">${product.id}</div>
                    <div class="w-3/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      ${product.title}
                    </div>
                    <div class="w-1/5 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <span class="ml-6 flex items-center justify-end" aria-controls='${product.variants ? `variants-${product.id}` : `locations-${product.id}`}'>
                        <!-- Expand icon, show/hide based on section open state. -->
                        <svg data-open aria-expanded="false" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <!-- Collapse icon, show/hide based on section open state. -->
                        <svg data-close aria-expanded="false" class="h-5 w-5 hidden" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                `;

      if (variants) {
        // Variants Wrapper
        row += `<div data-variants class="pl-8 hidden" id="variants-${product.id}">`;

        variants.forEach((variant, index) => {
          row += `<div class='${index === 0 ? "border-t" : "border-y"} border-solid border-gray-100'>
                    <div class="flex">
                      <div class="w-1/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">${variant.id}</div>
                      <div class="w-3/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        ${variant.title}
                      </div>
                      <div class="w-1/5 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <span class="ml-6 flex items-center justify-end" aria-controls='locations-${variant.id}'>
                          <!-- Expand icon, show/hide based on section open state. -->
                          <svg data-open class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <!-- Collapse icon, show/hide based on section open state. -->
                          <svg data-close class="h-5 w-5 hidden" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  `;
          row += `<div data-locations class="pl-6 hidden" id="locations-${variant.id}">`;

          product.locations.forEach((location) => {
            row += `<div class="flex">
                      <div class="w-2/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">${location.id}</div>
                      <div class="w-3/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        ${location.title}
                      </div>
                      <div class="w-2/5">
                        <select
                          id="location"
                          name="location"
                          class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option selected>View Only</option>
                          <option>Add to cart</option>
                        </select>
                      </div>
                      <div class="flex w-1/5 items-center justify-end">
                        <input
                          style="position: static;opacity: 1; pointer-events: all;"
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          class="!h-4 !w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-0"
                        >
                      </div>
                    </div>`;
          });
          row += `</div></div>`;
        });
      } else {
        // Locations Wrapper
        row += `<div data-locations class="pl-6 hidden" id="locations-${product.id}">`;
        product.locations.forEach((location) => {
          row += `<div class="flex">
                  <div class="w-2/5 whitespace-nowrap px-3 py-4 text-sm text-gray-500">${location.id}</div>
                  <div class="w-3/5 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    ${location.title}
                  </div>
                  <div class="w-2/5">
                    <select
                      id="location"
                      name="location"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option selected>View Only</option>
                      <option>Add to cart</option>
                    </select>
                  </div>
                  <div class="flex w-1/5 items-center justify-end">
                    <input
                      style="position: static;opacity: 1; pointer-events: all;"
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="!h-4 !w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-0"
                    >
                  </div>
                </div>`;
        });

        row += `</div>
              </div>
            </div>`;
      }

      table.insertAdjacentHTML("afterbegin", row);
    });
    table.querySelectorAll("[aria-controls]").forEach((control) => {
      console.log("control", control);
      control.addEventListener("click", (e) => {
        e.stopPropagation();
        const ariaControls = e.currentTarget.getAttribute("aria-controls");
        const ariaElement = document.getElementById(ariaControls);
        e.currentTarget.querySelector("[data-open]").classList.toggle("hidden");
        e.currentTarget
          .querySelector("[data-close]")
          .classList.toggle("hidden");

        ariaElement.classList.toggle("hidden");
      });
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(oldValue);
    console.log(name, newValue);
    if (name === "customer" && oldValue !== newValue) {
      this.populateRows(newValue);
    }
  }
}

customElements.define("custom-lists", CustomLists);
