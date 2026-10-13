# Bihar Vikas Vidyalaya — Modern School Website Redesign

## Design Specification (`design.md`)

## 1. Project Overview

**Project:** Bihar Vikas Vidyalaya (BVV)  
**Official Website:** https://www.bvv.co.in/  
**Reference Website:** https://www.meridiantheschool.com/  
**Design Direction:** Modern, Image-Rich, Professional School Website  
**Website Type:** Single-Page Landing Page  
**School Level:** Classes I–XII  
**Board:** CBSE  
**Medium:** English  
**Location:** Gopalganj, Bihar, India

### Project Objective

Redesign the existing Bihar Vikas Vidyalaya website using the reference website's broad school-focused layout, content hierarchy, photography-led presentation, and comprehensive institutional sections.

The new website must look more polished, visually consistent, modern, responsive, and professionally developed than a typical school website.

The website will be presented to school directors as a design and development showcase.

**Important:** Build only one landing page. Every section, including leadership, academics, facilities, gallery, news, FAQs, admission information, and contact details, must exist on the same page.

Do not create separate pages for individual sections.

---

## 2. Design Inspiration

Use the reference website for inspiration in the following areas:

- A top information bar containing school contact details.
- A comprehensive but well-organized navigation menu.
- A large, image-led hero section.
- A school introduction with supporting photography.
- Leadership and faculty presentation.
- Academic information and school highlights.
- Statistics and key information.
- Frequently asked questions.
- Admission-focused calls to action.
- A comprehensive footer with contact information and useful links.

Improve the overall experience through stronger typography, more consistent spacing, refined colors, better photography, improved mobile navigation, and smoother interactions.

Do not reproduce the reference website pixel by pixel. Create an original design for Bihar Vikas Vidyalaya.

---

## 3. Visual Identity

Create a professional educational identity that combines trust, academic seriousness, warmth, and contemporary design.

### Color Palette

| Purpose | Color | Hex |
|---|---|---|
| Primary | Deep Academic Blue | `#163A63` |
| Secondary | Royal Blue | `#245B91` |
| Accent | Warm Gold | `#D7A84B` |
| Main Background | Soft White | `#FFFFFF` |
| Alternate Background | Light Blue-Gray | `#F3F6FA` |
| Highlight Background | Pale Gold | `#FBF5E8` |
| Primary Text | Dark Charcoal | `#202A36` |
| Secondary Text | Slate Gray | `#647184` |
| Borders | Light Gray | `#E3E8EF` |

### Color Guidelines

- Use white as the main page background.
- Use deep academic blue for headings, the main navigation, important backgrounds, and major CTAs.
- Use royal blue for secondary accents and selected links.
- Use gold sparingly for small highlights, separators, icons, and decorative details.
- Use light blue-gray to distinguish alternate sections.
- Maintain excellent text contrast.

Avoid excessive gradients, multiple competing accent colors, and unnecessary glassmorphism.

The result should feel like a credible educational institution, not a software startup or a children's entertainment website.

---

## 4. Typography

Use a modern, professional typographic system.

**Display Headings:** Plus Jakarta Sans or Manrope, bold and expressive.  
**Body Text:** Inter or Manrope.  
**Navigation:** Manrope, medium weight.  
**Labels and Captions:** Inter, regular or medium weight.

### Typography Rules

- Use large, confident hero headings.
- Maintain a consistent heading hierarchy.
- Keep paragraphs concise and readable.
- Use generous line height.
- Use uppercase labels selectively.
- Avoid excessive font weights.
- Use responsive typography with CSS `clamp()`.

The website must be readable for parents using both desktop and mobile devices.

---

## 5. Header and Navigation

Create a two-level header inspired by comprehensive institutional websites.

### A. Top Information Bar

Use a compact deep-blue strip containing verified information.

Possible content:

- School location.
- Official school email.
- Official telephone number.
- Optional social media links.

Keep the information concise and ensure it wraps cleanly on mobile.

Do not invent any contact details.

### B. Main Navigation

The main navigation should contain:

- School logo and name.
- Home.
- About Us.
- Academics.
- Leadership.
- Facilities.
- Activities.
- Gallery.
- News & Blog.
- Admissions.
- Contact.

Include a prominent gold or royal-blue **Admission Enquiry** button.

### Desktop Behavior

- Keep the navigation horizontally aligned.
- Use restrained dropdown indicators only if needed.
- Use clear hover and active states.
- Keep spacing balanced.
- Make the header sticky after scrolling if appropriate.

### Mobile Behavior

- Use a compact header with the logo and menu button.
- Open an accessible navigation drawer or dropdown panel.
- Keep admission enquiry accessible.
- Ensure all menu items are keyboard and touch friendly.
- Close the menu after a section link is selected.

