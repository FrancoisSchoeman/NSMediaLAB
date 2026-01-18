# NS MediaLAB - GTM Tracking Events Documentation

This document outlines all tracking and dataLayer events being sent to Google Tag Manager for the NS MediaLAB website.

## Configuration

| Property | Value |
|----------|-------|
| **GTM Container ID** | `GTM-P8C3JZJH` |
| **Google Analytics ID** | `G-1J2SRELXN8` |
| **Implementation** | `@next/third-parties/google` (sendGTMEvent) |

---

## Events Overview

| Event Name | Description | Trigger Location |
|------------|-------------|------------------|
| `cta_click` | CTA button clicks | Header, Footer, Hero, CTA Sections |
| `contact_form_submit` | Successful form submission | Contact Form |
| `form_field_focus` | First interaction with form | Contact Form |
| `form_field_interaction` | Individual field focus | Contact Form |
| `form_error` | Form submission failure | Contact Form |
| `scroll_milestone` | Scroll depth tracking | All Pages |
| `pricing_package_click` | Pricing card clicks | Pricing Page |
| `faq_expand` | FAQ accordion opens | FAQs Page |
| `service_click` | Service card clicks | Services Page, Home Page |
| `section_view` | Section enters viewport | Various Sections |
| `whatsapp_widget_click` | WhatsApp button click | Floating Widget |

---

## Detailed Event Specifications

### 1. CTA Click (`cta_click`)

Tracks when call-to-action buttons are clicked across the site.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"cta_click"` |
| `cta_location` | string | Where the CTA is located | `"header"`, `"footer"`, `"hero"`, `"cta_section"` |
| `cta_text` | string | Button text | `"Get a Free Quote"`, `"View Pricing"`, `"Get Started Today"` |

**Trigger Locations:**
- **Header** (`cta_location: "header"`) - "Get a Free Quote" button
- **Footer** (`cta_location: "footer"`) - "Get Started Today" button
- **Hero Section** (`cta_location: "hero"`) - Primary and secondary CTAs
- **CTA Section** (`cta_location: "cta_section"`) - Section CTAs throughout pages

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'cta_click',
  cta_location: 'header',
  cta_text: 'Get a Free Quote'
});
```

---

### 2. Contact Form Submit (`contact_form_submit`)

Fires when the contact form is successfully submitted.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"contact_form_submit"` |
| `form_name` | string | Form identifier | `"contact_form"` |
| `user_data.email_hash` | string | SHA-256 hashed email | `"a1b2c3..."` |
| `user_data.phone_hash` | string \| undefined | SHA-256 hashed phone (if provided) | `"d4e5f6..."` |

**Notes:**
- Email and phone are hashed with SHA-256 for privacy compliance
- Phone hash is only included if the user provided a phone number
- This is a **conversion event** - should be set up as a conversion in GA4

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'contact_form_submit',
  form_name: 'contact_form',
  user_data: {
    email_hash: '5e884898da28047d...',
    phone_hash: '8d969eef6ecad3c2...'
  }
});
```

---

### 3. Form Field Focus (`form_field_focus`)

Fires once when the user first interacts with the contact form (first focus on any field).

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"form_field_focus"` |
| `form_name` | string | Form identifier | `"contact_form"` |

**Notes:**
- Only fires once per page load (tracks form start)
- Useful for measuring form abandonment rate

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'form_field_focus',
  form_name: 'contact_form'
});
```

---

### 4. Form Field Interaction (`form_field_interaction`)

Fires each time a user focuses on a specific form field.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"form_field_interaction"` |
| `field_name` | string | Name of the field | `"name"`, `"email"`, `"phone"`, `"message"` |

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'form_field_interaction',
  field_name: 'email'
});
```

---

### 5. Form Error (`form_error`)

Fires when the contact form submission fails.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"form_error"` |
| `form_name` | string | Form identifier | `"contact_form"` |
| `error_type` | string | Type of error | `"submission_failed"` |

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'form_error',
  form_name: 'contact_form',
  error_type: 'submission_failed'
});
```

---

### 6. Scroll Milestone (`scroll_milestone`)

Tracks when users reach specific scroll depth percentages.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"scroll_milestone"` |
| `scroll_depth` | number | Percentage scrolled | `25`, `50`, `75`, `100` |
| `page_path` | string | Current page path | `"/"`, `"/services"`, `"/contact"` |

**Milestones:**
- 25% - User has scrolled past the first quarter
- 50% - User has scrolled halfway
- 75% - User has scrolled past three quarters
- 100% - User has scrolled to the bottom

**Notes:**
- Each milestone only fires once per page load
- Throttled for performance (uses requestAnimationFrame)
- Tracks engagement depth across all pages

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'scroll_milestone',
  scroll_depth: 50,
  page_path: '/services'
});
```

---

### 7. Pricing Package Click (`pricing_package_click`)

Fires when a user clicks on a pricing package card.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"pricing_package_click"` |
| `package_name` | string | Name of the package | Package title from data.json |

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'pricing_package_click',
  package_name: 'Starter Package'
});
```

---

### 8. FAQ Expand (`faq_expand`)

