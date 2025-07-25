# Chapter 3: Tailwind CSS and ShadCN UI

Welcome back! In the previous chapter, [React Server Components and Server Actions](02_react_server_components_and_server_actions.md), we learned how to handle data fetching and form submissions efficiently. Now, let's talk about making our YC Directory look good! This is where **Tailwind CSS** and **ShadCN UI** come in.

Imagine you're building the homepage of the YC Directory. You want the buttons to be a specific color, the text to have a certain font, and the layout to be visually appealing. Without a styling framework, you'd have to write a lot of CSS code from scratch. Tailwind CSS and ShadCN UI simplify this process, helping us create a consistent and beautiful user interface with much less effort.

## What are Tailwind CSS and ShadCN UI?

Think of Tailwind CSS and ShadCN UI as a powerful styling duo:

*   **Tailwind CSS: The Lego Bricks**

    Tailwind CSS is a **utility-first CSS framework**.  Instead of writing custom CSS for every element, you use pre-defined "utility classes" to style your components.  Think of it as having a set of Lego bricks, each with a specific function (color, size, margin, etc.). You combine these bricks to build your UI.

    For example, instead of writing CSS like this:

    ```css
    .my-button {
      background-color: blue;
      color: white;
      padding: 10px 20px;
    }
    ```

    You can use Tailwind CSS classes like this:

    ```html
    <button class="bg-blue-500 text-white px-4 py-2">Click me</button>
    ```

    `bg-blue-500` sets the background color to blue, `text-white` sets the text color to white, `px-4` adds horizontal padding, and `py-2` adds vertical padding.

*   **ShadCN UI: The Pre-Built Lego Models**

    ShadCN UI is a collection of accessible and reusable React components. These components are built using Radix UI primitives (accessible UI building blocks) and styled with Tailwind CSS. Think of it as having pre-built Lego models, ready to be assembled into your application.

    For example, ShadCN UI provides a `Button` component that's already styled and accessible:

    ```tsx
    import { Button } from "@/components/ui/button"

    function MyComponent() {
      return <Button>Click me</Button>
    }
    ```

    This button will have a default style, but you can easily customize it using Tailwind CSS classes.

## Why Use Tailwind CSS and ShadCN UI?

*   **Consistency:** Tailwind CSS enforces a consistent design language across your application.
*   **Speed:**  You can style components much faster using pre-defined utility classes and components.
*   **Customization:**  Tailwind CSS is highly customizable. You can configure it to match your brand's colors, fonts, and spacing. ShadCN UI components are also easy to customize with Tailwind CSS classes.
*   **Accessibility:** ShadCN UI components are built with accessibility in mind, ensuring that your application is usable by everyone.

## Setting Up Tailwind CSS

Tailwind CSS is already configured in `YC_Directory`. Let's take a look at some key files.

**1. `tailwind.config.js`:** This file configures Tailwind CSS, allowing you to customize colors, fonts, and other settings.

```js
// @ts-check

/** @type {import('tailwindcss').Config} */

const Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFE8F0",
          DEFAULT: "#EE2B69",
        },
        secondary: "#FBE843",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default Config;
```

**Explanation:**

*   `content`: Specifies the files that Tailwind CSS should scan for utility classes.
*   `theme.extend.colors`:  Defines custom colors, such as `primary` and `secondary`, that you can use in your application.
*   `plugins`:  Adds extra functionality to Tailwind CSS, such as animations (`tailwindcss-animate`) and typography styles (`@tailwindcss/typography`).

**2. `postcss.config.js`:** This file configures PostCSS, a tool that Tailwind CSS uses to process your CSS.

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Explanation:**

*   `tailwindcss: {}`:  Tells PostCSS to use Tailwind CSS.
*   `autoprefixer: {}`:  Automatically adds vendor prefixes to your CSS, ensuring compatibility with different browsers.

**3. `app/globals.css`:** This file imports the Tailwind CSS base styles.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Explanation:**

*   `@tailwind base`:  Imports the base styles from Tailwind CSS, which normalize the appearance of different HTML elements.
*   `@tailwind components`:  Imports the component styles from Tailwind CSS, which provide pre-defined styles for common UI components.
*   `@tailwind utilities`: Imports the utility classes from Tailwind CSS, which you'll use to style your components.

## Using Tailwind CSS to Style a Button

