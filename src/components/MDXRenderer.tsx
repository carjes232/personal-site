"use client";

import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  a: ({ className, href = "#", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className={cn(
        "font-semibold text-hud-accent underline-offset-4 transition hover:text-hud-accent-strong hover:underline",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-12 text-3xl font-semibold text-hud-text first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn("mt-8 text-2xl font-semibold text-hud-text", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mt-4 text-base leading-relaxed text-hud-subtle", className)} {...props} />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "mt-4 list-disc space-y-3 pl-6 text-base text-hud-subtle marker:text-hud-accent",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "mt-4 list-decimal space-y-3 pl-6 text-base text-hud-subtle marker:text-hud-accent",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <li className={cn("text-hud-subtle", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-hud-accent/60 pl-4 text-base italic text-hud-subtle",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "rounded-md bg-hud-border/40 px-1.5 py-0.5 text-sm text-hud-accent",
        className,
      )}
      {...props}
    />
  ),
};

interface MDXRendererProps {
  code: string;
}

export function MDXRenderer({ code }: MDXRendererProps) {
  const MDX = useMDXComponent(code);
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-strong:text-hud-text">
      <MDX components={components} />
    </div>
  );
}
