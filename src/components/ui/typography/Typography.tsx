import { cn } from "~/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4";
}

export function Heading(props: HeadingProps) {
  const { type = "h1", className, ...rest } = props;
  const CLASSES = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
  };
  const headingClassname = cn(CLASSES[type], className);
  const CustomTag = type;

  return (
    <CustomTag className={headingClassname} {...rest}>
      {props.children}
    </CustomTag>
  );
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Paragraph(props: ParagraphProps) {
  const { className, ...rest } = props;
  const paragraphClassname = cn(
    "leading-7 [&:not(:first-child)]:mt-4",
    className
  );

  return (
    <p className={paragraphClassname} {...rest}>
      {props.children}
    </p>
  );
}

interface TypographyLargeProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function TypographyLarge(props: TypographyLargeProps) {
  const { className, ...rest } = props;
  const typographyLargeClassname = cn(
    "text-lg font-semibold text-gray-900 dark:text-gray-50",
    className
  );

  return (
    <p className={typographyLargeClassname} {...rest}>
      {props.children}
    </p>
  );
}

interface TypographySmallProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function TypographySmall(props: TypographySmallProps) {
  const { className, ...rest } = props;
  const typographyLargeClassname = cn(
    "text-sm font-medium leading-none",
    className
  );

  return (
    <p className={typographyLargeClassname} {...rest}>
      {props.children}
    </p>
  );
}

interface TypographySubtleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function TypographySubtle(props: TypographySubtleProps) {
  const { className, ...rest } = props;
  const typographyLargeClassname = cn(
    "text-sm text-gray-500 dark:text-gray-400",
    className
  );

  return (
    <p className={typographyLargeClassname} {...rest}>
      {props.children}
    </p>
  );
}