All internal navigation must scroll to sections on the same page.

---

## 6. Hero Section

**Section ID:** `home`

The hero must be visually impressive and immediately communicate the school's identity.

### Layout

Use a large photographic hero with a sophisticated split composition or full-width campus photograph.

Include:

- School name.
- A strong headline.
- Concise supporting copy.
- Primary admission CTA.
- Secondary exploration CTA.
- A prominent authentic school photograph.

### Suggested Hero Copy

Eyebrow:

`WELCOME TO BIHAR VIKAS VIDYALAYA`

Headline:

**“Inspiring Young Minds. Building Brighter Futures.”**

Supporting text:

“Discover a learning environment where academic development, curiosity, and personal growth help students prepare for tomorrow.”

Primary CTA:

`Enquire for Admission`

Secondary CTA:

`Explore Our School`

### Hero Photography

Prioritize genuine school photographs showing:

- Campus architecture.
- Students in classrooms.
- Teacher–student interaction.
- Real school activities.

Use a subtle overlay only when needed to maintain readability.

Avoid placing too many badges, statistics, and text blocks over the hero image.

The first viewport should feel spacious, polished, and trustworthy.

---

## 7. School Highlights Strip

Place a compact information strip directly below the hero.

Display four concise highlights:

1. CBSE-Affiliated Education.
2. English-Medium Instruction.
3. Classes I–XII.
4. Gopalganj, Bihar.

Use minimal icons or simple typography with restrained separators.

These facts must be verified against the school's approved information before publication.

Do not invent rankings, awards, establishment years, or student statistics.

---

## 8. About Bihar Vikas Vidyalaya

**Section ID:** `about`

### Section Label

`ABOUT OUR SCHOOL`

### Heading

**“A Learning Environment That Inspires Growth.”**

Create a two-column section containing:

**Left:** Large campus or classroom photograph.

**Right:** School introduction, educational philosophy, and a short CTA.

### Content

Explain:

- The school's educational approach.
- Its commitment to academic learning.
- Student development and participation.
- The importance of a supportive learning environment.
- The school's educational values.

Use existing official website content or management-approved copy.

### Design Details

- White background.
- Large headings.
- Short paragraphs.
- Subtle blue accents.
- Optional small supporting image.
- Generous spacing.

Avoid long text blocks and repetitive feature cards.

---

## 9. Vision and Educational Philosophy

**Section ID:** `vision`

Create a visually distinctive section explaining the school's approach to education.

### Suggested Heading

**“Education That Shapes More Than Academics.”**

Use three content pillars:

- Knowledge and Understanding.
- Character and Responsibility.
- Curiosity and Personal Growth.

These should be presented as design themes, not claims about programmes that have not been verified.

### Layout

Use a light blue-gray background with three horizontally aligned content blocks on desktop.

Each block should include:

- A simple line icon.
- A short heading.
- One concise explanatory paragraph.

Use minimal borders and avoid excessive shadows.

Stack the blocks vertically on mobile.

---

## 10. Academic Programme — Classes I to XII

**Section ID:** `academics`

### Heading

**“A Learning Journey Through Every Stage.”**

Present the academic journey from Classes I to XII in a clear and visually engaging layout.

### Academic Stages

Organize the content into appropriate stages based on the school's actual curriculum:

- Primary Education.
- Middle School.
- Secondary Education.
- Senior Secondary Education.

Verify the school's exact class offerings and the applicable class ranges before publishing stage descriptions.

### Each Stage Should Include

- Stage name.
- Applicable class range.
- Concise educational description.
- Relevant photograph or visual.
- Optional anchor link to the admissions section.

### Visual Design

Use a clean four-column desktop layout or a horizontal academic progression.

Each stage should have a different photographic emphasis or subtle visual distinction.

Avoid using identical oversized cards for every section.

On mobile, use a vertical progression with comfortable spacing.

Do not invent specific subject combinations, examination results, or specialized programmes.

---

## 11. Leadership and Faculty

**Section ID:** `leadership`

### Heading

**“Leadership That Guides Learning.”**

Create a professional leadership section inspired by institutional school websites.

### Content

Where verified and approved, feature:

- Chairman.
- Director or Managing Director.
- Principal.
- Vice Principal.
- Academic leadership.
- Faculty members.

### Profile Design

Each profile may include:

- Authentic portrait.
- Full name.
- Official designation.
- Brief approved biography, if available.

Use a restrained image grid with consistent image dimensions and subtle hover effects.

Keep portraits professional and well-lit.

