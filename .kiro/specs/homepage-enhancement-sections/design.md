# Design Document: Homepage Enhancement Sections

## Overview

This design document outlines the technical approach for integrating five existing React components and creating one new section for the Anandbodh wellness platform homepage. The feature enhances the homepage by adding testimonials, community statistics, health outcomes, forum activity preview, methodology explanation, and clinical research results.

The implementation follows a component-based architecture using Next.js 14 with React Server Components where appropriate, and Client Components for interactive features. All new sections will maintain the existing design system (wellness-focused color palette, Cormorant/Inter typography, scroll-reveal animations) while implementing unique layouts that differ from the live anandbodh.com site.

### Key Design Principles

1. **Component Reusability**: Leverage existing components without modification
2. **Progressive Enhancement**: Maintain functionality without JavaScript where possible
3. **Performance First**: Optimize for Core Web Vitals (LCP, FID, CLS)
4. **Accessibility**: WCAG 2.1 AA compliance with semantic HTML and ARIA labels
5. **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px

### Technical Stack

- **Framework**: Next.js 14.2+ (App Router)
- **UI Library**: React 18+
- **Styling**: CSS Modules with CSS Custom Properties
- **Animation**: Intersection Observer API via useScrollReveal hook
- **Icons**: Lottie animations + emoji fallbacks

## Architecture

### Component Hierarchy

```
page.js (Homepage)
├── Reveal (Scroll Animation Wrapper)
│   ├── Testimonials (Existing Component)
│   ├── Community (Existing Component)
│   ├── OutcomesGrid (Existing Component)
│   ├── ForumsActivity (New Component)
│   ├── Method (Existing Component)
│   └── StatsBanner (Existing Component)
```

### Integration Strategy

The homepage follows a three-column portal layout:
- **Left Sidebar**: Navigation (preserved)
- **Center Column**: Main content area (where new sections are added)
- **Right Sidebar**: Widgets (preserved)

New sections will be inserted into the center column (`portal-main-v2`) in the following order:

1. Existing hero stack
2. Existing nav shortcuts
3. Existing featured post
4. Existing "Reverse Lifestyle Disorders" section
5. **NEW: Testimonials** ← After lifestyle disorders
6. **NEW: Community Stats** ← After testimonials
7. **NEW: Health Outcomes Grid** ← After community
8. **NEW: Forums Activity Preview** ← After outcomes
9. **NEW: Methodology** ← After forums
10. **NEW: Clinical Stats Banner** ← After methodology
11. Existing "Issues In Our Tissues" section (preserved)
12. Existing condition cards (preserved)

### Scroll Animation Architecture

All new sections use the existing `Reveal` component wrapper which leverages the `useScrollReveal` hook:

```javascript
// Existing pattern from page.js
function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-wrap reveal-${direction} ${isVisible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

**Animation Behavior**:
- Threshold: 12% of element visible
- Root margin: -60px bottom offset
- Direction: Upward slide-in (translateY)
- Duration: 300-500ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Trigger: Once per element (no repeat)

### Responsive Breakpoints

```css
/* Mobile: < 768px (default) */
/* Tablet: 768px - 1024px */
@media (min-width: 768px) { ... }

/* Desktop: > 1024px */
@media (min-width: 1024px) { ... }
```

## Components and Interfaces

### 1. Testimonials Component (Existing)

**File**: `src/components/Testimonials.jsx`

**Props**: None (self-contained)

**Data Structure**:
```javascript
{
  avatar: string,      // Single letter for avatar circle
  name: string,        // Full name
  location: string,    // Role/company
  text: string         // Testimonial quote
}
```

**Integration**:
```javascript
<Reveal direction="up">
  <Testimonials />
</Reveal>
```

**Styling**: Uses existing `.testimonials-grid` with 3-column layout on desktop, single column on mobile. Each card includes star rating, quote mark, and author info.

### 2. Community Component (Existing)

**File**: `src/components/Community.jsx`

**Props**: None (self-contained)

**Client Component**: Uses `"use client"` directive for animated counters

**Key Features**:
- Animated counters using `useEffect` and `setInterval`
- Two-column layout: stats on left, active groups on right
- Live activity pulse indicators on group cards

**Data Structures**:
```javascript
// Stats
{ end: number, suffix: string, label: string }

