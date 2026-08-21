---
name: Zen Terminal
colors:
  surface: '#1A1C1A'
  surface-dim: '#121411'
  surface-bright: '#383a36'
  surface-container-lowest: '#0d0f0c'
  surface-container-low: '#1a1c19'
  surface-container: '#1e201d'
  surface-container-high: '#282b27'
  surface-container-highest: '#333531'
  on-surface: '#e2e3dd'
  on-surface-variant: '#c2c8bc'
  inverse-surface: '#e2e3dd'
  inverse-on-surface: '#2f312d'
  outline: '#8c9388'
  outline-variant: '#42493f'
  surface-tint: '#a9d19e'
  primary: '#a9d19e'
  on-primary: '#153813'
  primary-container: '#749b6c'
  on-primary-container: '#0e310d'
  inverse-primary: '#43673d'
  secondary: '#e8c26b'
  on-secondary: '#3f2e00'
  secondary-container: '#6e5300'
  on-secondary-container: '#efc971'
  tertiary: '#f9b3cd'
  on-tertiary: '#502035'
  tertiary-container: '#be7e97'
  on-tertiary-container: '#471a2f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4eeb8'
  primary-fixed-dim: '#a9d19e'
  on-primary-fixed: '#002202'
  on-primary-fixed-variant: '#2c4f27'
  secondary-fixed: '#ffdf99'
  secondary-fixed-dim: '#e8c26b'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#ffd9e5'
  tertiary-fixed-dim: '#f9b3cd'
  on-tertiary-fixed: '#360b20'
  on-tertiary-fixed-variant: '#6a364c'
  background: '#121312'
  on-background: '#e2e3dd'
  surface-variant: '#333531'
  text-main: '#E3E8E1'
  text-muted: '#7A8578'
  border-base: '#2A2E2A'
  error-red: '#CF665A'
  glow-accent: rgba(105, 143, 97, 0.2)
typography:
  display-score:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  mono-code:
    fontFamily: Fira Code
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  mono-label:
    fontFamily: Fira Code
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 24px
  tight: 12px
  utility-h: 16px
  gutter: 1px
  panel-padding: 32px
---

## Brand & Style
Zen Terminal is a high-performance developer tool that balances technical precision with a focused, calm environment. The brand personality is "The Quiet Expert"—sophisticated, unobtrusive, and deeply functional. 

The design style is **Corporate / Modern** with a **Minimalist** ethos. It utilizes a "Dark IDE" aesthetic characterized by deep charcoal surfaces, vibrant syntax accents, and a subtle inner glow (Glow-shadow) that evokes a futuristic terminal display without becoming distractingly retro. The interface prioritizes code clarity and cognitive ease through generous spacing and a restrained color palette.

## Colors
The palette is built on a "Forest Dark" foundation, moving away from pure blacks to deep, organic charcols. 

- **Primary (Sage Green):** Used for primary actions, success states, and active navigation indicators. It provides a natural, high-legibility contrast against the dark background.
- **Surface Tiers:** The background is the darkest layer (#121312). Interactive containers and secondary panes use a slightly elevated Surface (#1A1C1A).
- **Functional Accents:** Warning and security states utilize a muted Gold (#D1AD58), while errors use a desaturated Red (#CF665A) to maintain the "Zen" atmosphere.
- **Text Layers:** Primary content uses a high-contrast off-white (#E3E8E1). Metadata and inactive states use a muted sage-grey (#7A8578).

## Typography
The system uses a dual-font strategy to distinguish between UI and Data.

- **UI Font (Plus Jakarta Sans):** Chosen for its modern, approachable geometry. It handles all navigation, headers, and dashboard metrics.
- **Mono Font (Fira Code):** Used for code editing, terminal output, and technical metadata labels. It ensures character-level precision.
- **Visual Hierarchy:** Large "Score" displays use semi-bold weights and tight tracking. Body text remains small (13px-14px) to maximize the information density required for a developer workspace.

## Layout & Spacing
The layout uses a **Fluid Pane** model suitable for widescreen desktop workflows. 

- **Structure:** A fixed 64px (h-16) header tops the workspace. The main area is split into a 60/40 ratio between the Editor (primary) and Insight Pane (secondary).
- **Dividers:** Use 1px borders (#2A2E2A) instead of heavy gaps to maintain a monolithic, integrated feel.
- **Rhythm:** Internal component padding follows an 8px grid, but high-level sections (like the Score dashboard) use a 24px-32px "breathable" margin to reduce visual noise during analysis.
- **Mobile:** On small screens, the 60/40 split must reflow into a tabbed view or vertical stack where the Insight Pane is accessible via a bottom sheet.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Subtle Glows** rather than traditional drop shadows.

- **Base Layer:** The darkest tone (#121312) represents the primary work surface (Editor background).
- **Elevated Layer:** Sidebar panels and dashboard containers use a slightly lighter surface (#1A1C1A) to feel "closer" to the user.
- **The Glow Effect:** Interactive cards and active state rings utilize an `inset` shadow with a low-opacity primary color (rgba(105, 143, 97, 0.2)). This "internal illumination" reinforces the terminal/screen metaphor.
- **Borders:** Thin, low-contrast borders provide structural definition without cluttering the dark UI.

## Shapes
The shape language balances industrial precision with modern comfort.

- **General UI (Buttons, Inputs):** 6px (rounded-btn) radius for a sharp, professional look.
- **Panels/Cards:** 12px (rounded-panel) radius to soften the larger containers and distinguish them from code blocks.
- **Data Visualizations:** Circular forms for scores and metric icons to create organic points of interest amidst the grid-heavy layout.

## Components

- **Primary Button:** Solid background (#698F61) with dark text (#121312). Font-weight: 600. No shadow, simple opacity change on hover.
- **Secondary/Ghost Button:** Transparent background with 1px border. Shows border on hover for a "soft reveal" interaction.
- **Editor:** Monospaced text with semantic syntax highlighting (Primary for keywords, Warning for functions, Muted for comments). Line numbers are right-aligned with 50% opacity.
- **Metric Cards:** background-color: #121312; border: 1px solid #2A2E2A. On hover, the border transitions to a 50% primary color tint.
- **Tabs:** Border-bottom 2px indicator. Active state uses the Primary color; inactive states use the Muted text color.
- **Dropdowns/Selects:** Minimalist styling with a custom chevron icon. Uses the Surface color (#1A1C1A) to distinguish from the background.