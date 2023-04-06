const API_URL = 'http://localhost:8000/v1';

// async function httpGetOrganisms() {
//     const response = await fetch(`${API_URL}/organisms`);
//     return await response.json();
// }

async function httpSubmitCommonName(organism) {
    try {
        return await fetch(`${API_URL}/organisms/search?=${organism.commonName}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"commonName": organism.commonName}),
        })
    } catch(err) {
        return {
            ok: false
        }
    }
}

export {
    // httpGetOrganisms,
    httpSubmitCommonName
}