"use client";

import { useCopilotReadable } from "@copilotkit/react-core";
import {
    useMakeCopilotDocumentReadable,
    DocumentPointer,
} from "@copilotkit/react-document";

// You can pass top-level data to the Copilot engine by calling `useCopilotReadable`.
const studentContextId = useCopilotReadable({
    description: "Student name",
    value: studentName,
});

// Pass a parentID to maintain a hiearchical structure.
//
// This example is a bit artificial, but this sort of hiearchical data
// comes in handy with child React components, list elements, etc.
useCopilotReadable({
    description: "Student work profile",
    value: workProfile.description(),
    parentId: studentContextId,
});
useCopilotReadable({
    description: "Student metadata",
    value: metadata.description(),
    parentId: studentContextId,
});

useCopilotAction(
    {
      name: "setStudentsAsSelected", // no spaces allowed in the function name
      description: "Set the given students as 'selected'",
      parameters: [
        {
          name: "studentIds",
          type: "string[]",
          description: "The IDs of students to set as selected",
          required: true,
        },
      ],
      handler: async ({ studentIds }) => setStudentsAsSelected(studentIds),
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
const studentContextId = useCopilotReadable({
    description: "Student name",
    value: studentName,
});
