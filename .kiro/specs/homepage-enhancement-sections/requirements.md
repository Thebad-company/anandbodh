# Requirements Document

## Introduction

This feature enhances the Anandbodh wellness platform homepage by integrating five existing components that are currently not displayed: Testimonials, Community Stats, Health Outcomes Grid, Forums Activity Preview, and Methodology/Approach sections. The goal is to create a more comprehensive homepage that builds trust, showcases community engagement, demonstrates health outcomes, and explains the wellness approach while maintaining the existing theme but with unique layouts different from the live site at anandbodh.com.

## Glossary

- **Homepage**: The main landing page at src/app/page.js that serves as the entry point for the Anandbodh wellness platform
- **Component**: A reusable React component in the src/components directory
- **Testimonials_Component**: The existing Testimonials.jsx component that displays user testimonials with names, roles, and quotes
- **Community_Component**: The existing Community.jsx component that displays community statistics and active healing groups
- **OutcomesGrid_Component**: The existing OutcomesGrid.jsx component that displays specific health benefits in a grid layout
- **Method_Component**: The existing Method.jsx component that explains the 3-step Anandbodh methodology
- **StatsBanner_Component**: The existing StatsBanner.jsx component that displays clinical research results
- **Forums_Activity_Section**: A new section to be created that displays recent forum discussions and engagement metrics
- **Layout**: The visual arrangement and positioning of components on the page
- **Reveal_Wrapper**: The existing scroll animation component that reveals content as users scroll
- **LottieIcon**: The existing animated icon component that displays Lottie animations
- **Responsive_Design**: Design that adapts to different screen sizes (mobile, tablet, desktop)
- **Existing_Theme**: The current design system including colors (wellness-focused, warm tones), typography, spacing, and animation patterns

## Requirements

### Requirement 1: Integrate Testimonials Component

**User Story:** As a potential member, I want to see testimonials from real users, so that I can trust the platform and understand the value it provides to others.

#### Acceptance Criteria

1. THE Homepage SHALL import and render the Testimonials_Component from src/components/Testimonials.jsx
2. THE Testimonials_Component SHALL be positioned after the "Reverse Lifestyle Disorders" section and before the "Issues In Our Tissues" section
3. THE Testimonials_Component SHALL be wrapped in a Reveal_Wrapper with upward animation direction
4. THE Testimonials_Component SHALL display at least 3 testimonials with names, roles, and quotes
5. THE Testimonials_Component SHALL maintain responsive design across mobile, tablet, and desktop viewports
6. THE Testimonials_Component SHALL use the existing theme colors and typography

### Requirement 2: Integrate Community Stats Component

**User Story:** As a visitor, I want to see community statistics and active groups, so that I can understand the size and engagement level of the community before joining.

#### Acceptance Criteria

1. THE Homepage SHALL import and render the Community_Component from src/components/Community.jsx
2. THE Community_Component SHALL be positioned after the Testimonials_Component and before the "Issues In Our Tissues" section
3. THE Community_Component SHALL be wrapped in a Reveal_Wrapper with upward animation direction
4. THE Community_Component SHALL display animated counters for member count, healing groups, expert sessions, and cities represented
5. THE Community_Component SHALL display a list of active healing groups with live activity indicators
6. THE Community_Component SHALL include a call-to-action button linking to community registration
7. THE Community_Component SHALL maintain responsive design with a two-column layout on desktop and single-column on mobile

### Requirement 3: Integrate Health Outcomes Grid Component

**User Story:** As a user with health concerns, I want to see specific health outcomes I can achieve, so that I can determine if the platform addresses my needs.

#### Acceptance Criteria

1. THE Homepage SHALL import and render the OutcomesGrid_Component from src/components/OutcomesGrid.jsx
2. THE OutcomesGrid_Component SHALL be positioned after the Community_Component and before the "Issues In Our Tissues" section
3. THE OutcomesGrid_Component SHALL be wrapped in a Reveal_Wrapper with upward animation direction
4. THE OutcomesGrid_Component SHALL display at least 8 specific health outcomes with emoji icons
5. THE OutcomesGrid_Component SHALL use a grid layout that displays 4 columns on desktop, 2 columns on tablet, and 1 column on mobile
6. THE OutcomesGrid_Component SHALL include outcomes such as "All-Day Energy", "Healthy Weight Loss", "BP & Diabetes Tamed", "Increase Metabolic Rate", "Reverse Asthma", "Glow Naturally", "Manage Blood Sugar", and "Prevent Chronic Disease"
7. WHEN a user hovers over an outcome tile on desktop, THE OutcomesGrid_Component SHALL display a subtle hover effect

### Requirement 4: Create Forums Activity Preview Section

**User Story:** As a visitor, I want to see recent forum activity, so that I can gauge community engagement and find relevant discussions before joining.

#### Acceptance Criteria

1. THE Homepage SHALL render a new Forums_Activity_Section component
2. THE Forums_Activity_Section SHALL be positioned after the OutcomesGrid_Component and before the "Issues In Our Tissues" section
3. THE Forums_Activity_Section SHALL be wrapped in a Reveal_Wrapper with upward animation direction
4. THE Forums_Activity_Section SHALL display a section header with title "Community Conversations" and subtitle describing active discussions
5. THE Forums_Activity_Section SHALL display at least 4 mock forum posts with titles, author names, reply counts, and time indicators
6. THE Forums_Activity_Section SHALL include engagement indicators such as reply count, like count, and activity status
7. THE Forums_Activity_Section SHALL include a "View All Forums" call-to-action button linking to https://anandbodh.com/forums/
8. THE Forums_Activity_Section SHALL use a card-based layout different from the live site's forum list
9. THE Forums_Activity_Section SHALL maintain responsive design with 2 columns on desktop and 1 column on mobile
10. THE Forums_Activity_Section SHALL use emoji icons to represent forum categories

