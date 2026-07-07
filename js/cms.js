// =============================================
// ANGEL CREDIT SERVICES — CMS DATA LAYER
// cms.js — Blog post management (localStorage)
// =============================================

const CMS = {
  STORAGE_KEY: 'angel_cms_posts',

  // Default seed posts
  defaultPosts: [
    {
      id: 'post-1',
      title: 'How to Improve Your CIBIL Score Before Applying for a Home Loan',
      slug: 'how-to-improve-cibil-score-home-loan',
      category: 'Credit Score',
      author: 'Angel Credit Team',
      authorInitials: 'AC',
      date: '2025-11-15',
      readTime: '6 min read',
      excerpt: 'A good CIBIL score is the cornerstone of loan approval at competitive rates. Here are 8 proven strategies to boost your credit score before applying for a home loan.',
      content: `
        <p>Your CIBIL score is one of the most important factors that lenders consider when evaluating your loan application. A score of 750 or above is generally considered excellent, while scores below 650 can make it difficult to secure a loan at a good interest rate.</p>

        <h2>Why Your CIBIL Score Matters</h2>
        <p>Lenders use your CIBIL score as a quick indicator of your creditworthiness. A higher score signals that you are a responsible borrower, which translates to lower interest rates, higher loan amounts, and faster approvals.</p>

        <h2>8 Proven Strategies to Boost Your Score</h2>

        <h3>1. Pay Your EMIs and Credit Card Bills On Time</h3>
        <p>Payment history is the single biggest factor (approximately 35%) affecting your CIBIL score. Set up auto-pay or calendar reminders to ensure you never miss a due date. Even a single missed payment can lower your score by 50–100 points.</p>

        <h3>2. Keep Your Credit Utilisation Below 30%</h3>
        <p>Credit utilisation is the ratio of your outstanding credit card balance to your total credit limit. Keeping this below 30% demonstrates responsible credit usage. For example, if your combined credit limit is ₹1 Lakh, try to keep your balance below ₹30,000 at any time.</p>

        <h3>3. Don't Close Old Credit Accounts</h3>
        <p>The length of your credit history contributes significantly to your score. Avoid closing old credit cards, especially if they have no annual fee, as they contribute to a longer average credit age.</p>

        <h3>4. Limit Hard Enquiries</h3>
        <p>Every time you apply for new credit — a loan, credit card, or overdraft — the lender makes a "hard enquiry" on your CIBIL report. Too many hard enquiries in a short time signal financial stress. Space out your credit applications.</p>

        <h3>5. Diversify Your Credit Mix</h3>
        <p>Having a healthy mix of secured loans (home loan, car loan) and unsecured credit (personal loan, credit cards) is viewed positively by lenders. However, don't take on debt you don't need just for this reason.</p>

        <h3>6. Check Your CIBIL Report for Errors</h3>
        <p>Errors in your credit report — such as incorrect personal information, wrongly reported missed payments, or settled accounts still showing as "open" — can unfairly lower your score. Review your report and dispute any inaccuracies.</p>

        <h3>7. Become an Authorised User</h3>
        <p>If a family member with an excellent credit history adds you as an authorised user on their credit card, their positive payment history can benefit your score.</p>

        <h3>8. Allow Time</h3>
        <p>Building a strong credit score is a gradual process. The strategies above are most effective over 6–12 months. If your loan application is urgent, speak to an Angel Credit advisor — we work with lenders who have different eligibility criteria.</p>

        <h2>How Long Does It Take?</h2>
        <p>You can typically see meaningful improvement in 3–6 months with consistent effort. Dramatic improvements — for example, from 620 to 750 — typically take 12–18 months of disciplined credit behaviour.</p>

        <h2>Conclusion</h2>
        <p>A strong CIBIL score opens doors to better loan offers and financial opportunities. Start improving yours today. If you have questions about your home loan eligibility, contact our advisors at Angel Credit Services — we're here to help.</p>
      `,
      featured: true,
      tags: ['CIBIL Score', 'Home Loan', 'Credit Tips', 'Finance']
    },
    {
      id: 'post-2',
      title: 'Home Loan vs. Loan Against Property: Which Is Right for You?',
      slug: 'home-loan-vs-loan-against-property',
      category: 'Loan Guide',
      author: 'Angel Credit Team',
      authorInitials: 'AC',
      date: '2025-12-02',
      readTime: '8 min read',
      excerpt: 'Both Home Loans and Loans Against Property can serve different financial needs. This detailed comparison will help you understand which product suits your situation.',
      content: `
        <p>When you need a large sum of money tied to real estate, two products come to mind: a Home Loan and a Loan Against Property (LAP). While they may seem similar, they serve very different purposes and come with distinct terms, eligibility criteria, and advantages.</p>

        <h2>Home Loan: The Basics</h2>
        <p>A home loan is specifically designed for purchasing, constructing, or renovating a residential property. The property you're buying typically serves as collateral for the loan.</p>

        <ul>
          <li><strong>Purpose:</strong> Buying, building, or renovating a house</li>
          <li><strong>LTV Ratio:</strong> Up to 90% of the property's value</li>
          <li><strong>Interest Rates:</strong> Starting from 8.40% p.a. (typically lower than LAP)</li>
          <li><strong>Tax Benefits:</strong> Deductions on both principal (Section 80C) and interest (Section 24b)</li>
          <li><strong>Tenure:</strong> Up to 30 years</li>
        </ul>

        <h2>Loan Against Property: The Basics</h2>
        <p>A Loan Against Property is a secured loan where you mortgage an existing property (residential, commercial, or industrial) to raise funds for any purpose.</p>

        <ul>
          <li><strong>Purpose:</strong> Any purpose — business expansion, medical expenses, education, debt consolidation</li>
          <li><strong>LTV Ratio:</strong> Typically 50–70% of the property's market value</li>
          <li><strong>Interest Rates:</strong> Starting from 9.00% p.a. (slightly higher than home loans)</li>
          <li><strong>Tax Benefits:</strong> Only if used for business purposes</li>
          <li><strong>Tenure:</strong> Up to 15 years</li>
        </ul>

        <h2>Key Differences at a Glance</h2>
        <p>The most fundamental difference is <strong>purpose</strong>. A home loan can only be used to buy or build a home. A Loan Against Property gives you the freedom to use the funds for virtually any need.</p>

        <h2>When to Choose a Home Loan</h2>
        <p>Choose a home loan if you're specifically buying a new home or under-construction property. You'll benefit from lower interest rates, higher LTV, longer tenures, and significant tax benefits.</p>

        <h2>When to Choose Loan Against Property</h2>
        <p>Choose LAP if you already own a property and need liquidity for business expansion, large medical bills, higher education, or any other significant expense. The interest rate is still much lower than personal loans or business loans.</p>

        <h2>Conclusion</h2>
        <p>There is no universally "better" option — it depends entirely on your specific need. Our advisors at Angel Credit Services can help you evaluate both options based on your property value, income, and financial goals. Get in touch for a free consultation.</p>
      `,
      featured: false,
      tags: ['Home Loan', 'LAP', 'Loan Comparison', 'Finance Tips']
    },
    {
      id: 'post-3',
      title: 'Business Loan Eligibility 2025: Complete Checklist for MSMEs',
      slug: 'business-loan-eligibility-2025-msme',
      category: 'Business Finance',
      author: 'Angel Credit Team',
      authorInitials: 'AC',
      date: '2026-01-10',
      readTime: '7 min read',
      excerpt: 'Getting a business loan in 2025 requires meeting specific eligibility criteria. Here is a complete, up-to-date checklist that every MSME owner should know.',
      content: `
        <p>For micro, small, and medium enterprises (MSMEs), access to timely credit is the difference between growth and stagnation. Business loans in 2025 have become more accessible, with digital-first lenders and government-backed schemes offering flexible options.</p>

        <h2>General Eligibility Criteria for Business Loans</h2>

        <h3>Business Age & Type</h3>
        <p>Most lenders require your business to be operational for a minimum of 2–3 years. Sole proprietorships, partnerships, LLPs, private limited companies, and public limited companies are all eligible.</p>

        <h3>Annual Turnover</h3>
        <p>Lenders typically require a minimum annual turnover of ₹20 Lakhs–₹40 Lakhs for an unsecured business loan. Higher turnovers command better terms and higher loan amounts.</p>

        <h3>Credit Score</h3>
        <p>Both the business's credit score (CIBIL Business Score) and the promoter's personal CIBIL score (ideally 700+) are considered. A clean repayment history significantly improves approval chances.</p>

        <h3>Business Profitability</h3>
        <p>The business should be profitable or show a clear path to profitability. Lenders assess your Income Tax Returns (ITR) for the last 2–3 years.</p>

        <h2>Documents Required</h2>
        <ul>
          <li>PAN Card of the business and promoters</li>
          <li>Business registration certificate / Udyam Registration</li>
          <li>GST Registration Certificate</li>
          <li>Bank statements for the last 6–12 months</li>
          <li>Income Tax Returns for the last 2–3 years</li>
          <li>Audited financial statements (P&L and Balance Sheet)</li>
          <li>KYC documents of all promoters/partners/directors</li>
        </ul>

        <h2>Government Schemes to Know in 2025</h2>
        <p><strong>CGTMSE (Credit Guarantee Fund Trust for MSMEs):</strong> Collateral-free loans up to ₹2 Crore with a credit guarantee from the government. Many banks offer this scheme.</p>
        <p><strong>Mudra Loan:</strong> Loans up to ₹10 Lakhs under the Pradhan Mantri Mudra Yojana for non-corporate, non-farm enterprises.</p>
        <p><strong>SIDBI Schemes:</strong> The Small Industries Development Bank of India offers various refinancing schemes for MSMEs.</p>

        <h2>Tips to Improve Your Business Loan Eligibility</h2>
        <ol>
          <li>Maintain a separate business bank account and route all business transactions through it.</li>
          <li>File GST returns and ITR on time, consistently.</li>
          <li>Keep your personal and business credit utilisation low.</li>
          <li>Build a banking relationship with at least one or two banks over time.</li>
          <li>Prepare a clear business plan outlining how the loan will be utilised and repaid.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Understanding what lenders look for is the first step to securing the right business loan. At Angel Credit Services, we've helped hundreds of MSMEs access the right credit at the right time. Contact us today for a free eligibility assessment and to explore the best business loan options for your enterprise.</p>
      `,
      featured: false,
      tags: ['Business Loan', 'MSME', 'Eligibility', '2025']
    }
  ],

  // Initialise the CMS data store
  init: function () {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.defaultPosts));
    }
  },

  // Get all posts
  getAllPosts: function () {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  // Get a single post by id
  getPostById: function (id) {
    return this.getAllPosts().find(function (p) { return p.id === id; }) || null;
  },

  // Get a post by slug
  getPostBySlug: function (slug) {
    return this.getAllPosts().find(function (p) { return p.slug === slug; }) || null;
  },

  // Save a post (create or update)
  savePost: function (post) {
    const posts = this.getAllPosts();
    const idx = posts.findIndex(function (p) { return p.id === post.id; });
    if (idx > -1) {
      posts[idx] = post;
    } else {
      posts.unshift(post);
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(posts));
  },

  // Delete a post
  deletePost: function (id) {
    const posts = this.getAllPosts().filter(function (p) { return p.id !== id; });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(posts));
  },

  // Format date for display
  formatDate: function (dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  },

  // Generate slug from title
  generateSlug: function (title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  },

  // Generate blog card HTML
  renderBlogCard: function (post) {
    return `
      <a href="blog-post.html?id=${post.id}" class="blog-card" data-post-id="${post.id}">
        <span class="blog-meta">${post.category} · ${CMS.formatDate(post.date)}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
      </a>
    `;
  }
};

