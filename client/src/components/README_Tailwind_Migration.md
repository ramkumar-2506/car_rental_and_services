# Tailwind migration note

This repo is mid-migration:

- Already migrated to Tailwind utilities:
  - `src/components/Common/Button.jsx`
  - `src/components/Home/Hero.jsx`
  - `src/components/Home/FeaturedCars.jsx`
  - `src/components/Home/CarCard.jsx`

Next migration batches (legacy classnames -> Tailwind):

- `src/components/Booking/**` (BookingForm, BookingSteps, PaymentOptions, BookingFAQ, PricingCalculator, etc.)
- `src/components/Cars/**`
- `src/components/Fleet/**`
- `src/components/Services/**`
- `src/components/About/**`
- `src/components/Contact/**`

Goal:

- All components use Tailwind utilities and remain responsive across sm/md/lg/xl breakpoints.
