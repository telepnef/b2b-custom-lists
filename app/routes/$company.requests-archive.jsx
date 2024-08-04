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

export default function Requests() {
  const companyId = useLoaderData();

  const users = [
    {
      id: "7115154554966",
      name: "Teresa Wallace",
      email: "adonmountcarmel@mowlamhealthcare.com",
    },
    // More people...
  ];

  return (
    <Dashboard current="Requests Archive" companyId={companyId}>
      <Table
        title="Users"
        description={`A list of all users who requested access to the customer's list (archived)`}
        columns={["ID", "Name", "Email"]}
        values={users}
        companyId={companyId}
        fields={["id", "name", "email"]}
        highLevelLink={true}
        destination="requests-archive"
        linkText="View"
      ></Table>
    </Dashboard>
  );
}
