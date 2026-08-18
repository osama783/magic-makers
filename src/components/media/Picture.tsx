import { useEffect, useRef, useState, type CSSProperties } from "react";
import { photos, PHOTO_BASE, type PhotoAssetId, type PhotoFormat } from "@/assets/photos.registry";
import { requestDecode } from "@/lib/media/loadCoordinator";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export type PictureAspect = "1:1" | "3:2" | "4:5" | "16:9" | "native";

export interface PictureProps {
  id: PhotoAssetId;
  /** Required: drives srcset selection across breakpoints. */
  sizes: string;
  className?: string;
  /** Override the registry alt. Pass "" explicitly for decorative use. */
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
  aspect?: PictureAspect;
}

/** The ONLY place that references PHOTO_BASE or builds photo srcsets. */
const FORMAT_ORDER: PhotoFormat[] = ["avif", "webp", "jpg"];

const MIME: Record<PhotoFormat, string> = {
  avif: "image/avif",
  webp: "image/webp",
  jpg: "image/jpeg",
};

const ASPECT_RATIO: Record<Exclude<PictureAspect, "native">, string> = {
  "1:1": "1 / 1",
  "3:2": "3 / 2",
  "4:5": "4 / 5",
  "16:9": "16 / 9",
};

function srcFor(id: PhotoAssetId, width: number, format: PhotoFormat): string {
  return `${PHOTO_BASE}/${id}-${width}.${format}`;
}

export function Picture({
  id,
  sizes,
  className,
  alt,
  priority,
  objectPosition = "center",
  aspect = "native",
}: PictureProps) {
  const asset = photos[id];
  const reducedMotion = useStore((s) => s.reducedMotion);
  const saveData = useStore((s) => s.saveData);
  const isPriority = priority ?? asset.priority === "lcp";

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(reducedMotion);

  // Save-Data: request only the smallest shipped width; otherwise offer all.
  const widths = saveData ? [Math.min(...asset.widths)] : asset.widths;
  const fallbackWidth = saveData ? Math.min(...asset.widths) : Math.max(...asset.widths);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setLoaded(true);
    };
    if (img.complete) {
      finish();
      return;
    }
    if (isPriority) {
      void requestDecode(img).then(finish);
    } else {
      img.addEventListener("load", finish, { once: true });
      img.addEventListener("error", finish, { once: true });
    }
    return () => {
      cancelled = true;
    };
  }, [id, isPriority]);

  const wrapperStyle: CSSProperties = {
    backgroundColor: asset.dominant,
    aspectRatio: aspect === "native" ? `${asset.width} / ${asset.height}` : ASPECT_RATIO[aspect],
  };

  const imgStyle: CSSProperties = {
    objectPosition,
    opacity: reducedMotion || loaded ? 1 : 0,
    transitionProperty: reducedMotion ? "none" : "opacity",
    transitionDuration: "var(--dur-short, 300ms)",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div className={cn("relative overflow-hidden", className)} style={wrapperStyle}>
      <picture>
        {FORMAT_ORDER.filter((f) => asset.formats.includes(f)).map((format) => (
          <source
            key={format}
            type={MIME[format]}
            sizes={sizes}
            srcSet={widths.map((w) => `${srcFor(id, w, format)} ${w}w`).join(", ")}
          />
        ))}
        <img
          ref={imgRef}
          src={srcFor(id, fallbackWidth, "jpg")}
          alt={alt ?? asset.alt}
          width={asset.width}
          height={asset.height}
          sizes={sizes}
          decoding="async"
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "low"}
          className="absolute inset-0 h-full w-full object-cover"
          style={imgStyle}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
}

export default Picture;
