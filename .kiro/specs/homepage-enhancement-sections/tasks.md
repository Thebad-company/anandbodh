# Implementation Plan: Homepage Enhancement Sections

## Overview

This implementation plan integrates five existing React components (Testimonials, Community, OutcomesGrid, Method, StatsBanner) and creates one new component (ForumsActivity) into the Anandbodh wellness platform homepage. The implementation follows a component-based architecture using Next.js 14 with React, maintaining the existing design system while adding unique layouts for each section.

## Tasks

- [x] 1. Create ForumsActivity component with mock data
  - Create new file `src/components/ForumsActivity.jsx`
  - Implement component structure with section header, forums grid, and CTA button
  - Add 4 mock forum posts with categories, titles, authors, engagement metrics, and time indicators
  - Use card-based layout with 2 columns on desktop, 1 column on mobile
  - Include emoji icons for forum categories
  - Add "View All Forums" button linking to https://anandbodh.com/forums/
  - Implement hover effects on forum cards
  - Use semantic HTML with proper ARIA labels (`aria-labelledby`)
  - _Requirements: 4.1, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10_

- [ ]* 1.1 Write unit tests for ForumsActivity component
  - Test component renders 4 forum posts with required fields
  - Test "View All Forums" button has correct href
  - Test responsive layout (2 columns desktop, 1 column mobile)
  - Test empty state when no posts available
  - Test hover effects on forum cards
  - _Requirements: 4.1, 4.5, 4.9_

- [x] 2. Integrate Testimonials component into homepage
  - Import Testimonials component from `src/components/Testimonials.jsx` in `src/app/page.js`
  - Position after "Reverse Lifestyle Disorders" section and before "Issues In Our Tissues" section
  - Wrap component in Reveal wrapper with `direction="up"`
  - Verify component displays 3 testimonials with names, roles, and quotes
  - Ensure responsive design works (3 columns desktop, 1 column mobile)
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [ ]* 2.1 Write property test for section ordering
  - **Property 1: Section Ordering Preservation**
  - **Validates: Requirements 1.2, 2.2, 3.2, 4.2, 5.2, 6.2**
  - Test that all new sections appear in correct sequential order in DOM
  - Test sections appear after "Reverse Lifestyle Disorders" and before "Issues In Our Tissues"

- [x] 3. Integrate Community component into homepage
  - Import Community component from `src/components/Community.jsx` in `src/app/page.js`
  - Position after Testimonials component
  - Wrap component in Reveal wrapper with `direction="up"`
  - Verify animated counters display for member count, healing groups, expert sessions, and cities
  - Verify active healing groups list displays with live activity indicators
  - Verify CTA button links to community registration
  - Ensure two-column layout on desktop, single-column on mobile
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [x] 4. Integrate OutcomesGrid component into homepage
  - Import OutcomesGrid component from `src/components/OutcomesGrid.jsx` in `src/app/page.js`
  - Position after Community component
  - Wrap component in Reveal wrapper with `direction="up"`
  - Verify component displays 8 health outcomes with emoji icons
  - Verify grid layout: 4 columns desktop, 2 columns tablet, 1 column mobile
  - Verify hover effects on outcome tiles
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [ ]* 4.1 Write property tests for responsive layouts
  - **Property 5: Mobile Responsive Layout**
  - **Validates: Requirements 9.1**
  - Test all sections display single-column layout when viewport < 768px
  - **Property 6: Tablet Responsive Layout**
  - **Validates: Requirements 9.2**
  - Test all sections display tablet layout when viewport 768px-1024px
  - **Property 7: Desktop Responsive Layout**
  - **Validates: Requirements 9.3**
  - Test all sections display desktop layout when viewport > 1024px

- [x] 5. Integrate ForumsActivity component into homepage
  - Import ForumsActivity component from `src/components/ForumsActivity.jsx` in `src/app/page.js`
  - Position after OutcomesGrid component
  - Wrap component in Reveal wrapper with `direction="up"`
  - Verify section displays with proper header and subtitle
  - Verify 4 forum posts render with all engagement indicators
  - Verify "View All Forums" button is present and functional
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 6. Integrate Method component into homepage
  - Import Method component from `src/components/Method.jsx` in `src/app/page.js`
  - Position after ForumsActivity component
  - Wrap component in Reveal wrapper with `direction="up"`
  - Verify 3-step methodology displays: Awaken (Jagruti), Activate (Kayakalpam), Thrive (Satsang)
  - Verify numbered step indicators (1, 2, 3) are present
  - Verify descriptions for each step are displayed
  - Ensure horizontal layout on desktop, vertical stack on mobile
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [x] 7. Integrate StatsBanner component into homepage
  - Import StatsBanner component from `src/components/StatsBanner.jsx` in `src/app/page.js`
  - Position after Method component and before "Issues In Our Tissues" section
  - Wrap component in Reveal wrapper with `direction="up"`
  - Verify iScience August 2022 Soleus Activation Study reference displays
  - Verify 4 clinical statistics display: 50% Blood Sugar Reduction, 62% Less Insulin Required, 6x More Calories Burned, 50% VLDL Fats Reduced
  - Verify horizontal pill layout with dividers between statistics
  - Ensure responsive design with horizontal scrolling on mobile if needed
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [x] 8. Checkpoint - Verify all components render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Implement scroll animation behavior for all new sections
  - Verify each new section uses existing Reveal wrapper component
  - Verify animations trigger when section enters viewport (12% visible threshold)
  - Verify animation direction is "up" for all new sections
  - Test that animations trigger exactly once per section
  - _Requirements: 7.1, 7.2_

