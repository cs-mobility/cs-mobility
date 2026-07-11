import type { MouseEvent } from "react";

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", hash);
  return true;
}

export function handleHashClick(
  event: MouseEvent<HTMLAnchorElement>,
  hash: string,
) {
  event.preventDefault();
  scrollToHash(hash);
}