// Initialise the CMS
CMS.init();

// Render blog cards on homepage (3 latest)
(function renderHomeBlogs() {
  const container = document.getElementById('homeBlogGrid');
  if (!container) return;
  const posts = CMS.getAllPosts().slice(0, 3);
  if (posts.length === 0) {
    container.innerHTML = '<p style="color:var(--clr-text-muted);text-align:center;grid-column:1/-1;">No blog posts yet. <a href="admin/index.html">Write your first post.</a></p>';
    return;
  }
  container.innerHTML = posts.map(function (p) { return CMS.renderBlogCard(p); }).join('');
  // Trigger reveal on newly injected cards
  container.querySelectorAll('.blog-card').forEach(function (el, i) {
    el.style.animationDelay = (i * 0.1) + 's';
    el.classList.add('reveal');
  });
})();

// Render all blog cards on blog.html
(function renderBlogPage() {
  const container = document.getElementById('blogGrid');
  if (!container) return;

  let posts = CMS.getAllPosts();
  const searchInput = document.getElementById('blogSearch');
  const categoryBtns = document.querySelectorAll('.cat-btn');
  let activeCategory = 'all';

  function render(list) {
    if (list.length === 0) {
      container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--clr-text-light)" stroke-width="1.5" style="margin:0 auto 16px;display:block;"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        <p style="color:var(--clr-text-muted);">No posts found.</p></div>`;
      return;
    }
    container.innerHTML = list.map(function (p) { return CMS.renderBlogCard(p); }).join('');
  }

  function filterAndRender() {
    let filtered = posts;
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (activeCategory !== 'all') {
      filtered = filtered.filter(function (p) { return p.category === activeCategory; });
    }
    if (query) {
      filtered = filtered.filter(function (p) {
        return p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
      });
    }
    render(filtered);
  }

  render(posts);

  if (searchInput) {
    searchInput.addEventListener('input', filterAndRender);
  }

  categoryBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      categoryBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      filterAndRender();
    });
  });
})();

