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
import FileInput from "../components/FileInput";

export default function Users() {
  return (
    <Dashboard current="Import">
      <FileInput />
    </Dashboard>
  );
}
