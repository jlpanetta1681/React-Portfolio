/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "project",
    title: "project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "personal" },
                    { value: "client", title: "Client" },
                    { value: "school", title: "School" },
                ]
            }
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags"
            }
        }
    ]
};