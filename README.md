# ByteSpace 🚀

ByteSpace is a modern, pixel-perfect educational platform landing page and authentication portal. Built with a focus on high-quality software engineering standards, it features dynamic 3D asset animations, reusable micro-components, and a highly responsive layout.

🔗 **Live Demo:** [https://bytespace-pi.vercel.app/](https://bytespace-pi.vercel.app/)

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) (@gsap/react)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVGs
- **Typography:** Custom Fonts (Clash Display, Poppins, Satoshi)
- **Language:** TypeScript

## ✨ Key Features

- **Next.js Route Groups:** Clean architectural separation between `(common)` marketing pages (with Navbar/Footer) and `(auth)` full-screen grid layouts.
- **GSAP Animations:** Lightweight, high-performance floating animations for 3D assets (e.g., cones, toruses, squiggles) dynamically reacting to the viewport.
- **Reusable Micro-components:** DRY architecture with isolated components like `CourseCard`, `HappyStudentsCard`, `TestimonialCard`, and `FloatingAsset`.
- **Pixel-Perfect Design:** Strict adherence to Figma specifications including custom drop-shadow layering, precise border radii, and dynamic flexbox alignments.
- **Custom Authentication UI:** Two-column split layout for Sign In and Sign Up pages featuring responsive graphic clusters.
- **Custom 404 Page:** Immersive "Not Found" experience mapped to the brand's core design system.

## 📂 Project Structure

```text
├── app/
│   ├── (auth)/                # Auth layout (Blue Grid background)
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   ├── (common)/              # Common layout (Navbar & Footer included)
│   │   └── page.tsx           # Main Landing Page
│   ├── layout.tsx             # Root layout (Fonts and HTML structure)
│   ├── not-found.tsx          # Custom 404 Page
│   └── globals.css            # Global styles and Tailwind v4 CSS variables
├── components/
│   ├── layout/                # Navbar, Footer, etc.
│   ├── sections/              # Hero, Features, Testimonials, CTA, etc.
│   └── ui/                    # Micro-components (CourseCard, Button, FloatingAsset)
├── public/
│   ├── assets/                # Images, 3D icons, Avatars, Course thumbnails
│   └── fonts/                 # Local font files (Clash, Satoshi)
```

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18.17 or later installed. This project uses `pnpm` as the preferred package manager.

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/bytespace.git
   cd bytespace
```

2. Install dependencies:

```bash
   pnpm install
```

3. Start the development server:

```bash
   pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
pnpm build
pnpm start
```

## 🎨 Design System Notes

- **Colors:** Centralized via CSS variables in `globals.css` (e.g., `--brand-blue: #0f25e6;`, `--brand-yellow: #d4ff00;`).
- **Shadows:** The project translates complex Figma drop-shadows into CSS `filter: drop-shadow()` for transparent PNG wraps instead of standard box-shadows.
- **Scrollbars:** Horizontal scrollbars inside badges and carousels are natively hidden across all browsers using `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`.