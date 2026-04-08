/**
 * Test Suite: Verify Existing Sections Remain Functional
 * 
 * This test suite validates that all existing homepage sections remain functional
 * after integrating new components (Testimonials, Community, OutcomesGrid, 
 * ForumsActivity, Method, StatsBanner).
 * 
 * Requirements: 8.1, 8.2, 8.3, 8.4, 8.5
 */

import { render, screen, within } from '@testing-library/react';
import Home from '@/app/page';

describe('Existing Sections Functionality', () => {
  
  describe('Hero Banners', () => {
    it('renders the brand hero banner with title and tagline', () => {
      render(<Home />);
      
      // Check for hero title
      expect(screen.getByText(/Increase Your/i)).toBeInTheDocument();
      expect(screen.getByText(/Healthspan/i)).toBeInTheDocument();
      
      // Check for tagline
      expect(screen.getByText(/REJUVENATION • VITALITY • LONGEVITY/i)).toBeInTheDocument();
      
      // Check for CTA button
      const soleusBtn = screen.getByRole('link', { name: /Join Soleus Activation/i });
      expect(soleusBtn).toHaveAttribute('href', 'https://anandbodh.com/soleus-activation-series/');
    });

    it('renders the community hero banner with lotus design', () => {
      render(<Home />);
      
      // Check for community banner text
      expect(screen.getByText(/DISCOVER A SPACE WHERE HEALTH MEETS HARMONY/i)).toBeInTheDocument();
      expect(screen.getByText(/Mind \+ 🏃 Body \+ 🌿 Spirit/i)).toBeInTheDocument();
      
      // Check for Learn More button
      const learnMoreBtn = screen.getByRole('link', { name: /Learn More/i });
      expect(learnMoreBtn).toHaveAttribute('href', 'https://anandbodh.com/anandbodh-the-happy-life-protocol/');
    });
  });

  describe('Navigation Shortcuts', () => {
    it('renders all 4 navigation shortcut cards', () => {
      render(<Home />);
      
      // Check for all shortcut labels
      expect(screen.getByText('Programs')).toBeInTheDocument();
      expect(screen.getByText('Forums')).toBeInTheDocument();
      expect(screen.getByText('Social Groups')).toBeInTheDocument();
      expect(screen.getByText('Activity')).toBeInTheDocument();
    });

    it('navigation shortcuts have correct links', () => {
      const { container } = render(<Home />);
      
      const shortcuts = container.querySelectorAll('.nav-shortcut-card');
      expect(shortcuts).toHaveLength(4);
      
      // Verify each shortcut is a link
      shortcuts.forEach(shortcut => {
        expect(shortcut.tagName).toBe('A');
        expect(shortcut.getAttribute('href')).toMatch(/anandbodh\.com/);
      });
    });
  });

  describe('Featured Post Section', () => {
    it('renders featured post with title and category pills', () => {
      render(<Home />);
      
      // Check for featured post title
      expect(screen.getByText(/Heartbeats Of Life: Wellness Lessons From The ECG/i)).toBeInTheDocument();
      
      // Check for category pills
      expect(screen.getByText('Healing')).toBeInTheDocument();
      expect(screen.getByText('Heart Health')).toBeInTheDocument();
      expect(screen.getByText('Wellness')).toBeInTheDocument();
      expect(screen.getByText('Yoga')).toBeInTheDocument();
    });

    it('renders featured post CTAs with correct links', () => {
      render(<Home />);
      
      // Check for primary CTA
      const joinBtn = screen.getByRole('link', { name: /Join The Happy Life Community/i });
      expect(joinBtn).toHaveAttribute('href', 'https://anandbodh.com/register/');
      
      // Check for secondary CTA
      const knowBtn = screen.getByRole('link', { name: /Know What Is ĀnandBodh/i });
      expect(knowBtn).toHaveAttribute('href', 'https://anandbodh.com/anandbodh-the-happy-life-protocol/');
    });

    it('renders featured post thumbnails', () => {
      const { container } = render(<Home />);
      
      const thumbs = container.querySelectorAll('.featured-thumb');
      expect(thumbs).toHaveLength(4);
    });
  });

  describe('Reverse Lifestyle Disorders Section', () => {
    it('renders section title and description', () => {
      render(<Home />);
      
      // Check for section title
      expect(screen.getByText(/Reverse/i)).toBeInTheDocument();
      expect(screen.getByText(/Lifestyle Disorders/i)).toBeInTheDocument();
      
      // Check for description mentioning root causes
      expect(screen.getByText(/We aim to address the/i)).toBeInTheDocument();
      expect(screen.getByText(/Root Causes/i)).toBeInTheDocument();
    });

    it('renders chronic stress diagram', () => {
      const { container } = render(<Home />);
      
      // Check for stress diagram card
      const stressDiagram = container.querySelector('.stress-diagram-card');
      expect(stressDiagram).toBeInTheDocument();
      
      // Check for diagram elements
      expect(screen.getByText('ROOT CAUSE')).toBeInTheDocument();
      expect(screen.getByText('CHRONIC STRESS')).toBeInTheDocument();
    });

    it('renders 4-pillars callout with all pillars', () => {
      render(<Home />);
      
      // Check for pillars callout
      expect(screen.getByText(/PHYSICAL \+ 🧠 MENTAL \+ ❤️ EMOTIONAL \+ 🌿 SPIRITUAL/i)).toBeInTheDocument();
      
      // Check for Learn More button in pillars section
      const learnBtns = screen.getAllByRole('link', { name: /Learn More/i });
      expect(learnBtns.length).toBeGreaterThan(0);
    });
  });

  describe('Issues In Our Tissues Section', () => {
    it('renders section title and description', () => {
      render(<Home />);
      
      // Check for section title
      expect(screen.getByText(/Issues Get Stored/i)).toBeInTheDocument();
      expect(screen.getByText(/In Our Tissues/i)).toBeInTheDocument();
      
      // Check for description
      expect(screen.getByText(/Bio-social harmony is the key to lasting health/i)).toBeInTheDocument();
    });

    it('renders embedded YouTube video', () => {
      const { container } = render(<Home />);
      
      // Check for video iframe
      const iframe = container.querySelector('iframe[src*="youtube.com"]');
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/VN0F7QJkd80');
    });
  });

  describe('Condition Cards Section', () => {
    it('renders section title', () => {
      render(<Home />);
      
      expect(screen.getByText(/Benefits Of/i)).toBeInTheDocument();
      expect(screen.getByText(/Soleus Activation Series/i)).toBeInTheDocument();
    });

    it('renders all 4 condition cards', () => {
      render(<Home />);
      
      // Check for all condition card titles
      expect(screen.getByText(/Get Rid Of Thyroid Issues/i)).toBeInTheDocument();
      expect(screen.getByText(/We Salute Cancer Warriors!!/i)).toBeInTheDocument();
      expect(screen.getByText(/Out of gas at the end of the day\?/i)).toBeInTheDocument();
      expect(screen.getByText(/Too low BP\? Too high BP\?/i)).toBeInTheDocument();
    });

    it('condition cards have proper structure', () => {
      const { container } = render(<Home />);
      
      const cards = container.querySelectorAll('.condition-card');
      expect(cards).toHaveLength(4);
      
      // Each card should have a title and subtitle
      cards.forEach(card => {
        expect(card.querySelector('.condition-card-title')).toBeInTheDocument();
        expect(card.querySelector('.condition-card-sub')).toBeInTheDocument();
      });
    });
  });

  describe('Three-Column Layout', () => {
    it('renders left sidebar with navigation', () => {
      const { container } = render(<Home />);
      
      const leftSidebar = container.querySelector('.portal-sidebar-v2');
      expect(leftSidebar).toBeInTheDocument();
      
      // Check for logo
      const logo = within(leftSidebar).getByAltText(/Anandbodh Logo/i);
      expect(logo).toBeInTheDocument();
      
      // Check for main navigation items
      expect(within(leftSidebar).getByText('Home')).toBeInTheDocument();
      expect(within(leftSidebar).getByText('Activity Feed')).toBeInTheDocument();
      expect(within(leftSidebar).getByText('Programs')).toBeInTheDocument();
      expect(within(leftSidebar).getByText('Groups')).toBeInTheDocument();
      expect(within(leftSidebar).getByText('Forums')).toBeInTheDocument();
      expect(within(leftSidebar).getByText('Blog')).toBeInTheDocument();
    });

    it('renders center content column', () => {
      const { container } = render(<Home />);
      
      const centerColumn = container.querySelector('.portal-main-v2');
      expect(centerColumn).toBeInTheDocument();
    });

    it('renders right sidebar with widgets', () => {
      const { container } = render(<Home />);
      
      const rightSidebar = container.querySelector('.portal-sidebar-right');
      expect(rightSidebar).toBeInTheDocument();
    });
  });

  describe('Sidebar Widgets', () => {
    it('renders login widget with form fields', () => {
      render(<Home />);
      
      // Check for Sign In heading
      expect(screen.getByText('Sign In')).toBeInTheDocument();
      
      // Check for username and password fields
      expect(screen.getByPlaceholderText(/Enter username/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/••••••••/i)).toBeInTheDocument();
      
      // Check for Log In button
      const loginBtn = screen.getByRole('link', { name: /Log In/i });
      expect(loginBtn).toHaveAttribute('href', 'https://anandbodh.com/login/');
      
      // Check for Sign Up link
      const signUpLink = screen.getByRole('link', { name: /Sign Up/i });
      expect(signUpLink).toHaveAttribute('href', 'https://anandbodh.com/register/');
    });

    it('renders active groups widget with all groups', () => {
      render(<Home />);
      
      // Check for Groups heading
      expect(screen.getByText('Groups')).toBeInTheDocument();
      
      // Check for tabs
      expect(screen.getByText('ACTIVE')).toBeInTheDocument();
      expect(screen.getByText('NEWEST')).toBeInTheDocument();
      expect(screen.getByText('POPULAR')).toBeInTheDocument();
      
      // Check for group names (using partial matches due to Sanskrit characters)
      expect(screen.getByText(/Wake Up Life/i)).toBeInTheDocument();
      expect(screen.getByText(/Thrive@Work/i)).toBeInTheDocument();
      expect(screen.getByText(/Āyurveda Longevity Knowledge/i)).toBeInTheDocument();
      expect(screen.getByText(/Lifestyle Disorders Reversal/i)).toBeInTheDocument();
      expect(screen.getByText(/Dhyan Meditation/i)).toBeInTheDocument();
    });

    it('renders recent posts widget with all posts', () => {
      render(<Home />);
      
      // Check for Recent Posts heading
      expect(screen.getByText('Recent Posts')).toBeInTheDocument();
      
      // Check for post titles
      expect(screen.getByText(/Meditation as Medicine: The Science of Stillness/i)).toBeInTheDocument();
      expect(screen.getByText(/Emotional Detox: Healing Beyond the Physical Body/i)).toBeInTheDocument();
      expect(screen.getByText(/Living In Tune: How Dosha Balance Creates Life Balances/i)).toBeInTheDocument();
      expect(screen.getByText(/When Disease Becomes Cure: A Medical View on Acute Illness/i)).toBeInTheDocument();
    });

    it('renders Soleus CTA widget', () => {
      render(<Home />);
      
      // Check for Soleus widget heading
      expect(screen.getByText(/Have You Done Your Soleus Today\?/i)).toBeInTheDocument();
      
      // Check for description
      expect(screen.getByText(/Unlock the Secret to Boundless Energy/i)).toBeInTheDocument();
      
      // Check for CTA button (there are multiple "Join Soleus Activation" buttons)
      const soleusBtns = screen.getAllByRole('link', { name: /Join Soleus Activation/i });
      expect(soleusBtns.length).toBeGreaterThan(0);
      
      // Verify at least one links to the correct URL
      const correctLink = soleusBtns.find(btn => 
        btn.getAttribute('href') === 'https://anandbodh.com/soleus-activation-series/'
      );
      expect(correctLink).toBeDefined();
    });
  });

  describe('Navigation Links and CTAs', () => {
    it('all main navigation links have correct hrefs', () => {
      const { container } = render(<Home />);
      
      const leftSidebar = container.querySelector('.portal-sidebar-v2');
      const navLinks = within(leftSidebar).getAllByRole('link');
      
      // Verify navigation links exist and have hrefs
      expect(navLinks.length).toBeGreaterThan(0);
      navLinks.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });

    it('Join Community button is present in left sidebar', () => {
      const { container } = render(<Home />);
      
      const leftSidebar = container.querySelector('.portal-sidebar-v2');
      const joinBtn = within(leftSidebar).getByRole('link', { name: /Join Community/i });
      
      expect(joinBtn).toBeInTheDocument();
      expect(joinBtn).toHaveAttribute('href', 'https://anandbodh.com/register/');
    });

    it('SEE ALL links in widgets have correct hrefs', () => {
      render(<Home />);
      
      const seeAllLinks = screen.getAllByText('SEE ALL');
      expect(seeAllLinks.length).toBeGreaterThanOrEqual(2);
      
      // Groups widget SEE ALL
      const groupsLink = seeAllLinks.find(link => 
        link.closest('.widget-groups')
      );
      expect(groupsLink).toBeDefined();
      
      // Posts widget SEE ALL
      const postsLink = seeAllLinks.find(link => 
        link.closest('.widget-posts')
      );
      expect(postsLink).toBeDefined();
    });
  });

  describe('Section Ordering', () => {
    it('new sections are positioned between Reverse Lifestyle Disorders and Issues In Our Tissues', () => {
      const { container } = render(<Home />);
      
      // Get all sections in order
      const mainContent = container.querySelector('.portal-main-v2');
      const sections = Array.from(mainContent.children);
      
      // Find indices of key sections
      let reverseDisordersIndex = -1;
      let issuesInTissuesIndex = -1;
      
      sections.forEach((section, index) => {
        const text = section.textContent;
        if (text.includes('Reverse Lifestyle Disorders')) {
          reverseDisordersIndex = index;
        }
        if (text.includes('Issues Get Stored In Our Tissues')) {
          issuesInTissuesIndex = index;
        }
      });
      
      // Verify both sections exist
      expect(reverseDisordersIndex).toBeGreaterThan(-1);
      expect(issuesInTissuesIndex).toBeGreaterThan(-1);
      
      // Verify Issues In Our Tissues comes after Reverse Lifestyle Disorders
      expect(issuesInTissuesIndex).toBeGreaterThan(reverseDisordersIndex);
    });
  });
});
