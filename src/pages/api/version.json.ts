import type { APIContext, APIRoute } from "astro";

export const get: APIRoute = ({ params }: APIContext) => {
    return {
        body: JSON.stringify({
            "Sopas": "Taesan",
        })
    }
}
