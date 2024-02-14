import { DocumentTextIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "faqs",
  title: "FAQs",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});
