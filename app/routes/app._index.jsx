import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Dashboard from "../components/Dashboard";
import Table from "../components/Table";
//import shopify from "../shopify.server";

// export async function loader({ request }) {
//   try {
//     const { admin } = await shopify.authenticate.admin(request);
//     const response = await admin.graphql(`
//     {
//       companies (first: 25) {
//         nodes {
//           id
//           name
//           mainContact {
//             customer {
//               firstName
//             }
//           }
//         }
//       }
//     }
//   `);

//     const parsedResponse = await response.json();

//     return json({
//       companies: parsedResponse.data.companies.nodes,
//     });
//   } catch (error) {
//     console.error("Error in loader:", error);
//     return json({ error: error.message }, { status: 500 });
//   }
// }

export default function Index() {
  // let { companies, error } = useLoaderData();

  // companies = companies.map((company) => ({
  //   id: company.id.slice(company.id.lastIndexOf("/") + 1),
  //   name: company.name,
  //   contact: company.mainContact?.customer?.firstName || "No Main Contact",
  // }));

  // if (error) {
  //   console.log(error);

  //   return;
  // }

  const companies = [
    {
      id: "605519958",
      name: "10008485 - NORTHEAST HYGIENE SUPPLIED LIMITED",
      contact: "Ger Smith (Supplies Officer)",
    },
    // More people...
  ];

  return (
    <Dashboard current="Companies">
      <Table
        title="Companies"
        description="A list of all companies"
        columns={["ID", "Name", "Main Contact"]}
        values={companies}
        fields={["id", "name", "contact"]}
        destination="users"
      ></Table>
    </Dashboard>
  );
}
