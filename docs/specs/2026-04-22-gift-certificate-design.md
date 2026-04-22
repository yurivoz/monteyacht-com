# Gift Certificate Page — Design Spec

## Overview

A dedicated page (`gift.html`) allowing visitors to request a gift certificate for a yacht charter. Works as a lead generator — no online payment. The team manually processes each request, sends a branded PDF certificate within 2 hours.

## Certificate Types

### By Amount
Fixed denominations: €500, €1,000, €2,000, €3,000. Custom amount available via form.
Recipient chooses their own route/package when redeeming.

### By Package
Tied to an existing route or multi-day voyage:
- Boka Bay (6h, €2,400)
- Blue Cave Adventure (8h, €2,600)
- Luštica Bay (8h, €2,600)
- Secluded Escape (6h, €2,400)
- Multi-day options (2–5 days, from €6,000)

## Page Structure

### 1. Hero Section
- Dark background with yacht sunset photo (reuse existing `19-damjane-sunset.jpg`)
- Heading: "Gift an Unforgettable Day at Sea" / "Подарите незабываемый день на море"
- Subheading: brief emotional copy about gifting experiences

### 2. How It Works (3 steps)
- Step 1: Choose your gift (amount or package)
- Step 2: Fill in the form
- Step 3: Receive a beautiful certificate within 2 hours

### 3. Gift Options
Two tabs or toggle: "By Amount" / "By Package"

**By Amount:** 4 cards (€500, €1,000, €2,000, €3,000) — clicking selects and scrolls to form. Custom amount field in the form.

**By Package:** Reuse route data from `script.js` (routes array). Show route name, duration, price. Clicking selects and scrolls to form.

### 4. Certificate Preview
Interactive mockup of the certificate:
- Input field for recipient's name — updates certificate in real time
- Certificate design: navy background, gold (#c4a76c) border, MonteYacht logo, recipient name, gift value/package, validity (12 months from purchase), unique code placeholder (e.g., "MYC-2026-XXXX")
- Purpose: emotional trigger — "see what they'll receive"

### 5. Request Form
Fields:
- Your name (required)
- Email (required)
- Phone (required)
- Gift type: amount or package (pre-filled from selection above)
- Amount / Package (pre-filled from selection above, editable)
- Recipient's name (required)
- Personal message (optional, max 200 chars)
- Preferred delivery: email PDF / print-ready PDF

Submission: POST to Telegram bot + CRM (same as booking form).
Success state: checkmark + "Your gift certificate request has been sent! We'll deliver your certificate within 2 hours."

### 6. FAQ Section
3–4 items:
- How long is the certificate valid? → 12 months from purchase date
- How does the recipient book? → Contact us with the certificate code, we'll arrange everything
- Can I choose a specific date? → The recipient picks their preferred date when booking
- What's the refund policy? → Certificates are non-refundable but fully transferable

## Design Language
- Follows existing site: Sora headings, Inter body, navy/sand/off-white palette
- Same card style, button style, section spacing as other pages
- Certificate preview uses navy bg + gold accents for premium feel

## Translations
Full EN/RU coverage. All text uses `data-i18n` attributes. Translation keys added to the `T` object in `script.js`.

## Navigation
- Add "Gift" link in footer under "Navigation" column
- Do NOT add to main nav bar

## Validity
- 12 months from purchase date
- Displayed on certificate and in FAQ

## Tech Notes
- Static HTML page, same stack as all other pages (no framework)
- Certificate preview: pure CSS + vanilla JS (update text on input)
- Form submission: reuse `submitForm()` pattern from booking.html
- No payment integration (MVP — manual processing)
- Certificate PDF generated manually by the team (not automated)
