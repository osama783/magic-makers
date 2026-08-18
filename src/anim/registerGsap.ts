/**
 * Registers GSAP plugins and the three named MagicMinds eases exactly once.
 * No timelines or scenes may live in this file.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import { easeBeziers, gsapEaseNames } from "./tokens";

// NOTE: InertiaPlugin is a GSAP Club-only plugin and is not part of the public
// npm package. Register it here alongside the others when the club build is added.

let registered = false;

export function registerGsap() {
  if (registered) return;
  registered = true;

  gsap.registerPlugin(ScrollTrigger, Draggable, Flip, CustomEase);

  const toPath = ([x1, y1, x2, y2]: readonly number[]) =>
    `M0,0 C${x1},${y1} ${x2},${y2} 1,1`;

  CustomEase.create(gsapEaseNames.reveal, toPath(easeBeziers.reveal));
  CustomEase.create(gsapEaseNames.dolly, toPath(easeBeziers.dolly));
  CustomEase.create(gsapEaseNames.micro, toPath(easeBeziers.micro));
}
