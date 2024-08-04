import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import { Page } from "@shopify/polaris";
import Dashboard from "../components/Dashboard";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import Table from "../components/Table";
// import shopify from "../shopify.server";

// export async function loader({ request }) {
//   const { admin } = await shopify.authenticate.admin(request);
//   const response = await admin.graphql(`
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

//   const parsedResponse = await response.json();

//   return json({
//     companies: parsedResponse.data.companies.nodes,
//   });
// }

export default function Organizations() {
  // let { companies } = useLoaderData();

  // companies = companies.map((company) => ({
  //   id: company.id.slice(company.id.lastIndexOf("/") + 1),
  //   name: company.name,
  //   contact: company.mainContact?.customer?.firstName || "No Main Contact",
  // }));

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