Let's add some Tailwind CSS classes to a button:

```tsx
<button className="bg-primary text-white font-bold py-2 px-4 rounded">
  Submit
</button>
```

**Explanation:**

*   `bg-primary`:  Sets the background color to the `primary` color defined in `tailwind.config.js` (which is `#EE2B69` in this project).
*   `text-white`: Sets the text color to white.
*   `font-bold`:  Makes the text bold.
*   `py-2`:  Adds vertical padding of 0.5rem (8px).
*   `px-4`: Adds horizontal padding of 1rem (16px).
*   `rounded`:  Adds rounded corners to the button.

The result is a button with a pink background, white text, bold font, padding, and rounded corners!

## Using ShadCN UI Components

ShadCN UI provides pre-built, styled components that you can easily use in your application.

**1. Using the `Button` Component:**

Let's replace the plain HTML button with ShadCN UI's `Button` component:

```tsx
import { Button } from "@/components/ui/button"

function MyComponent() {
  return <Button>Click me</Button>
}
```

**Explanation:**

*   We import the `Button` component from `@/components/ui/button`. This path tells us that the component file is `components/ui/button.tsx`
*   We use the `Button` component in our `MyComponent` function.

The `Button` component will now have a default style defined by ShadCN UI.

**2. Customizing ShadCN UI Components with Tailwind CSS:**

You can customize ShadCN UI components by adding Tailwind CSS classes to them:

```tsx
import { Button } from "@/components/ui/button"

function MyComponent() {
  return <Button className="bg-secondary text-black hover:bg-secondary/80">Click me</Button>
}
```

**Explanation:**

*   We add the `className` prop to the `Button` component.
*   We add Tailwind CSS classes to the `className` prop:
    *   `bg-secondary`: Sets the background color to the `secondary` color defined in `tailwind.config.js` (which is `#FBE843` in this project).
    *   `text-black`: Sets the text color to black.
    *   `hover:bg-secondary/80`:  Changes the background color to a slightly darker shade of `secondary` on hover.

Now, the button will have a yellow background, black text, and a slightly darker yellow background on hover!

## Diving Deeper: ShadCN UI Button Implementation

Let's take a quick look at the code behind the ShadCN UI `Button` component (`components/ui/button.tsx`):

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

**Explanation:**

*   `cva` (from `class-variance-authority`) is a utility for creating reusable component variants with different styles. This is a more advanced topic, but essentially it's how ShadCN UI allows you to easily create different button styles (e.g., primary, secondary, outline).
*   `buttonVariants` defines the different styles (variants) and sizes for the button. It uses Tailwind CSS classes to define the styles.
*   The `Button` component uses `buttonVariants` and the `cn` (classnames) utility to apply the correct styles based on the `variant` and `size` props.  The `cn` utility is defined in `lib/utils.ts` and is used to conditionally apply CSS classes.

This code shows how ShadCN UI components are built using Tailwind CSS and other utilities to create reusable and customizable UI elements.

## Real World Example Code References

Let's look at a file in `YC_Directory` that uses ShadCN UI components.

**File: `components/StartupForm.tsx`**

```tsx
"use client";

import { useActionState } from "react";
import { createPitch } from "@/lib/actions";
import { Button } from "@/components/ui/button"; //Import Shadcn Button

type FormState = {
  error: string;
  status: string;
  message: string;
};

const StartupForm = () => {
  const [, formAction, isPending] = useActionState(createPitch, {
    error: "",
    status: "INITIAL",
    message: "",
  });

  return (
    <form action={formAction} className="startup-form">
      {/* Form fields here */}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Your Pitch"}
      </Button>
    </form>
  );
};

export default StartupForm;
```

**Explanation:**

*   This code imports the ShadCN UI `Button` component and uses it within the `StartupForm` component. This is a great example of how to use ShadCN UI components in your application.

## Conclusion

Congratulations! You've now learned how to style your Next.js application using Tailwind CSS and ShadCN UI. You've seen how Tailwind CSS provides utility classes for styling elements, and how ShadCN UI provides pre-built, customizable components.  By using Tailwind CSS and ShadCN UI, you can create a beautiful and consistent user interface with much less effort.

In the next chapter, [NextAuth.js Integration](04_nextauth_js_integration.md), we'll explore how to add authentication to our YC Directory using NextAuth.js.


---
