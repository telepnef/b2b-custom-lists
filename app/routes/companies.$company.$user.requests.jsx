import { useEffect } from "react";
import { json } from "@remix-run/node";
import {
  useActionData,
  useNavigation,
  useSubmit,
  useLoaderData,
} from "@remix-run/react";
import { Page } from "@shopify/polaris";
import Dashboard from "../components/Dashboard";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import Table from "../components/Table";
export async function loader({ params }) {
  return {
    companyId: params.company,
    userId: params.user,
  }; // "123"
}

export default function UserRequests() {
  const { companyId, userId } = useLoaderData();

  const products = [
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
    },
    // More people...
  ];

  const requests = [
    {
      id: "23233",
      product_title: "Product 599539",
      variant_title: "Variant 23982",
      location: "Location 1",
    },
    {
      id: "54353",
      product_title: "Product 232332",
      variant_title: "Variant 988488",
      location: "Location 3",
    },
    // More people...
  ];

  return (
    <Dashboard current="Requests" companyId={companyId}>
      <Table
        title="Requests"
        description={`A list of all requests from user ${userId} for company ${companyId}`}
        columns={["ID", "Product Title", "Variant Title", "Location"]}
        values={requests}
        companyId={companyId}
        fields={["id", "product_title", "variant_title", "location"]}
        usesLink={false}
      ></Table>
    </Dashboard>
  );
}
