import { test, expect } from "@playwright/test";
test("get api", async ({ request }) => {
    //get response with authorization
    const getResponse = request.get("https://api.restful-api.dev/objects", {
        headers: {
            'Authorization': 'Bearer --yourToken--',
            'Accept': 'application/json'
        }
    });
    //testing response status code
    expect((await getResponse).status()).toBe(200);
    //testing response body
    const jsonData = await (await getResponse).json();
    console.log(jsonData);
    expect(jsonData[0]).toHaveProperty("id");
    expect(jsonData[0].id).toBe("1");
    //testing response headers
    let getHeaders = (await getResponse).headers();
    console.log(getHeaders);
    expect(getHeaders).toHaveProperty('server');
    expect(getHeaders['server']).toBe('cloudflare');
});