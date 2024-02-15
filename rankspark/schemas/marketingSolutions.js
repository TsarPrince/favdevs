export default {
  name: "marketingSolutions",
  title: "Marketing Solutions",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // header
    {
      name: "header",
      title: "Header",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "mainImage",
          title: "Main image",
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          name: "button",
          title: "Button",
          type: "reference",
          to: [{ type: "button" }],
        },
      ],
    },
    // features
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  description: "Important for SEO and accessiblity.",
                },
              ],
              options: {
                hotspot: true,
              },
            },
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "CTA Button", value: "ctaButton" },
                  { title: "List", value: "list" },
                  { title: "Metrics", value: "metrics" },
                ],
              },
            },
            {
              name: "button",
              title: "Button",
              type: "reference",
              to: [{ type: "button" }],
              hidden: ({ parent }) => parent?.type !== "ctaButton",
            },
            {
              name: "list",
              title: "List",
              type: "array",
              of: [{ type: "string" }],
              hidden: ({ parent }) => parent?.type !== "list",
            },
            {
              name: "metrics",
              title: "Metrics",
              type: "object",
              fields: [
                {
                  name: "key",
                  title: "Key",
                  type: "string",
                },
                {
                  name: "value",
                  title: "Value",
                  type: "number",
                },
                {
                  name: "symbol",
                  title: "Symbol",
                  type: "string",
                },
              ],
              hidden: ({ parent }) => parent?.type !== "metrics",
            },
          ],
        },
      ],
    },
    // featuresGrid
    {
      name: "featuresGrid",
      title: "Features Grid",
      type: "object",
      options: {
        collapsible: true,
      },
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
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // faqs
    {
      name: "faqs",
      title: "FAQs",
      type: "object",
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
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "header.mainImage",
    },
  },
};