- [ ]* 9.1 Write property tests for scroll animations
  - **Property 2: Scroll Animation Triggering**
  - **Validates: Requirements 7.1**
  - Test animations trigger when section is 12% visible with -60px bottom margin
  - Test animations trigger exactly once per section
  - **Property 3: Animation Timing Consistency**
  - **Validates: Requirements 7.4**
  - Test all animation durations are between 300ms and 500ms
  - **Property 4: Layout Shift Prevention**
  - **Validates: Requirements 7.5**
  - Test CLS score remains at 0 during animations

- [x] 10. Verify existing sections remain functional
  - Test hero banners, nav shortcuts, and featured posts still render
  - Test "Reverse Lifestyle Disorders" section is preserved
  - Test "Issues In Our Tissues" section is preserved
  - Test condition cards section is preserved
  - Test three-column layout (left sidebar, center content, right sidebar) is maintained
  - Test sidebar widgets (login, active groups, recent posts, Soleus CTA) are functional
  - Test all existing navigation links and CTAs work
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 11. Implement responsive design optimizations
  - Verify all text elements have minimum 14px font size on mobile
  - Verify all interactive elements have minimum 44x44px touch targets on mobile
  - Test no horizontal scrolling occurs at any viewport size
  - Test layouts adapt correctly at 768px and 1024px breakpoints
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [ ]* 11.1 Write property tests for responsive design
  - **Property 8: Minimum Text Size**
  - **Validates: Requirements 9.4**
  - Test all text is at least 14px on viewports < 768px
  - **Property 9: Touch Target Size**
  - **Validates: Requirements 9.5**
  - Test all interactive elements are at least 44x44px on mobile
  - **Property 10: No Horizontal Overflow**
  - **Validates: Requirements 9.6**
  - Test body scrollWidth equals clientWidth at all viewport widths

- [ ] 12. Implement accessibility features
  - Add `aria-labelledby` attributes to all new section elements
  - Verify all interactive elements are keyboard accessible with visible focus indicators
  - Verify proper heading hierarchy (h1, h2, h3) across all sections
  - Add descriptive alt text for all images and icons
  - Verify color contrast ratios meet WCAG AA standards
  - Implement `prefers-reduced-motion` media query support for animations
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

- [ ]* 12.1 Write property tests for accessibility
  - **Property 11: ARIA Label Presence**
  - **Validates: Requirements 10.1**
  - Test all sections have aria-labelledby pointing to valid heading ID
  - **Property 12: Keyboard Accessibility**
  - **Validates: Requirements 10.2**
  - Test all interactive elements are keyboard accessible with focus indicators
  - **Property 13: Heading Hierarchy**
  - **Validates: Requirements 10.3**
  - Test heading levels follow proper nesting rules
  - **Property 14: Image Alt Text**
  - **Validates: Requirements 10.4**
  - Test all images have non-empty alt attributes
  - **Property 15: Color Contrast Compliance**
  - **Validates: Requirements 10.5**
  - Test all text meets WCAG AA contrast ratios (4.5:1 normal, 3:1 large)
  - **Property 16: Reduced Motion Respect**
  - **Validates: Requirements 10.6**
  - Test animations are disabled when prefers-reduced-motion is set

- [ ] 13. Final checkpoint - Integration testing and validation
  - Run all unit tests and property tests
  - Test complete homepage with all sections integrated
  - Verify scroll animations work smoothly across all sections
  - Test responsive layouts at 375px (mobile), 768px (tablet), and 1440px (desktop)
  - Run accessibility audit with jest-axe (0 violations expected)
  - Verify no console errors or warnings
  - Test keyboard navigation through all sections
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties across all inputs
- Unit tests validate specific examples and edge cases
- All components use existing design system (colors, typography, spacing)
- Scroll animations use existing Reveal wrapper and useScrollReveal hook
- No modifications to existing components required - only integration
