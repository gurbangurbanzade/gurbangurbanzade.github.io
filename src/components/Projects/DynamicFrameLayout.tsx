"use client";
import { useState, useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ExternalLink, LayoutTemplate } from "lucide-react";

export type ProjectFrame = {
  id: number;
  defaultPos: { x: number; y: number; w: number; h: number };
  mediaSize?: number;
  /** Şəkil (prioritet) — layihə asset-i və ya URL */
  image?: StaticImageData | string;
  video?: string;
  title?: string;
  description?: string;
  detailHref?: string;
  liveUrl?: string;
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  borderThickness?: number;
  borderSize?: number;
};

type FrameComponentProps = {
  frame: ProjectFrame;
  width: string;
  height: string;
  className?: string;
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  mediaSize?: number;
  borderThickness?: number;
  borderSize?: number;
  showFrame?: boolean;
  isHovered?: boolean;
};

function FrameComponent({
  frame,
  width,
  height,
  className = "",
  corner = "",
  edgeHorizontal = "",
  edgeVertical = "",
  mediaSize = 1,
  borderThickness = 0,
  borderSize = 100,
  showFrame = false,
  isHovered = false,
}: FrameComponentProps) {
  const {
    video,
    image,
    title,
    description,
    detailHref,
    liveUrl,
  } = frame;

  const hasOverlay = Boolean(title || description);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {image ? (
          <div
            className="absolute inset-0 overflow-hidden rounded-xl"
            style={{
              transition: "transform 0.45s cubic-bezier(0.33, 1, 0.68, 1)",
              transform: isHovered ? "scale(1.04)" : "scale(1)",
            }}
          >
            <Image
              src={image}
              alt={title || "Layihə"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={frame.id <= 3}
            />
          </div>
        ) : (
          <VideoInner
            video={video}
            mediaSize={mediaSize}
            showFrame={showFrame}
            borderThickness={borderThickness}
            borderSize={borderSize}
            isHovered={isHovered}
          />
        )}

        {showFrame && corner && (
          <FrameDecorations
            corner={corner}
            edgeHorizontal={edgeHorizontal}
            edgeVertical={edgeVertical}
          />
        )}

        {hasOverlay && (
          <div
            className={`pointer-events-none absolute inset-0 z-[5] flex flex-col justify-end rounded-xl p-4 transition-all duration-300 ease-out md:p-6 ${
              isHovered ? "opacity-100" : "opacity-0 max-md:opacity-100"
            }`}
          >
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-transparent max-md:from-zinc-950/85"
              aria-hidden
            />
            <div
              className={`relative z-[6] space-y-3 transition-all duration-300 ease-out ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0 max-md:translate-y-0 max-md:opacity-100"
              }`}
            >
              {title ? (
                <h3 className="text-base font-semibold tracking-tight text-white drop-shadow-sm md:text-lg">
                  {title}
                </h3>
              ) : null}
              {description ? (
                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-300 md:line-clamp-3">
                  {description}
                </p>
              ) : null}
              <div className="pointer-events-auto flex flex-wrap gap-2 pt-1">
                {detailHref ? (
                  <Link
                    href={detailHref}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md transition hover:border-white/25 hover:bg-white/18 md:px-4 md:text-sm"
                  >
                    <LayoutTemplate className="h-3.5 w-3.5 opacity-90" />
                    Ətraflı
                  </Link>
                ) : null}
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-color,#a855f7)]/35 bg-[var(--accent-color,#a855f7)]/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-[var(--accent-color,#a855f7)]/35 md:px-4 md:text-sm"
                  >
                    Saytı aç
                    <ExternalLink className="h-3.5 w-3.5 opacity-90" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function VideoInner({
  video,
  mediaSize,
  showFrame,
  borderThickness,
  borderSize,
  isHovered,
}: {
  video?: string;
  mediaSize: number;
  showFrame: boolean;
  borderThickness: number;
  borderSize: number;
  isHovered: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !video) return;
    if (isHovered) {
      void videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isHovered, video]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          zIndex: 1,
          transition: "all 0.3s ease-in-out",
          padding: showFrame ? `${borderThickness}px` : "0",
          width: showFrame ? `${borderSize}%` : "100%",
          height: showFrame ? `${borderSize}%` : "100%",
          left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
        }}
      >
        <div
          className="h-full w-full overflow-hidden"
          style={{
            transform: `scale(${mediaSize})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {video ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={video}
              loop
              muted
              playsInline
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FrameDecorations({
  corner,
  edgeHorizontal,
  edgeVertical,
}: {
  corner: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
}) {
  return (
    <div className="absolute inset-0" style={{ zIndex: 2 }}>
      <div
        className="absolute left-0 top-0 h-16 w-16 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${corner})` }}
      />
      <div
        className="absolute right-0 top-0 h-16 w-16 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${corner})`,
          transform: "scaleX(-1)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${corner})`,
          transform: "scaleY(-1)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-16 w-16 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${corner})`,
          transform: "scale(-1, -1)",
        }}
      />

      {edgeHorizontal ? (
        <>
          <div
            className="absolute left-16 right-16 top-0 h-16"
            style={{
              backgroundImage: `url(${edgeHorizontal})`,
              backgroundSize: "auto 64px",
              backgroundRepeat: "repeat-x",
            }}
          />
          <div
            className="absolute bottom-0 left-16 right-16 h-16"
            style={{
              backgroundImage: `url(${edgeHorizontal})`,
              backgroundSize: "auto 64px",
              backgroundRepeat: "repeat-x",
              transform: "rotate(180deg)",
            }}
          />
        </>
      ) : null}

      {edgeVertical ? (
        <>
          <div
            className="absolute bottom-16 left-0 top-16 w-16"
            style={{
              backgroundImage: `url(${edgeVertical})`,
              backgroundSize: "64px auto",
              backgroundRepeat: "repeat-y",
            }}
          />
          <div
            className="absolute bottom-16 right-0 top-16 w-16"
            style={{
              backgroundImage: `url(${edgeVertical})`,
              backgroundSize: "64px auto",
              backgroundRepeat: "repeat-y",
              transform: "scaleX(-1)",
            }}
          />
        </>
      ) : null}
    </div>
  );
}