Do not invent leadership names, qualifications, designations, or biographies.

If information is unavailable, use an alternative section titled “Our Commitment to Learning” instead of displaying fictional profiles.

---

## 12. School Facilities

**Section ID:** `facilities`

### Heading

**“Designed for Learning. Built for Discovery.”**

Create a photography-led showcase of the school's actual facilities.

Potential categories include:

- Academic Blocks.
- Classrooms.
- Library.
- Science Laboratory.
- Computer Laboratory.
- Mathematics Laboratory.
- Sports Facilities.
- Activity Spaces.
- Transportation.
- Student Safety and Support.

Only display facilities confirmed by the school.

### Layout

Use a varied grid combining:

- One large feature image.
- Two smaller supporting images.
- A concise text panel.
- Additional facility highlights.

Each facility should have a clear title and short description.

Use authentic campus photographs wherever possible.

Do not use stock photography in a way that implies a facility exists at BVV when it has not been verified.

---

## 13. Activities and Student Life

**Section ID:** `activities`

### Heading

**“Learning Continues Beyond the Classroom.”**

Showcase the school's extracurricular and student-life experiences.

Potential categories:

- Sports.
- Cultural Events.
- Music and Dance.
- Art and Creativity.
- Celebrations.
- Community Activities.
- Competitions.

Include only activities that actually take place at the school or have been approved for publication.

### Design

Create a vibrant but restrained section using large photographs, concise labels, and a clean grid.

Use a slightly different background color from the facilities section to maintain visual rhythm.

Avoid childish illustrations or excessive decorative shapes.

---

## 14. Photo Gallery

**Section ID:** `gallery`

The gallery should be one of the strongest visual sections of the landing page.

### Heading

**“Life at BVV, Through Our Lens.”**

### Gallery Categories

Where sufficient authentic photographs exist, include:

- Campus.
- Classroom.
- Activities.
- Sports.
- Events.
- Celebrations.

### Gallery Layout

Use a premium image grid with varied aspect ratios.

Recommended composition:

- One large landscape image.
- Two supporting images.
- A row of smaller photographs.
- Consistent gutters.
- Minimal captions.

Do not place every image inside an identical rounded card.

### Functionality

- Category filters.
- Click-to-open lightbox.
- Previous and next image controls.
- Keyboard navigation.
- Escape-to-close behavior.
- Touch-friendly controls.
- Descriptive image alt text.
- Background scroll locking while the lightbox is open.

If there are many photographs, lazy-load images below the fold.

Use authentic school photographs. Clearly identify any temporary demo imagery so it can be replaced before launch.

---

## 15. News, Events and Blog

**Section ID:** `news`

### Heading

**“What's Happening at BVV.”**

Create a modern content section for school updates and educational stories.

### Content Categories

- School News.
- Events and Celebrations.
- Academic Updates.
- Sports Highlights.
- Parent Announcements.
- Educational Insights.

### Article Preview Layout

Display three article previews on desktop.

Each preview should include:

- Featured image.
- Category label.
- Verified publication date.
- Article title.
- Short excerpt.
- Read More control.

Use one visually prominent featured article alongside two smaller stories if the available content supports it.

### Single-Page Behavior

Do not create separate blog pages or article routes for this project.

When users click Read More, open the article in an accessible modal or inline expansion on the same page.

The structure should allow future CMS or backend integration.

Do not fabricate article dates, school news, awards, or event details.

If genuine content is unavailable, use clearly identified demo entries for the presentation.

---

## 16. Why Choose BVV?

**Section ID:** `why-bvv`

### Heading

**“A Strong Foundation for the Future.”**

Create a visually prominent section that summarizes the school's value to families.

Potential themes:

- Academic development.
- Student participation.
- Supportive learning.
- Personal growth.
- Extracurricular opportunities.
- Communication with parents.

Use claims supported by actual school information.

### Design

Use a deep-blue background with white text and gold accents.

Create a two-column layout:

- Left: large headline and short introduction.
- Right: three or four concise highlights.

Use simple line icons or understated numbered markers.

Avoid unsupported claims such as “No. 1 School” or “Best School in Bihar.”

---

## 17. School Achievements and Statistics

Include this section only if verified data is available.

### Possible Content

- Number of students.
- Number of teachers.
- Years of operation.
- Academic achievements.
- Verified awards.
- Sports achievements.

### Visual Design

Use a clean horizontal statistics strip or a compact highlights section.

Use restrained number animations only for verified statistics.

Do not use arbitrary counters, exaggerated claims, or fictional numbers.

If reliable statistics are unavailable, replace this section with a visual feature about the school's educational approach.

---

## 18. Parent Testimonials