// Groups
{ icon: string, bg: string, name: string, members: string, pulseColor?: string, pulseShadow?: string }
```

**Integration**:
```javascript
<Reveal direction="up">
  <Community />
</Reveal>
```

### 3. OutcomesGrid Component (Existing)

**File**: `src/components/OutcomesGrid.jsx`

**Props**: None (self-contained)

**Data Structure**:
```javascript
{ icon: string, text: string }  // 8 outcomes
```

**Layout**: CSS Grid with 4 columns on desktop, 2 on tablet, 1 on mobile

**Integration**:
```javascript
<Reveal direction="up">
  <OutcomesGrid />
</Reveal>
```

### 4. ForumsActivity Component (New)

**File**: `src/components/ForumsActivity.jsx` (to be created)

**Props**: None (self-contained with mock data)

**Purpose**: Display recent forum activity to encourage community engagement

**Data Structure**:
```javascript
{
  id: string,
  category: string,
  categoryIcon: string,
  title: string,
  author: string,
  authorAvatar: string,
  replyCount: number,
  likeCount: number,
  timeAgo: string,
  isActive: boolean
}
```

**Layout**:
- Desktop: 2-column grid
- Mobile: Single column stack
- Card-based design with hover effects

**Mock Data** (4 posts):
1. "How to start Soleus Activation as a beginner?" - Wellness category
2. "Ayurvedic diet tips for Pitta dosha?" - Ayurveda category
3. "Meditation techniques for anxiety relief" - Mental Health category
4. "Success story: Reversed my pre-diabetes!" - Success Stories category

**Component Structure**:
```javascript
export default function ForumsActivity() {
  const forumPosts = [ /* mock data */ ];
  
  return (
    <section id="forums-activity" className="section" aria-labelledby="forums-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Community Conversations</span>
          <h2 id="forums-heading">Active Discussions</h2>
          <p>Join the conversation and connect with others on their wellness journey</p>
        </div>
        
        <div className="forums-grid">
          {forumPosts.map(post => (
            <div key={post.id} className="forum-card">
              {/* Card content */}
            </div>
          ))}
        </div>
        
        <div className="forums-cta">
          <Link href="https://anandbodh.com/forums/" className="btn btn-outline">
            View All Forums →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

**Styling Requirements**:
- Card background: `var(--white)`
- Border: `1px solid var(--border)`
- Border radius: `var(--radius-md)`
- Shadow on hover: `var(--shadow-md)`
- Category badge with icon and colored background
- Engagement metrics (replies, likes) with icons
- Active indicator: green pulse dot for recent activity

### 5. Method Component (Existing)

**File**: `src/components/Method.jsx`

**Props**: None (self-contained)

**Data Structure**:
```javascript
{
  num: number,        // Step number (1, 2, 3)
  title: string,      // Step title with Sanskrit name
  desc: string        // Step description
}
```

**Layout**: Horizontal 3-step flow on desktop, vertical stack on mobile

**Integration**:
```javascript
<Reveal direction="up">
  <Method />
</Reveal>
```

### 6. StatsBanner Component (Existing)

**File**: `src/components/StatsBanner.jsx`

**Props**: None (self-contained)

**Layout**: Horizontal pill layout with dividers between 4 statistics

**Styling**: Full-width banner with subtle background, centered content

**Integration**:
```javascript
<Reveal direction="up">
  <StatsBanner />
</Reveal>
```

### Component Communication

All components are self-contained with no inter-component communication required. Each component:
- Manages its own state (if needed)
- Contains its own data
- Handles its own styling
- Exports a default function component

### Accessibility Interfaces

Each section must implement:

```javascript
<section 
  id="unique-id" 
  className="section" 
  aria-labelledby="heading-id"
>
  <h2 id="heading-id">Section Title</h2>
  {/* Content */}
</section>
```

Interactive elements must have:
- Minimum 44x44px touch targets
- Visible focus indicators (`:focus-visible`)
- Keyboard navigation support
- Descriptive ARIA labels where needed

## Data Models

### Forum Post Model (New)

```typescript
interface ForumPost {
  id: string;                    // Unique identifier
  category: string;              // Category name
  categoryIcon: string;          // Emoji icon for category
  categoryColor: string;         // Background color for category badge
  title: string;                 // Post title (max 100 chars)
  author: string;                // Author name
  authorAvatar: string;          // Single letter or emoji
  replyCount: number;            // Number of replies
  likeCount: number;             // Number of likes
  timeAgo: string;               // Relative time (e.g., "2 hours ago")
  isActive: boolean;             // Show active indicator
}
```

### Testimonial Model (Existing)

```typescript
interface Testimonial {
  avatar: string;                // Single letter for avatar
  name: string;                  // Full name
  location: string;              // Role and company
  text: string;                  // Testimonial quote
}
```

### Community Stat Model (Existing)

```typescript
interface CommunityStat {
  end: number;                   // Target number for counter
  suffix: string;                // Suffix like "+" or ""
  label: string;                 // Stat label
}
```

### Community Group Model (Existing)

```typescript
interface CommunityGroup {
  icon: string;                  // Emoji icon
  bg: string;                    // Background color
  name: string;                  // Group name (may include Sanskrit)
  members: string;               // Description text
  pulseColor?: string;           // Optional pulse indicator color
  pulseShadow?: string;          // Optional pulse shadow
}
```

### Health Outcome Model (Existing)

```typescript
interface HealthOutcome {
  icon: string;                  // Emoji icon
  text: string;                  // Outcome description
}
```

### Method Step Model (Existing)

```typescript
interface MethodStep {
  num: number;                   // Step number (1-3)
  title: string;                 // Step title with Sanskrit
  desc: string;                  // Step description
}
```

### Animation Configuration

```typescript
interface RevealConfig {
  delay: number;                 // Delay in milliseconds (0-500)
  direction: 'up' | 'down' | 'left' | 'right';
  threshold: number;             // Intersection threshold (0-1)
  rootMargin: string;            // Observer root margin
}
```

### Responsive Layout Configuration

```typescript
interface LayoutConfig {
  mobile: {
    columns: number;             // Grid columns for mobile
    gap: string;                 // Gap between items
  };
  tablet: {
    columns: number;             // Grid columns for tablet
    gap: string;                 // Gap between items
  };
  desktop: {
    columns: number;             // Grid columns for desktop
    gap: string;                 // Gap between items
  };
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Section Ordering Preservation

*For all* new sections (Testimonials, Community, OutcomesGrid, ForumsActivity, Method, StatsBanner), when rendered in the DOM, they must appear in the correct sequential order: after "Reverse Lifestyle Disorders" section and before "Issues In Our Tissues" section, with each new section appearing in the specified order relative to other new sections.

**Validates: Requirements 1.2, 2.2, 3.2, 4.2, 5.2, 6.2**

### Property 2: Scroll Animation Triggering

*For any* new section on the homepage, when a user scrolls such that the section enters the viewport (12% visible with -60px bottom margin), the Reveal wrapper animation must be triggered exactly once.

**Validates: Requirements 7.1**

### Property 3: Animation Timing Consistency

*For all* scroll-triggered animations across new sections, the animation duration must be between 300ms and 500ms inclusive.

**Validates: Requirements 7.4**

### Property 4: Layout Shift Prevention

*For any* animation on the homepage, the Cumulative Layout Shift (CLS) score must remain at 0, meaning animations must not cause any layout shift.

**Validates: Requirements 7.5**

### Property 5: Mobile Responsive Layout

*For all* new sections, when the viewport width is less than 768px, the section must display in a single-column layout.

**Validates: Requirements 9.1**

### Property 6: Tablet Responsive Layout

*For all* new sections, when the viewport width is between 768px and 1024px (inclusive), the section must display in the appropriate tablet layout as specified for that component.

**Validates: Requirements 9.2**

### Property 7: Desktop Responsive Layout

*For all* new sections, when the viewport width is greater than 1024px, the section must display in the full desktop layout as specified for that component.

**Validates: Requirements 9.3**

### Property 8: Minimum Text Size

*For all* text elements on the homepage, when the viewport width is less than 768px, the computed font size must be at least 14px.

**Validates: Requirements 9.4**

### Property 9: Touch Target Size

*For all* interactive elements (buttons, links) on the homepage, when the viewport width is less than 768px, the element must have a minimum touch target size of 44x44 pixels.

**Validates: Requirements 9.5**

### Property 10: No Horizontal Overflow

*For any* viewport width, the homepage body element must not have horizontal overflow (scrollWidth must equal clientWidth).

**Validates: Requirements 9.6**

### Property 11: ARIA Label Presence

*For all* new sections, the section element must include an `aria-labelledby` attribute that references a valid heading ID within that section.

**Validates: Requirements 10.1**

### Property 12: Keyboard Accessibility

*For all* interactive elements (buttons, links, form inputs) on the homepage, the element must be keyboard accessible (reachable via Tab key) and must display a visible focus indicator when focused.

**Validates: Requirements 10.2**

### Property 13: Heading Hierarchy

*For all* heading elements on the homepage, the heading levels must follow proper nesting rules: h1 appears once, h2 follows h1, h3 follows h2 or h1, and no heading levels are skipped.

**Validates: Requirements 10.3**

### Property 14: Image Alt Text

*For all* image elements on the homepage, the element must include a descriptive `alt` attribute (non-empty string).

**Validates: Requirements 10.4**

### Property 15: Color Contrast Compliance

*For all* text elements on the homepage, the color contrast ratio between text and background must meet WCAG AA standards: at least 4.5:1 for normal text (< 18pt or < 14pt bold) and at least 3:1 for large text (≥ 18pt or ≥ 14pt bold).

**Validates: Requirements 10.5**

### Property 16: Reduced Motion Respect

*For all* animations on the homepage, when the user's system has `prefers-reduced-motion: reduce` set, the animation duration must be reduced to 0ms or the animation must be disabled entirely.

**Validates: Requirements 10.6**

## Error Handling

### Component Loading Failures

**Scenario**: Existing component fails to import or render

**Handling Strategy**:
- Use React Error Boundaries to catch component rendering errors
- Display fallback UI with error message
- Log error to console for debugging
- Prevent entire page crash

**Implementation**:
```javascript
// Error boundary wrapper for each section
<ErrorBoundary fallback={<SectionErrorFallback />}>
  <Reveal direction="up">
    <Testimonials />
  </Reveal>
</ErrorBoundary>
```

### Lottie Animation Loading Failures

**Scenario**: Lottie JSON fails to load from CDN

**Handling Strategy**:
- Already handled by existing `useLottie` hook
- Falls back to emoji when animation data is null
- No user-facing error, graceful degradation

**Current Implementation**:
```javascript
function LottieIcon({ url, fallback, size = 56 }) {
  const animData = useLottie(url);
  if (!animData) return <span style={{ fontSize: size * 0.6 }}>{fallback}</span>;
  // ... render Lottie
}
```

### Intersection Observer Unsupported

**Scenario**: Browser doesn't support Intersection Observer API

**Handling Strategy**:
- Polyfill via npm package `intersection-observer`
- Add to dependencies and import in layout.js
- Fallback: Show all content immediately (no animations)

**Implementation**:
```javascript
// In layout.js or page.js
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  import('intersection-observer');
}
```

### Responsive Layout Breakage

**Scenario**: CSS Grid or Flexbox not supported in older browsers

**Handling Strategy**:
- Use CSS feature queries (`@supports`)
- Provide fallback layouts using older CSS techniques
- Ensure content remains accessible even if layout is suboptimal

**Implementation**:
```css
/* Fallback for browsers without grid support */
.forums-grid {
  display: block; /* Fallback */
}

@supports (display: grid) {
  .forums-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Missing or Invalid Data

**Scenario**: Component data array is empty or malformed

**Handling Strategy**:
- Components use hardcoded mock data (no external API calls)
- Validate data structure at component initialization
- Display empty state message if data is invalid

**Implementation**:
```javascript
export default function ForumsActivity() {
  const forumPosts = [ /* data */ ];
  
  if (!forumPosts || forumPosts.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <p>No forum activity available at this time.</p>
        </div>
      </section>
    );
  }
  
  // ... render posts
}
```

### Accessibility Violations

**Scenario**: ARIA labels or heading hierarchy is incorrect

**Handling Strategy**:
- Use automated testing tools (axe-core, jest-axe) to catch violations
- Manual testing with screen readers (NVDA, JAWS, VoiceOver)
- Fix violations before deployment
- Document accessibility requirements in component JSDoc

### Animation Performance Issues

**Scenario**: Animations cause jank or poor performance on low-end devices

**Handling Strategy**:
- Use CSS transforms (translateY) instead of top/margin for animations
- Leverage GPU acceleration with `will-change` property
- Limit number of simultaneously animating elements
- Respect `prefers-reduced-motion` setting

**Implementation**:
```css
.reveal-wrap {
  will-change: transform, opacity;
  transition: transform var(--transition), opacity var(--transition);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-wrap {
    transition: none;
  }
}
```

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, component rendering, DOM structure, and edge cases
- **Property tests**: Verify universal properties across all inputs, viewport sizes, and sections

Both testing approaches are complementary and necessary. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Unit Testing

**Framework**: Jest + React Testing Library

**Test Files**:
- `src/components/__tests__/ForumsActivity.test.jsx` (new component)
- `src/app/__tests__/page.integration.test.jsx` (integration tests)

**Unit Test Coverage**:

1. **Component Rendering Tests** (Examples)
   - Testimonials component renders with 3 testimonials
   - Community component renders with animated counters
   - OutcomesGrid component renders with 8 outcome tiles
   - ForumsActivity component renders with 4 forum posts
   - Method component renders with 3 steps
   - StatsBanner component renders with 4 statistics

2. **DOM Structure Tests** (Examples)
   - Each section has correct `id` attribute
   - Each section has `aria-labelledby` pointing to heading
   - Sections appear in correct order in DOM
   - Each section is wrapped in Reveal component

3. **Responsive Layout Tests** (Examples)
   - ForumsActivity shows 2 columns at 1025px width
   - ForumsActivity shows 1 column at 767px width
   - OutcomesGrid shows 4 columns at 1025px width
   - OutcomesGrid shows 2 columns at 800px width
   - OutcomesGrid shows 1 column at 767px width

4. **Content Tests** (Examples)
   - Testimonials display names, roles, and quotes
   - Community displays specific stat labels
   - OutcomesGrid includes "All-Day Energy" outcome
   - ForumsActivity includes "View All Forums" button
   - Method displays "Awaken — Jagruti" step
   - StatsBanner displays "iScience August 2022" reference

5. **Interaction Tests** (Examples)
   - Hover over outcome tile shows hover effect
   - Click on "View All Forums" navigates to correct URL
   - Click on "Join the Community" navigates to registration
   - Focus on interactive elements shows focus indicator

6. **Edge Cases**
   - Empty forum posts array shows empty state
   - Missing Lottie animation falls back to emoji
   - IntersectionObserver not supported shows content immediately

**Example Unit Test**:
```javascript
import { render, screen } from '@testing-library/react';
import ForumsActivity from '@/components/ForumsActivity';

describe('ForumsActivity Component', () => {
  it('renders 4 forum posts with required fields', () => {
    render(<ForumsActivity />);
    
    const posts = screen.getAllByRole('article');
    expect(posts).toHaveLength(4);
    
    posts.forEach(post => {
      expect(post).toHaveTextContent(/\d+ replies/i);
      expect(post).toHaveTextContent(/\d+ likes/i);
      expect(post).toHaveTextContent(/\d+ (hour|day|week)s? ago/i);
    });
  });
  
  it('includes View All Forums button with correct link', () => {
    render(<ForumsActivity />);
    
    const button = screen.getByRole('link', { name: /view all forums/i });
    expect(button).toHaveAttribute('href', 'https://anandbodh.com/forums/');
  });
});
```

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**: Minimum 100 iterations per property test

**Test File**: `src/app/__tests__/page.properties.test.jsx`

**Property Test Coverage**:

Each correctness property from the design document must be implemented as a property-based test with appropriate generators.

**Example Property Test**:

```javascript
import fc from 'fast-check';
import { render } from '@testing-library/react';
import Home from '@/app/page';

/**
 * Feature: homepage-enhancement-sections, Property 8: Minimum Text Size
 * 
 * For all text elements on the homepage, when the viewport width is less than 768px,
 * the computed font size must be at least 14px.
 */
describe('Property: Minimum Text Size', () => {
  it('ensures all text is at least 14px on mobile viewports', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 767 }), // Mobile viewport widths
        (viewportWidth) => {
          // Set viewport
          global.innerWidth = viewportWidth;
          window.dispatchEvent(new Event('resize'));
          
          // Render homepage
          const { container } = render(<Home />);
          
          // Get all text elements
          const textElements = container.querySelectorAll('p, span, a, button, h1, h2, h3, h4, li');
          
          // Check each element's computed font size
          textElements.forEach(element => {
            const fontSize = parseFloat(window.getComputedStyle(element).fontSize);
            expect(fontSize).toBeGreaterThanOrEqual(14);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: homepage-enhancement-sections, Property 10: No Horizontal Overflow
 * 
 * For any viewport width, the homepage body element must not have horizontal overflow.
 */
describe('Property: No Horizontal Overflow', () => {
  it('prevents horizontal scrolling at any viewport width', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }), // All viewport widths
        (viewportWidth) => {
          // Set viewport
          global.innerWidth = viewportWidth;
          window.dispatchEvent(new Event('resize'));
          
          // Render homepage
          const { container } = render(<Home />);
          const body = container.querySelector('main');
          
          // Check for horizontal overflow
          expect(body.scrollWidth).toBeLessThanOrEqual(body.clientWidth);
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: homepage-enhancement-sections, Property 15: Color Contrast Compliance
 * 
 * For all text elements on the homepage, the color contrast ratio must meet WCAG AA standards.
 */
describe('Property: Color Contrast Compliance', () => {
  it('ensures all text meets WCAG AA contrast ratios', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('p', 'span', 'a', 'button', 'h1', 'h2', 'h3', 'h4'),
        (tagName) => {
          const { container } = render(<Home />);
          const elements = container.querySelectorAll(tagName);
          
          elements.forEach(element => {
            const styles = window.getComputedStyle(element);
            const fontSize = parseFloat(styles.fontSize);
            const fontWeight = parseInt(styles.fontWeight);
            
            // Calculate contrast ratio (using helper function)
            const ratio = getContrastRatio(
              styles.color,
              styles.backgroundColor
            );
            
            // Determine if large text
            const isLargeText = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
            const minRatio = isLargeText ? 3 : 4.5;
            
            expect(ratio).toBeGreaterThanOrEqual(minRatio);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

**Scope**: Test the complete homepage with all sections integrated

**Test Scenarios**:
1. All six new sections render in correct order
2. Existing sections remain functional after integration
3. Scroll animations trigger for each section
4. Responsive layouts work across all breakpoints
5. Accessibility tree is correct with proper ARIA labels
6. No console errors or warnings during render

### Visual Regression Testing

**Tool**: Percy or Chromatic

**Test Cases**:
- Homepage at 375px (mobile)
- Homepage at 768px (tablet)
- Homepage at 1440px (desktop)
- Hover states on interactive elements
- Focus states on keyboard navigation
- Dark mode (if applicable)

### Accessibility Testing

**Tools**:
- jest-axe for automated accessibility testing
- Manual testing with screen readers (NVDA, JAWS, VoiceOver)
- Keyboard navigation testing

**Test Coverage**:
- All ARIA labels are correct
- Heading hierarchy is proper
- Color contrast meets WCAG AA
- Keyboard navigation works
- Focus indicators are visible
- Screen reader announces content correctly

### Performance Testing

**Metrics**:
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1
- Time to Interactive (TTI) < 3.5s

**Tools**:
- Lighthouse CI
- WebPageTest
- Chrome DevTools Performance panel

**Test Scenarios**:
- Homepage load on 3G connection
- Homepage load on slow CPU (4x throttling)
- Animation performance during scroll
- Memory usage during extended scrolling

### Test Execution Strategy

1. **Development**: Run unit tests on file save (watch mode)
2. **Pre-commit**: Run unit tests + linting
3. **CI Pipeline**: Run all tests (unit + property + integration + accessibility)
4. **Pre-deployment**: Run visual regression + performance tests
5. **Post-deployment**: Run smoke tests on production

### Test Coverage Goals

- **Unit Test Coverage**: > 80% line coverage
- **Property Test Coverage**: All 16 correctness properties tested
- **Integration Test Coverage**: All critical user paths tested
- **Accessibility Test Coverage**: 0 axe violations