type DynamicFrameLayoutProps = {
  frames: ProjectFrame[];
  className?: string;
  style?: React.CSSProperties;
  showFrames?: boolean;
  hoverSize?: number;
  gapSize?: number;
  /** Şəbəkə ölçüsü (default 3×3) */
  gridRows?: number;
  gridCols?: number;
};

export function DynamicFrameLayout({
  frames,
  className = "",
  style,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4,
  gridRows = 3,
  gridCols = 3,
}: DynamicFrameLayoutProps) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null
  );

  const unit = 12 / gridCols;
  const rowUnit = 12 / gridRows;

  const getRowSizes = () => {
    if (gridRows === 1) return "1fr";
    if (hovered === null) {
      return Array.from({ length: gridRows }, () => `${rowUnit}fr`).join(" ");
    }
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / (gridRows - 1);
    return Array.from({ length: gridRows }, (_, r) =>
      r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`
    ).join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) {
      return Array.from({ length: gridCols }, () => `${unit}fr`).join(" ");
    }
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / (gridCols - 1);
    return Array.from({ length: gridCols }, (_, c) =>
      c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`
    ).join(" ");
  };

  const getTransformOrigin = (x: number, y: number) => {
    const vertical =
      y === 0 ? "top" : y >= (gridRows - 1) * 4 ? "bottom" : "center";
    const horizontal =
      x === 0 ? "left" : x >= (gridCols - 1) * 4 ? "right" : "center";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={`relative h-full w-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition:
          "grid-template-rows 0.4s cubic-bezier(0.33, 1, 0.68, 1), grid-template-columns 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(
          frame.defaultPos.x,
          frame.defaultPos.y
        );

        return (
          <div
            key={frame.id}
            className="relative min-h-0 min-w-0"
            style={{
              transformOrigin,
              transition: "transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              frame={frame}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner || ""}
              edgeHorizontal={frame.edgeHorizontal || ""}
              edgeVertical={frame.edgeVertical || ""}
              mediaSize={frame.mediaSize || 1}
              borderThickness={frame.borderThickness || 0}
              borderSize={frame.borderSize || 100}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </div>
        );
      })}
    </div>
  );
}
