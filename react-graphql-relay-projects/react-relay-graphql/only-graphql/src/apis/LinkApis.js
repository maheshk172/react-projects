
import { receiveLinks } from '../actions/ServerActions';

const baseURL = "http://localhost:3001"

const getAllLinksQuery = JSON.stringify({
    query: `{
      links {
          _id,
          title,
          url
      }  
    }`
});

function getLinks() {
    // Rest Way
    // return fetch(`${baseURL}/data/links`)
    //     .then(handleResponse)
    //     .catch(handleError);

    // GraphQL Way
    return fetch(`${baseURL}/graphql`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: getAllLinksQuery
    })
        .then(handleResponse)
        .catch(handleError);
}

async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
function handleError(error) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
}

export function getLinksFirst() {
    getLinks().then(response => {
        console.log('response', response);
        receiveLinks(response.data.links);
    });
}


