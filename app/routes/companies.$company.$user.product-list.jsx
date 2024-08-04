import { useLoaderData } from "@remix-run/react";
import Dashboard from "../components/Dashboard";
import TableCustom from "../components/TableCustom";

export async function loader({ params }) {
  return {
    companyId: params.company,
    userId: params.user,
  }; // "123"
}

export default function ProductsList() {
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

  return (
    <Dashboard current="Users" companyId={companyId}>
      <TableCustom
        title={`Products for a user ${userId}`}
        columns={["ID", "Title"]}
        values={products}
      />
    </Dashboard>
  );
}