**Section ID:** `testimonials`

### Heading

**“Trust Built Through Experience.”**

Display genuine, approved parent or alumni testimonials where available.

### Design

- White or pale-blue background.
- Large quotation typography.
- Optional parent photograph with permission.
- Clear attribution.
- Simple carousel if multiple testimonials exist.

Do not fabricate quotations, names, star ratings, or endorsements.

If testimonials are unavailable, use an educational philosophy statement or a parent information panel instead.

---

## 19. Admissions Section

**Section ID:** `admissions`

Create a prominent admission-focused section before the FAQ and contact areas.

### Headline

**“Your Child's Next Chapter Starts Here.”**

### Supporting Text

“Connect with Bihar Vikas Vidyalaya to learn more about our educational environment and admission process.”

### Primary CTA

`Enquire for Admission`

### Secondary CTA

`Contact the School`

### Design

Use a deep-blue background with a large white headline, restrained gold details, and a clean visual composition.

Keep the CTA visually prominent without making the section overly promotional.

Do not claim admissions are open unless confirmed by school management.

---

## 20. Admission Enquiry Form

Include a simple, accessible form near the admissions section.

### Fields

- Parent or Guardian Name.
- Student Name.
- Phone Number.
- Class of Interest.
- Email Address (optional).
- Message (optional).

### Requirements

- Visible form labels.
- Required-field validation.
- Phone number validation.
- Accessible error messages.
- Submission and loading states.
- Success and error feedback.
- Privacy notice.
- Spam protection when connected to a backend.

The form must not falsely indicate successful submission when no working endpoint exists.

If the implementation is frontend-only, identify it as a demo or provide an approved contact alternative.

---

## 21. Frequently Asked Questions

**Section ID:** `faq`

### Heading

**“Frequently Asked Questions.”**

Suggested questions:

- Which classes does BVV offer?
- Is the school CBSE-affiliated?
- Is English the medium of instruction?
- How can parents enquire about admission?
- Which documents may be required?
- How can parents contact the school?
- Where is the school located?

Use verified school information for all answers.

For questions requiring confirmation, direct visitors to the official school contact channel.

### Interaction

- Accessible accordion.
- Keyboard operation.
- Visible open and closed states.
- Smooth transitions.
- Appropriate expanded-state attributes.
- Mobile-friendly spacing.

---

## 22. Contact and Location

**Section ID:** `contact`

### Heading

**“Let's Connect.”**

Create a clean contact section with two main areas.

**Contact Information:**

- Official school address.
- Verified telephone number.
- Official email address.
- Confirmed office timings.
- Directions link.
- Approved social media profiles.

**Location Area:**

- Optional embedded map.
- Directions CTA.
- Concise location information.

Use authentic school contact details.

Lazy-load the map if it is embedded.

On mobile, stack the content vertically and ensure telephone and email links work correctly.

---

## 23. Footer

Create a professional, comprehensive footer.

### Column 1: School Identity

- Official logo.
- School name.
- Short approved introduction.

### Column 2: Quick Navigation

- About Us.
- Academics.
- Facilities.
- Gallery.
- News & Blog.

### Column 3: Parent Information

- Admission Enquiry.
- Academic Information.
- FAQs.
- Contact.

### Column 4: Contact

- Verified address.
- Phone number.
- Email.
- Approved social links.

Include a bottom copyright bar and applicable privacy information.

All navigation links must point to sections on the same page unless they link to a genuine external resource.

Do not add non-functional links.

---

## 24. Interaction and Animation

Use modern, subtle interactions throughout the landing page.

Recommended:

- Sticky navigation.
- Smooth section scrolling.
- Hero text entrance.
- Image hover zoom.
- Section reveal animations.
- Gallery filtering.
- Lightbox transitions.
- FAQ accordion.
- Button hover states.
- Subtle counter animation for verified statistics.

### Technical Rules

- Prefer CSS transitions and transforms.
- Use Intersection Observer when necessary.
- Avoid excessive parallax.
- Avoid scroll hijacking.
- Avoid unnecessary animation libraries.
- Respect `prefers-reduced-motion`.
- Ensure all interactions work on touch devices.

The website must remain fully usable when animations are disabled.

---

## 25. Responsive Design

Build the website mobile-first.

### Desktop

- Wide hero composition.
- Comprehensive navigation.
- Multi-column academic and gallery layouts.
- Spacious photography sections.
- Balanced content widths.

### Tablet

- Simplified navigation.
- Adapted image grids.
- Reduced spacing.
- Responsive heading sizes.

### Mobile

