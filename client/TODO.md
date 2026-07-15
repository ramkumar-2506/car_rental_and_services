# TODO - Tailwind migration (Car rental app)

- [x] Inspect Tailwind setup (tailwind config, Vite plugin, index.css directives)
- [x] Identify legacy classnames in components (hero, car-card, booking-form-section, etc.)
- [x] Detect missing/legacy CSS imports (example Loader.css)
- [x] Refactor `src/components/Common/Button.jsx` to Tailwind utilities (responsive + variants)
- [x] Refactor `src/components/Home/Hero.jsx` to Tailwind (replace hero-\* classes)
- [x] Refactor `src/components/Home/FeaturedCars.jsx` + `CarCard.jsx` to Tailwind (grid responsive)
- [x] Run `npm run lint` and `npm run build` successfully after initial Tailwind migration
- [ ] Refactor all Booking/Cars/Fleet/Services/About/Contact components to Tailwind (replace custom classnames)
- [ ] Remove/replace any CSS imports that point to missing files
- [ ] Add/adjust any shared Tailwind “theme” styles in `src/index.css` if needed
- [ ] Manual viewport QA for Mobile / Tablet / Laptop / PC