### Requirement 5: Integrate Methodology Component

**User Story:** As a potential member, I want to understand the wellness methodology, so that I can learn how the platform will help me achieve my health goals.

#### Acceptance Criteria

1. THE Homepage SHALL import and render the Method_Component from src/components/Method.jsx
2. THE Method_Component SHALL be positioned after the Forums_Activity_Section and before the "Issues In Our Tissues" section
3. THE Method_Component SHALL be wrapped in a Reveal_Wrapper with upward animation direction
4. THE Method_Component SHALL display the 3-step Anandbodh methodology: Awaken (Jagruti), Activate (Kayakalpam), and Thrive (Satsang)
5. THE Method_Component SHALL include descriptions for each step explaining the process
6. THE Method_Component SHALL use numbered step indicators (1, 2, 3)
7. THE Method_Component SHALL maintain responsive design with horizontal layout on desktop and vertical stacking on mobile

### Requirement 6: Integrate Clinical Stats Banner Component

**User Story:** As a skeptical visitor, I want to see scientific evidence and clinical research results, so that I can trust the effectiveness of the wellness approach.

#### Acceptance Criteria

1. THE Homepage SHALL import and render the StatsBanner_Component from src/components/StatsBanner.jsx
2. THE StatsBanner_Component SHALL be positioned after the Method_Component and before the "Issues In Our Tissues" section
3. THE StatsBanner_Component SHALL be wrapped in a Reveal_Wrapper with upward animation direction
4. THE StatsBanner_Component SHALL display the iScience August 2022 Soleus Activation Study reference
5. THE StatsBanner_Component SHALL display 4 clinical statistics: 50% Blood Sugar Reduction, 62% Less Insulin Required, 6x More Calories Burned, and 50% VLDL Fats Reduced
6. THE StatsBanner_Component SHALL use a horizontal pill layout with dividers between statistics
7. THE StatsBanner_Component SHALL maintain responsive design with horizontal scrolling on mobile if needed

### Requirement 7: Maintain Consistent Animation and Scroll Behavior

**User Story:** As a user navigating the homepage, I want smooth scroll animations, so that the experience feels polished and engaging.

#### Acceptance Criteria

1. WHEN a user scrolls to any new section, THE Homepage SHALL trigger the Reveal_Wrapper animation for that section
2. THE Homepage SHALL apply staggered animation delays to multiple elements within the same section
3. THE Homepage SHALL use the existing useScrollReveal hook for all scroll-triggered animations
4. THE Homepage SHALL maintain consistent animation timing (300-500ms duration) across all new sections
5. THE Homepage SHALL ensure animations do not cause layout shift or performance issues

### Requirement 8: Preserve Existing Sections and Layout

**User Story:** As a returning user, I want the existing homepage sections to remain functional, so that I can still access familiar content and navigation.

#### Acceptance Criteria

1. THE Homepage SHALL preserve all existing sections including hero banners, nav shortcuts, featured posts, lifestyle disorders section, stress diagram, video section, and condition cards
2. THE Homepage SHALL maintain the existing three-column layout with left sidebar, center content, and right sidebar
3. THE Homepage SHALL preserve all existing navigation links and call-to-action buttons
4. THE Homepage SHALL maintain the existing sidebar widgets (login, active groups, recent posts, Soleus CTA)
5. WHEN new sections are added, THE Homepage SHALL not break or remove any existing functionality

### Requirement 9: Ensure Responsive Design Across All Viewports

**User Story:** As a mobile user, I want the homepage to display properly on my device, so that I can access all content and features without horizontal scrolling or layout issues.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768px, THE Homepage SHALL display all new sections in single-column layout
2. WHEN the viewport width is between 768px and 1024px, THE Homepage SHALL display appropriate tablet layouts for all new sections
3. WHEN the viewport width is greater than 1024px, THE Homepage SHALL display full desktop layouts for all new sections
4. THE Homepage SHALL ensure all text remains readable at minimum font size of 14px on mobile
5. THE Homepage SHALL ensure all interactive elements (buttons, links) have minimum touch target size of 44x44px on mobile
6. THE Homepage SHALL not introduce horizontal scrolling on any viewport size

### Requirement 10: Maintain Accessibility Standards

**User Story:** As a user with assistive technology, I want the homepage to be accessible, so that I can navigate and understand all content using screen readers or keyboard navigation.

#### Acceptance Criteria

1. THE Homepage SHALL include proper ARIA labels for all new sections using aria-labelledby attributes
2. THE Homepage SHALL ensure all interactive elements are keyboard accessible with visible focus indicators
3. THE Homepage SHALL maintain proper heading hierarchy (h1, h2, h3) across all sections
4. THE Homepage SHALL include descriptive alt text for all images and icons
5. THE Homepage SHALL ensure color contrast ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
6. THE Homepage SHALL ensure all animations respect prefers-reduced-motion media query for users who prefer reduced motion
