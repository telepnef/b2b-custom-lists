class Users extends HTMLElement {
  constructor() {
    super();

    this.values = [];
    this.fields = this.dataset.fields.split(", ");
    this.target = this.dataset.target;
  }

  determineTarget() {
    if (this.target === "custom-lists") {
      this.values = [
        {
          id: "7115154554966",
          name: "Teresa Wallace",
          email: "adonmountcarmel@mowlamhealthcare.com",
        },
        // More people...
      ];
    } else if (this.target === "requests") {
      this.values = [
        {
          id: "37732823",
          name: "User 1",
          email: "email@mowlamhealthcare.com",
        },
        // More people...
      ];
    } else if (this.target === "requests-archive") {
      this.values = [
        {
          id: "55252",
          name: "User 15",
          email: "emailewfwfwfw@mowlamhealthcare.com",
        },
        // More people...
      ];
    }
  }

  connectedCallback() {
    this.determineTarget();
    this.populateRows();
  }

  populateRows() {
    const table = this.querySelector("[data-body]");
    this.values.forEach((value) => {
      let row = `<tr>`;

      this.fields.forEach((field) => {
        row += `<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${value[field]}</td>`;
      });
      row += `<td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a data-id="${value.id}" href="#${this.target}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
              </tr>`;
      table.insertAdjacentHTML("afterbegin", row);

      // document
      //   .querySelector(`[data-id="${value.id}"]`)
      //   .addEventListener("click", (e) => {
      //     e.preventDefault();
      //     const targetId = e.currentTarget.dataset.id;
      //     console.log(document.getElementById(this.target));
      //     this.classList.add("hidden");
      //     document.getElementById(this.target).classList.remove("hidden");
      //   });
    });
  }
}

customElements.define("users-list", Users);