Fires when a user expands an FAQ accordion item.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"faq_expand"` |
| `faq_question` | string | The question text | `"Do I really need social media marketing?"` |

**FAQ Questions Tracked:**
1. "Do I really need social media marketing for my business?"
2. "Which platforms should I be on?"
3. "What kind of content can you create?"
4. "I'm on a tight budget. Can you still help me?"
5. "What kind of results can I expect?"
6. "Do you offer paid advertising services?"
7. "Do you offer free consultations?"
8. "How long before I see results?"
9. "Can I cancel at any time?"

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'faq_expand',
  faq_question: 'Do I really need social media marketing for my business?'
});
```

---

### 9. Service Click (`service_click`)

Fires when a user clicks on a service card.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"service_click"` |
| `service_name` | string | Name of the service | Service title |

**Notes:**
- Used on service cards throughout the site
- The `trackingLabel` prop determines the service name

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'service_click',
  service_name: 'Social Media Management'
});
```

---

### 10. Section View (`section_view`)

Fires when a tracked section enters the viewport.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"section_view"` |
| `section_name` | string | Name of the section | Configured via `sectionName` prop |

**Notes:**
- Only fires once per section per page load
- Uses IntersectionObserver with 30% threshold
- Must be enabled with `trackView={true}` prop on `SectionWrapper`

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'section_view',
  section_name: 'testimonials'
});
```

---

### 11. WhatsApp Widget Click (`whatsapp_widget_click`)

Fires when the floating WhatsApp widget is clicked.

**Event Properties:**
| Parameter | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `event` | string | Event name | `"whatsapp_widget_click"` |

**Notes:**
- Widget is visible on all pages (fixed position, bottom right)
- Opens WhatsApp chat with phone number: +27826191100

**Example dataLayer Push:**
```javascript
dataLayer.push({
  event: 'whatsapp_widget_click'
});
```

---

## GTM Setup Recommendations

### Suggested Triggers

Create the following Custom Event triggers in GTM:

| Trigger Name | Trigger Type | Event Name |
|--------------|--------------|------------|
| CE - CTA Click | Custom Event | `cta_click` |
| CE - Contact Form Submit | Custom Event | `contact_form_submit` |
| CE - Form Field Focus | Custom Event | `form_field_focus` |
| CE - Form Field Interaction | Custom Event | `form_field_interaction` |
| CE - Form Error | Custom Event | `form_error` |
| CE - Scroll Milestone | Custom Event | `scroll_milestone` |
| CE - Pricing Package Click | Custom Event | `pricing_package_click` |
| CE - FAQ Expand | Custom Event | `faq_expand` |
| CE - Service Click | Custom Event | `service_click` |
| CE - Section View | Custom Event | `section_view` |
| CE - WhatsApp Widget Click | Custom Event | `whatsapp_widget_click` |

### Suggested Variables

Create the following Data Layer Variables in GTM:

| Variable Name | Data Layer Variable Name |
|---------------|--------------------------|
| dlv - CTA Location | `cta_location` |
| dlv - CTA Text | `cta_text` |
| dlv - Form Name | `form_name` |
| dlv - Field Name | `field_name` |
| dlv - Error Type | `error_type` |
| dlv - Scroll Depth | `scroll_depth` |
| dlv - Page Path | `page_path` |
| dlv - Package Name | `package_name` |
| dlv - FAQ Question | `faq_question` |
| dlv - Service Name | `service_name` |
| dlv - Section Name | `section_name` |
| dlv - User Data | `user_data` |

### Conversion Events (GA4)

Mark these events as conversions in GA4:

1. **`contact_form_submit`** - Primary conversion (lead generation)
2. **`whatsapp_widget_click`** - Secondary conversion (contact intent)
3. **`pricing_package_click`** - Micro-conversion (pricing interest)
4. **`cta_click`** (where `cta_location = "hero"`) - Micro-conversion

### Event Categories for Reporting

Suggested event categorization for GA4 reports:

| Category | Events |
|----------|--------|
| **Conversions** | `contact_form_submit`, `whatsapp_widget_click` |
| **Engagement** | `scroll_milestone`, `section_view`, `faq_expand` |
| **Navigation** | `cta_click`, `service_click`, `pricing_package_click` |
| **Form Interaction** | `form_field_focus`, `form_field_interaction`, `form_error` |

---

## Testing Checklist

Use GTM Preview mode to verify each event fires correctly:

- [ ] Visit homepage and click "Get a Free Quote" in header → `cta_click` (location: header)
- [ ] Scroll to bottom of homepage → `scroll_milestone` at 25%, 50%, 75%, 100%
- [ ] Click WhatsApp widget → `whatsapp_widget_click`
- [ ] Go to /pricing and click a package → `pricing_package_click`
- [ ] Go to /faqs and expand a question → `faq_expand`
- [ ] Go to /contact and focus on form → `form_field_focus`
- [ ] Fill each field → `form_field_interaction` for each
- [ ] Submit form successfully → `contact_form_submit`
- [ ] Go to /services and click a service card → `service_click`
- [ ] Test CTA buttons in footer → `cta_click` (location: footer)

---

## Notes

- All events use `sendGTMEvent` from `@next/third-parties/google`
- Events push directly to the dataLayer
- Hashed user data (email/phone) uses SHA-256 for privacy compliance
- The site uses both GTM and direct GA4 implementation
