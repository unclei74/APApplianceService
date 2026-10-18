import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, pageMeta } from "../seo";

function setHead(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Keeps title, description and canonical in sync on client-side navigation. */
export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageMeta(pathname);
    document.title = meta.title;
    setHead('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), "content", meta.description);
    setHead('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", canonicalUrl(pathname));
  }, [pathname]);
  return null;
}
