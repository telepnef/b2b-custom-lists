class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.current = "Users";

    this.navigation = [
      {
        id: "users",
        href: `#users`,
        current: true,
        children: {
          id: "custom-lists",
          href: "#custom-lists",
          current: false,
        },
      },
      {
        id: "users-requests",
        href: `#users-requests`,
        current: false,
        children: {
          id: "requests",
          href: "#requests",
          current: false,
        },
      },
      {
        id: "users-requests-archive",
        href: `#users-requests-archive`,
        current: false,
        children: {
          id: "requests-archive",
          href: `#requests-archive`,
          current: false,
        },
      },
      {
        id: "import",
        href: `#import`,
        current: false,
      },
    ];

    this.linkActiveClass = "bg-indigo-700 text-white";
    this.linkInactiveClass =
      "text-indigo-200 hover:bg-indigo-700 hover:text-white";
  }

  connectedCallback() {
    this.eventListeners();
  }

  eventListeners() {
    this.navigation.forEach((nav, index) => {
      this.querySelectorAll(`[href="${nav.href}"]`).forEach((navElement) => {
        navElement.addEventListener("click", (e) => {
          this.handleNavigation(index, e);
        });
      });

      const navChildren = nav.children;
      if (navChildren) {
        this.querySelectorAll(`[href="${navChildren.href}"]`).forEach(
          (navChildrenElement) => {
            navChildrenElement.addEventListener("click", (e) => {
              this.handleNavigation(index, e, true);
              document
                .getElementById(`${navChildren.id}`)
                .setAttribute("customer", navChildrenElement.dataset.id);
            });
          },
        );
      }
    });

    // For dynamically added links
    document.body.addEventListener("click", (e) => {
      if (e.target.hasAttribute("href")) {
        const targetNavItem = this.navigation.find(
          (navItem) => navItem.children?.href === e.target.getAttribute("href"),
        );
        const targetNavItemIndex = this.navigation.findIndex(
          (navItem) => navItem.children?.href === e.target.getAttribute("href"),
        );
        if (targetNavItem) {
          this.handleNavigation(targetNavItemIndex, e, true);
          console.log(document.getElementById(`${targetNavItem.id}`));
          document
            .getElementById(`${targetNavItem.children.id}`)
            .setAttribute("customer", e.target.dataset.id);
        }
      }
    });
  }

  handleNavigation(index, e, isChild = false) {
    e.preventDefault();

    // Disable previous active Link
    const previousActive =
      this.navigation[
        this.navigation.findIndex(
          (element) =>
            element.current === true || element.children?.current === true,
        )
      ];

    previousActive.current = false;

    this.querySelectorAll(`[href="${previousActive.href}"]`).forEach(
      (prevActive) => {
        prevActive.classList.remove(...this.linkActiveClass.split(" "));
        prevActive.classList.add(...this.linkInactiveClass.split(" "));
      },
    );

    if (previousActive.children) {
      previousActive.children.current = false;

      document
        .getElementById(previousActive.children.id)
        .classList.add("hidden");
      this.querySelectorAll(
        `.b2b-sidebar [data-href="${previousActive.children.href}"]`,
      ).forEach((childLink) => {
        childLink.classList.add("hidden");
      });
    }
    document.getElementById(previousActive.id).classList.add("hidden");

    // Set new active link (sublink)
    const newActive = this.navigation[index];
    newActive.current = true;

    this.querySelectorAll(`[href="${newActive.href}"]`).forEach((active) => {
      active.classList.add(...this.linkActiveClass.split(" "));
      active.classList.remove(...this.linkInactiveClass.split(" "));
    });

    if (isChild) {
      newActive.children.current = true;
      this.querySelectorAll(
        `.b2b-sidebar [data-href="${newActive.children.href}"]`,
      ).forEach((childLink) => {
        childLink.classList.remove("hidden");
      });
      document.getElementById(newActive.children.id).classList.remove("hidden");
    } else {
      document.getElementById(newActive.id).classList.remove("hidden");
    }
  }
}

customElements.define("b2b-dashboard", Dashboard);
