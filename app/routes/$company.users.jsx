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
  return params.company; // "123"
}

export default function Users() {
  const companyId = useLoaderData();

  console.log("oifwjo");

  const users = [
    {
      id: "7115154554966",
      name: "Teresa Wallace",
      email: "adonmountcarmel@mowlamhealthcare.com",
    },
    // More people...
  ];

  return (
    <Dashboard current="Users" companyId={companyId}>
      <Table
        title="Users"
        description={`A list of all users for company ${companyId}`}
        companyId={companyId}
        columns={["ID", "Name", "Email"]}
        values={users}
        fields={["id", "name", "email"]}
        highLevelLink={true}
        destination="product-list"
      ></Table>
    </Dashboard>
  );
}
