
"use client";
import StockProfileForm from "@/components/users/StockProfileForm";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

"use client";

import { useCopilotReadable } from "@copilotkit/react-core";
import {
  useMakeCopilotDocumentReadable,
  DocumentPointer,
} from "@copilotkit/react-document";

// You can pass top-level data to the Copilot engine by calling `useCopilotReadable`.
const stockContextId = useCopilotReadable({
  description: "Stock name",
  value: stockName,
});

// Pass a parentID to maintain a hierarchical structure.
//
// This example is a bit artificial, but this sort of hierarchical data
// comes in handy with child React components, list elements, etc.
useCopilotReadable({
  description: "Stock work profile",
  value: workProfile.description(),
  parentId: stockContextId,
});
useCopilotReadable({
  description: "Stock metadata",
  value: metadata.description(),
  parentId: stockContextId,
});

useCopilotAction(
  {
    name: "setStocksAsSelected", // no spaces allowed in the function name
    description: "Set the given stocks as 'selected'",
    parameters: [
      {
        name: "stockIds",
        type: "string[]",
        description: "The IDs of stocks to set as selected",
        required: true,
      },
    ],
    handler: async ({ stockIds }) => setStocksAsSelected(stockIds),
  },
  []
);

const document: DocumentPointer = {
  id: "2",
  name: "Travel Pet Peeves",
  sourceApplication: "Google Docs",
  iconImageUri: "/images/GoogleDocs.svg",
  getContents: () => {
    return "hello document";
  },
} as DocumentPointer;

// ...then, in a react component:
useMakeCopilotDocumentReadable(document); // You can pass top-level data to the Copilot engine by calling `useCopilotReadable`.
const stockContextId = useCopilotReadable({
  description: "Stock name",
  value: stockName,
});

const page = () => {
  return (
    <div className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl lg:text-3xl mb-3">
          Register New User
        </h2>
        <p className="text-base lg:text-lg">
          Create a user that can use this application to effectively managing
          their stocks / inventories within their warehouses.
        </p>
        <div className="divider my-5"></div>
        <Comp></Comp>

        <StockProfileForm />
      </div>
    </div>
  );
};

function Comp({ children }) {
  return (
    <CopilotKit publicApiKey="/api/routes">

      <CopilotSidebar>{children}</CopilotSidebar>
    </CopilotKit>
    
  );
}

export default page;