// Render single blog post on blog-post.html
(function renderSinglePost() {
  const container = document.getElementById('postContent');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const post = CMS.getPostById(id);
  if (!post) {
    container.innerHTML = '<p style="text-align:center;color:var(--clr-text-muted);padding:48px 0;">Post not found. <a href="blog.html">Back to Blog</a></p>';
    return;
  }

  // Update document title and meta
  document.title = post.title + ' | Angel Credit Services Blog';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

  // Update breadcrumb
  const breadcrumbPost = document.getElementById('breadcrumbPost');
  if (breadcrumbPost) breadcrumbPost.textContent = post.title;

  // Update post header
  const postTitle = document.getElementById('postTitle');
  if (postTitle) postTitle.textContent = post.title;

  const postMeta = document.getElementById('postMeta');
  if (postMeta) {
    postMeta.innerHTML = `
      <div class="blog-card-meta" style="justify-content:flex-start;gap:16px;font-size:0.875rem;color:var(--clr-text-muted);">
        <span class="blog-card-cat">${post.category}</span>
        <span>${CMS.formatDate(post.date)}</span>
        <span>${post.readTime}</span>
      </div>
    `;
  }

  // Render content
  container.innerHTML = `<div class="post-body">${post.content}</div>`;

  // Author box
  const authorBox = document.getElementById('authorBox');
  if (authorBox) {
    authorBox.innerHTML = `
      <div style="display:flex;align-items:center;gap:16px;padding:24px;background:var(--clr-bg);border-radius:12px;border:1px solid var(--clr-border);">
        <div style="width:60px;height:60px;background:var(--clr-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.25rem;font-weight:800;color:#fff;flex-shrink:0;">${post.authorInitials}</div>
        <div>
          <div style="font-weight:700;color:var(--clr-text);margin-bottom:4px;">${post.author}</div>
          <p style="font-size:0.875rem;color:var(--clr-text-muted);line-height:1.6;">Certified financial advisor with extensive experience in helping individuals and businesses navigate loan and credit solutions in India.</p>
        </div>
      </div>
    `;
  }

  // Related posts
  const relatedContainer = document.getElementById('relatedPosts');
  if (relatedContainer) {
    const related = CMS.getAllPosts().filter(function (p) { return p.id !== id; }).slice(0, 2);
    relatedContainer.innerHTML = related.map(function (p) { return CMS.renderBlogCard(p); }).join('');
  }

  // JSON-LD BlogPosting schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': post.date,
    'dateModified': post.date,
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Angel Credit Services',
      'url': 'https://angelcreditservices.com'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://angelcreditservices.com/blog-post.html?id=' + id
    }
  };

  const schemaEl = document.createElement('script');
  schemaEl.type = 'application/ld+json';
  schemaEl.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaEl);
})();
