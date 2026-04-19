export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const res = await env.ASSETS.fetch(request);
    if (res.status !== 404) return res;

    const url = new URL(request.url);
    const last = url.pathname.split("/").pop() || "";
    const isFile = last.includes(".");
    if (isFile) return res;

    const indexReq = new Request(new URL("/index.html", url).toString(), request);
    return env.ASSETS.fetch(indexReq);
  },
};