- Compact header.
- Accessible navigation drawer.
- Stacked hero composition.
- Touch-friendly CTAs.
- Single-column content where appropriate.
- Responsive gallery.
- Accessible enquiry form.
- No horizontal overflow.

Test at approximately:

- 360px.
- 390px.
- 768px.
- 1024px.
- 1440px.

Do not simply shrink desktop layouts; adapt the composition to each screen size.

---

## 26. Technical Implementation

Before coding, inspect the existing BVV website and its project structure.

If the existing site uses Django or another established backend, preserve its architecture and integrate the redesign into the existing project where possible.

Use:

- Semantic HTML5.
- Modern CSS or the existing styling framework.
- Vanilla JavaScript or the current frontend framework.
- Reusable templates or components.
- Optimized image assets.
- SVG icons.
- Accessible interactive components.

Avoid introducing unnecessary dependencies or rebuilding the backend solely for visual changes.

Preserve existing functional routes, important content, and SEO assets.

All landing-page sections must work without requiring navigation to separate internal pages.

---

## 27. Performance and SEO

### Performance

- Optimize images.
- Use WebP or AVIF where appropriate.
- Provide responsive image sizes.
- Lazy-load below-the-fold images.
- Set explicit image dimensions.
- Optimize font loading.
- Minimize render-blocking assets.
- Avoid unnecessary scripts.
- Lazy-load maps and nonessential embeds.

Target a Lighthouse mobile Performance score of 90+ where feasible, and verify it through actual testing.

### SEO

Include:

- Descriptive page title.
- Unique meta description.
- Correct canonical URL.
- One primary H1.
- Logical heading hierarchy.
- Descriptive image alt text.
- Open Graph metadata.
- Social sharing image.
- Accurate organization structured data.
- Appropriate sitemap and robots configuration.

Preserve existing useful URLs and avoid unnecessary redirects.

Do not create separate pages for the gallery, facilities, academic sections, or blog previews in this project.

---

## 28. Accessibility

Follow WCAG 2.2 AA principles where feasible.

Ensure:

- Keyboard navigation.
- Visible focus indicators.
- Sufficient color contrast.
- Semantic HTML.
- Accessible form labels and validation.
- Keyboard-operable gallery lightbox.
- Accessible accordions.
- Descriptive link text.
- Appropriate image alt text.
- Reduced-motion support.
- Correct heading hierarchy.

Do not rely on hover alone to reveal important information.

---

## 29. Content Integrity

Before implementation, review the existing official BVV website and collect approved content and assets.

Verify:

- School logo.
- School introduction.
- Class offerings.
- CBSE affiliation.
- Medium of instruction.
- Leadership information.
- Actual facilities.
- Genuine photographs.
- Contact details.
- News and achievements.

Do not invent:

- Student counts.
- Faculty counts.
- Rankings.
- Awards.
- Testimonials.
- Examination results.
- Admission deadlines.
- Fee details.
- Facilities.
- Leadership biographies.

If any information is unavailable, use clearly marked placeholders or omit the relevant section.

---

## 30. Final Quality Checklist

Before presenting the redesign to the directors:

- [ ] The website has a cohesive modern school identity.
- [ ] The header includes verified contact details.
- [ ] The hero section is visually compelling.
- [ ] Classes I–XII are presented accurately.
- [ ] About and educational philosophy sections are complete.
- [ ] Leadership information is authentic.
- [ ] Facilities and activities are accurately represented.
- [ ] The gallery has working filters and a lightbox.
- [ ] News and blog previews remain on the landing page.
- [ ] Statistics are verified.
- [ ] Testimonials are genuine or appropriately omitted.
- [ ] The admission CTA is prominent.
- [ ] The enquiry form behaves correctly.
- [ ] FAQs work on desktop and mobile.
- [ ] Contact links use verified details.
- [ ] All internal navigation scrolls to the correct section.
- [ ] Mobile navigation is accessible.
- [ ] No horizontal overflow occurs.
- [ ] Images and assets are optimized.
- [ ] Accessibility and reduced-motion behavior are tested.
- [ ] SEO metadata is accurate.
- [ ] Existing website functionality is preserved.
- [ ] No fabricated school information is published.

---

## 31. Final Implementation Instruction

Build a complete, polished, responsive, single-page landing page for Bihar Vikas Vidyalaya.

Use the broad information architecture of the Meridian The School reference website as inspiration, while creating an original visual identity and significantly improving consistency, spacing, typography, image presentation, responsive behavior, and interaction quality.

The finished result must be suitable for a professional live presentation to the school directors.

Do not stop at a wireframe or static mockup. Implement the complete page, ensure the interactive elements work, preserve the existing project architecture wherever possible, and identify any remaining backend integrations or content requiring school approval.