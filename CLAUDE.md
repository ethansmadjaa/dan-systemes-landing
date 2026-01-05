This webiste is a landing page optimized for SEO for Dan Systemes an electronic reseller

this site will be in french

## Brand Colors

| Role | Color | Hex | Tailwind Class |
|------|-------|-----|----------------|
| **Primary** (Bleu foncé) | Dark blue for headers, text, buttons | `#0c2760` | `bg-primary`, `text-primary` |
| **Primary Dark** | Darker shade for shadows/borders | `#091d48` | `bg-primary-dark`, `border-primary-dark` |
| **Accent** (Vert-Jaune) | Yellow-green for CTAs, highlights, focus rings | `#a8c823` | `bg-accent`, `text-accent` |
| **Card** (Vert pastel) | Pastel green for card backgrounds | `#D0de93` | `bg-card`, `text-card` |

### Color Usage Rules

- **Primary (`#0c2760`)**: Use for main headings, navigation text, primary buttons, and important UI elements
- **Accent (`#a8c823`)**: Use for call-to-action buttons, links on hover, focus rings, and highlights
- **Card (`#D0de93`)**: Use for card backgrounds, secondary containers, and subtle background areas
- **Primary Dark (`#091d48`)**: Use for button shadows, borders, and darker accents

### Examples

```tsx
// Primary button
<button className="bg-primary text-primary-foreground">Contactez-nous</button>

// Accent/CTA button
<button className="bg-accent text-accent-foreground">Demander un devis</button>

// Card with pastel background
<div className="bg-card text-card-foreground">...</div>

// Button with shadow effect
<button className="bg-accent border-primary-dark" style={{ boxShadow: '0 4px 0 0 var(--primary-dark)' }}>
```
