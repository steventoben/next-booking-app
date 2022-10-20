import * as Client from "@elastic/elasticsearch";
export const client = new Client.Client({
    cloud: {
        id: 'my-app:dXMtZWFzdC0yLmF3cy5lbGFzdGljLWNsb3VkLmNvbTo0NDMkMDNkMjczNDE2MmUzNDYxNGIyYmFkOWJlYWRhOGQ3ZTgkNWVlMGI5MTZiZjA3NDEyY2EwOGFjODZkZmVkZTM5MjY='
    },
    auth: {
        apiKey: 'SFBjS1RvTUJGMy1UenhLNWxUZkk6akxvbDlrTWxUdG1UbnRhRlhKUmR0Zw=='
    }
});
client.search({q: ""})
