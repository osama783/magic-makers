import { useEffect } from "react";
// Vite raw import — the sprite lives in src/assets/doodles/.
import spriteMarkup from "@/assets/doodles/mm-doodles.svg?raw";

const SPRITE_NODE_ID = "mm-doodle-sprite";

/** Injects the <symbol> sprite into <body> exactly once. Mounted in Providers. */
export function DoodleSprite() {
  useEffect(() => {
    if (document.getElementById(SPRITE_NODE_ID)) return;
    const host = document.createElement("div");
    host.id = SPRITE_NODE_ID;
    host.setAttribute("aria-hidden", "true");
    host.style.display = "none";
    host.innerHTML = spriteMarkup;
    document.body.appendChild(host);
  }, []);

  return null;
}

export default DoodleSprite;
