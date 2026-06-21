import './App.css';

type PageContent = {
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    steps?: Array<{
      text: string;
      email?: string;
      suffix?: string;
      bullets?: string[];
    }>;
    bullets?: string[];
    afterBullets?: string[];
    afterSteps?: string[];
  }>;
};

const features = [
  { number: '01', title: 'AI Coaching', text: 'Personalised workout plans tailored to your body, routine, and goals.' },
  { number: '02', title: 'Bilingual Experience', text: 'Natural coaching designed for Pakistani users in both languages.' },
  { number: '03', title: 'Smart Nutrition', text: 'Practical nutrition advice that works with real desi food and lifestyles.' },
  { number: '04', title: 'Trainer Marketplace', text: 'Discover trusted trainers and manage your sessions in one place.' },
  { number: '05', title: 'Advanced Progress', text: 'See your momentum, celebrate milestones, and stay motivated.' },
  { number: '06', title: 'Built for Pakistan', text: 'Accessible, affordable AI coaching created around local needs.' },
];

const appScreens = [
  {
    title: 'Chat Coach',
    caption: 'Ask SehatAI about workouts, nutrition, and motivation.',
    image: '/feature-chat.jpg',
  },
  {
    title: 'Exercise Library',
    caption: 'Browse guided GIF bundles and exercise form videos.',
    image: '/feature-exercise.jpg',
  },
  {
    title: 'Diet Plans',
    caption: 'Generate Pakistan-friendly meal plans for your goals.',
    image: '/feature-diet.jpg',
  },
  {
    title: 'Progress',
    caption: 'Track body checks, milestones, and transformation posts.',
    image: '/feature-progress.jpg',
  },
];

const pages: Record<string, PageContent> = {
  '/privacy': {
    title: 'Privacy Policy',
    intro: 'How SehatAI collects, uses, and protects your information.',
    sections: [
      {
        heading: 'Information we collect',
        paragraphs: [
          'When you use SehatAI, we may collect account details, fitness goals, workout activity, nutrition preferences, device information, and communications you send to our support team.',
          'We only request information that helps us provide and improve the SehatAI experience.',
        ],
      },
      {
        heading: 'How we use information',
        paragraphs: [
          'We use your information to personalise coaching, operate app features, improve safety and performance, communicate important updates, and respond to support requests.',
          'We do not sell your personal information.',
        ],
      },
      {
        heading: 'Data protection and retention',
        paragraphs: [
          'We use reasonable technical and organisational safeguards to protect your information. Data is retained only as long as needed to provide our services, meet legal obligations, resolve disputes, and enforce agreements.',
        ],
      },
      {
        heading: 'Third-Party Services',
        paragraphs: [
          'SehatAI uses trusted third-party services to provide core functionality, including authentication, cloud storage, analytics, and AI-powered features. These services may process information on our behalf to help operate and improve the app.',
          'Examples of services used by SehatAI may include Firebase, cloud hosting providers, and AI service providers. These providers are required to protect information in accordance with applicable laws and their own privacy commitments.',
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          'SehatAI is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will take reasonable steps to delete it.',
        ],
      },
      {
        heading: 'Health Disclaimer',
        paragraphs: [
          'SehatAI provides fitness, wellness, and nutrition information for educational purposes only. The information provided through the app is not medical advice and should not be used as a substitute for professional medical consultation, diagnosis, or treatment.',
          'Always consult a qualified healthcare professional before starting a new exercise or nutrition program.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You may request access, correction, or deletion of your personal information by contacting support@sehatai.net. You can also use our account deletion page for instructions.',
        ],
      },
    ],
  },
  '/terms': {
    title: 'Terms of Use',
    intro: 'The rules that apply when you access or use SehatAI.',
    sections: [
      {
        heading: 'Using SehatAI',
        paragraphs: [
          'You must provide accurate account information, keep your login credentials secure, and use SehatAI only for lawful fitness, wellness, and educational purposes.',
          'You may not misuse, disrupt, copy, reverse engineer, attempt unauthorised access to, or interfere with the operation of SehatAI or its services.',
          'You are responsible for all activity that occurs under your account.',
        ],
      },
      {
        heading: 'Health Notice',
        paragraphs: [
          'SehatAI provides general fitness, wellness, and nutrition information for educational and informational purposes only. SehatAI is not a medical service and does not provide medical advice, diagnosis, or treatment.',
          'Always consult a qualified healthcare professional before starting a new fitness, exercise, or nutrition programme, particularly if you have a medical condition, injury, disability, or other health concern.',
          'Any actions taken based on information provided by SehatAI are at your own risk.',
        ],
      },
      {
        heading: 'AI-Generated Content',
        paragraphs: [
          'Certain features of SehatAI use artificial intelligence to generate recommendations, workout plans, nutrition guidance, and other content.',
          'While we strive to provide helpful and accurate information, AI-generated content may contain errors, omissions, or recommendations that are not suitable for every individual. Users should exercise their own judgment and seek professional advice where appropriate.',
        ],
      },
      {
        heading: 'Trainer Bookings and Third-Party Services',
        paragraphs: [
          'SehatAI may allow users to discover, communicate with, or book independent fitness trainers and service providers.',
          'Trainers and service providers are independent parties and are not employees, agents, or representatives of SehatAI. SehatAI is not responsible for the conduct, services, advice, availability, or performance of third-party trainers or providers.',
          'Users are responsible for evaluating the suitability of any trainer or service before engaging with them.',
        ],
      },
      {
        heading: 'Subscriptions and Payments',
        paragraphs: [
          'Certain features of SehatAI may require a paid subscription or purchase.',
          "Subscription fees, billing periods, and available features may change over time. Where applicable, subscriptions purchased through app stores are managed by the relevant platform and are subject to that platform's billing and cancellation policies.",
          'Failure to pay applicable fees may result in suspension or loss of access to premium features.',
        ],
      },
      {
        heading: 'Intellectual Property',
        paragraphs: [
          'SehatAI, its branding, content, software, designs, logos, and related materials are owned by SehatAI or its licensors and are protected by applicable intellectual property laws.',
          'You may not reproduce, distribute, modify, sell, or exploit any part of SehatAI without prior written permission.',
        ],
      },
      {
        heading: 'Accounts and Availability',
        paragraphs: [
          'We may update, modify, suspend, or discontinue features, services, or content at any time as the product evolves.',
          'We reserve the right to suspend, restrict, or terminate accounts that violate these Terms, create risk for other users, or negatively affect the security or operation of SehatAI.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, SehatAI and its operators shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the service.',
          'Your use of SehatAI is at your own risk. The service is provided on an "as is" and "as available" basis without warranties of any kind.',
        ],
      },
      {
        heading: 'Changes to These Terms',
        paragraphs: [
          'We may update these Terms from time to time. Continued use of SehatAI after changes become effective constitutes acceptance of the updated Terms.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions regarding these Terms may be sent to:',
          'support@sehatai.net',
        ],
      },
    ],
  },
  '/support': {
    title: 'Support',
    intro: 'Help with your account, workouts, bookings, subscriptions, or the SehatAI app.',
    sections: [
      {
        heading: 'Contact Our Team',
        paragraphs: [
          'For support, please email:',
          'support@sehatai.net',
          'To help us resolve your issue quickly, include:',
        ],
        bullets: [
          'The email address linked to your SehatAI account',
          'A brief description of the issue',
          'Any relevant screenshots or error messages',
          'The device you are using (Android, iPhone, etc.)',
        ],
        afterBullets: [
          'We aim to respond within two business days.',
        ],
      },
      {
        heading: 'Common Troubleshooting Steps',
        paragraphs: ['Before contacting support, please try the following:'],
        bullets: [
          'Ensure you are using the latest version of SehatAI',
          'Close and reopen the app',
          'Sign out and sign back in',
          'Confirm your internet connection is stable',
          'Restart your device and try again',
        ],
      },
      {
        heading: 'Bookings and Trainer Support',
        paragraphs: ['If your issue relates to a trainer booking, please include:'],
        bullets: [
          'Booking date and time',
          'Trainer name',
          'Description of the issue',
        ],
        afterBullets: [
          'SehatAI may assist with communication and platform-related issues but is not responsible for services provided by independent trainers.',
        ],
      },
      {
        heading: 'Subscription Support',
        paragraphs: ['For subscription-related issues, include:'],
        bullets: [
          'Your account email address',
          'Purchase date (if known)',
          'Screenshot of the subscription receipt if available',
        ],
        afterBullets: [
          'Subscriptions purchased through Google Play are subject to Google Play billing policies and may need to be managed through your Google account.',
        ],
      },
      {
        heading: 'Security and Privacy',
        paragraphs: ['Never send:'],
        bullets: [
          'Passwords',
          'One-time verification codes',
          'Payment card details',
          'Sensitive personal information',
        ],
        afterBullets: [
          'SehatAI will never ask for your password by email.',
        ],
      },
      {
        heading: 'Safety Notice',
        paragraphs: [
          'Stop exercising immediately and seek appropriate medical attention if you experience pain, dizziness, shortness of breath, chest discomfort, or any other concerning symptoms.',
          'SehatAI support cannot provide emergency, medical, or healthcare assistance.',
          'If you believe you are experiencing a medical emergency, contact your local emergency services immediately.',
        ],
      },
    ],
  },
  '/delete-account': {
    title: 'Delete Your Account',
    intro: 'You can request permanent deletion of your SehatAI account and associated personal data.',
    sections: [
      {
        heading: 'How to Request Deletion',
        paragraphs: ['To request account deletion:'],
        steps: [
          {
            text: 'Email',
            email: 'support@sehatai.net',
            suffix: ' from the email address associated with your SehatAI account.',
          },
          {
            text: 'Use the subject line: "Delete My SehatAI Account"',
          },
          {
            text: 'Include:',
            bullets: [
              'Your full name',
              'Registered email address',
              'Any additional information that may help us verify your identity',
            ],
          },
        ],
        afterSteps: [
          'For security purposes, we may request additional verification before processing your request.',
        ],
      },
      {
        heading: 'What Will Be Deleted',
        paragraphs: [
          'Once your request has been verified and processed, we will permanently delete or anonymise personal information associated with your SehatAI account, including:',
        ],
        bullets: [
          'Profile information',
          'Fitness goals and preferences',
          'Workout history',
          'Nutrition records',
          'Booking history stored within SehatAI',
          'Other personal app data associated with your account',
        ],
      },
      {
        heading: 'Information That May Be Retained',
        paragraphs: [
          'Certain information may be retained where required by law or for legitimate business purposes, including:',
        ],
        bullets: [
          'Fraud prevention and security records',
          'Legal compliance obligations',
          'Dispute resolution records',
          'Transaction or billing records where required by applicable laws',
        ],
        afterBullets: [
          'Any retained information will be handled in accordance with our Privacy Policy.',
        ],
      },
      {
        heading: 'Subscriptions',
        paragraphs: [
          'Deleting your SehatAI account does not automatically cancel subscriptions purchased through Google Play or other app stores.',
          'Subscriptions must be managed and cancelled through the platform from which they were purchased.',
        ],
      },
      {
        heading: 'Processing Time',
        paragraphs: [
          'Verified deletion requests are normally completed within 30 days.',
          'We will notify you once the deletion process has been completed or if additional verification is required.',
        ],
      },
      {
        heading: 'Important',
        paragraphs: [
          'Account deletion is permanent and cannot be undone.',
          'Once deleted, you may lose access to your account, workout history, preferences, and other associated data.',
        ],
      },
    ],
  },
};

function Brand() {
  return (
    <a className="brand" href="/" aria-label="SehatAI home">
      <img src="/sehatai-logo.png" alt="" />
      <span className="brand-text">Sehat<span>AI</span></span>
    </a>
  );
}

function SiteFooter() {
  return (
    <footer>
      <Brand />
      <p>&copy; 2026 SehatAI. Built for a healthier Pakistan.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/support">Support</a>
        <a href="/delete-account">Delete Account</a>
      </div>
    </footer>
  );
}

function PhoneMockup() {
  return (
    <section className="app-showcase" aria-labelledby="app-showcase-title">
      <div className="showcase-copy">
        <span className="section-kicker">Your coach, always with you</span>
        <h2 id="app-showcase-title">One app.<br /><span>Your whole journey.</span></h2>
        <p>
          Plan your training, track daily progress, and get intelligent guidance
          in English or Urdu, all from one beautifully simple dashboard.
        </p>
        <div className="showcase-points">
          <span>Personal daily plan</span>
          <span>Live progress insights</span>
          <span>AI coach conversations</span>
        </div>
      </div>
      <div className="phone-stage" aria-label="Preview of the SehatAI mobile app">
        <div className="phone-glow" />
        <div className="phone">
          <div className="phone-speaker" />
          <div className="phone-screen">
            <div className="phone-status"><span>9:41</span><span>Wi-Fi 92%</span></div>
            <div className="app-greeting">
              <div><small>GOOD MORNING</small><h3>Assalam-o-Alaikum,<br />Jawad</h3></div>
              <div className="avatar">J</div>
            </div>
            <div className="goal-card">
              <span className="goal-label">TODAY&apos;S GOAL</span>
              <strong>Upper Body Strength</strong>
              <div className="goal-meta"><span>42 min</span><span>8 exercises</span></div>
              <div className="goal-progress"><span /></div>
              <button type="button">Start workout <span>-&gt;</span></button>
            </div>
            <div className="app-section-title"><strong>Your progress</strong><span>This week</span></div>
            <div className="progress-row">
              <div className="progress-ring"><span>4</span><small>workouts</small></div>
              <div className="mini-chart" aria-hidden="true">
                {[40, 68, 52, 88, 62, 78, 48].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="coach-prompt">
              <span className="coach-mark">AI</span>
              <div><small>SEHATAI COACH</small><p>Ready to make today count?</p></div>
            </div>
            <div className="phone-nav">
              <span className="active">H<small>Home</small></span>
              <span>P<small>Plan</small></span>
              <span>C<small>Coach</small></span>
              <span>U<small>Profile</small></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppScreenshots() {
  return (
    <section className="screens-section" aria-labelledby="screens-title">
      <div className="section-heading screens-heading">
        <div>
          <span className="section-kicker">Inside the app</span>
          <h2 id="screens-title">Feature previews,<br />from the real product.</h2>
        </div>
        <p>
          These screens show the core SehatAI experience: coaching, exercises,
          nutrition, and progress tools in a simple bilingual interface.
        </p>
      </div>
      <div className="screens-grid">
        {appScreens.map((screen) => (
          <article className="screen-card" key={screen.title}>
            <div className="screen-image-wrap">
              <img src={screen.image} alt={`${screen.title} app screen`} loading="lazy" />
            </div>
            <div className="screen-copy">
              <h3>{screen.title}</h3>
              <p>{screen.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <Brand />
        <a className="nav-link" href="#features">Explore features</a>
      </nav>
      <main>
        <header className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="eyebrow"><span className="eyebrow-dot" />Pakistan&apos;s Urdu-first AI fitness coach</div>
          <h1>Your health.<br /><span>Your strongest asset.</span></h1>
          <p className="description">
            Personalised workouts, smarter nutrition, trainer bookings, and
            daily motivation, built for the way Pakistan lives.
          </p>
          <div className="hero-actions">
            <button className="cta" type="button">
              <span>Coming soon on Google Play</span>
              <span className="arrow" aria-hidden="true">-&gt;</span>
            </button>
            <span className="launch-note">Be first in line for launch</span>
          </div>
          <div className="hero-stats" aria-label="Product highlights">
            <div><strong>24/7</strong><span>AI guidance</span></div>
            <div><strong>2</strong><span>Languages</span></div>
            <div><strong>100%</strong><span>Made for you</span></div>
          </div>
        </header>
        <PhoneMockup />
        <AppScreenshots />
        <section className="section" id="features">
          <div className="section-heading">
            <div>
              <span className="section-kicker">The SehatAI advantage</span>
              <h2>Premium coaching,<br />made personal.</h2>
            </div>
            <p>Everything you need to build healthier habits, brought together in one intelligent experience.</p>
          </div>
          <div className="grid">
            {features.map((feature) => (
              <article className="card" key={feature.number}>
                <span className="card-number">{feature.number}</span>
                <div className="card-icon" aria-hidden="true"><span /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="closing">
          <span className="section-kicker">A better you is coming</span>
          <h2>Train smarter.<br /><span>Live stronger.</span></h2>
          <p>Fitness guidance that speaks your language and understands your life.</p>
          <button className="cta cta-light" type="button">
            Coming soon on Google Play
            <span className="arrow" aria-hidden="true">-&gt;</span>
          </button>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ContentPage({ page }: { page: PageContent }) {
  return (
    <div className="site-shell content-shell">
      <nav className="nav" aria-label="Main navigation">
        <Brand />
        <a className="nav-link" href="/">Back to home</a>
      </nav>
      <main className="content-page">
        <header className="content-header">
          <span className="section-kicker">SehatAI information</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <span className="updated">Last updated: 12 June 2026</span>
        </header>
        <div className="content-body">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph === 'support@sehatai.net'
                    ? <a href="mailto:support@sehatai.net">{paragraph}</a>
                    : paragraph}
                </p>
              ))}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.afterBullets?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.steps && (
                <ol>
                  {section.steps.map((step) => (
                    <li key={step.text}>
                      {step.text}
                      {step.email && (
                        <>
                          {' '}<a href={`mailto:${step.email}`}>{step.email}</a>{step.suffix}
                        </>
                      )}
                      {step.bullets && <ul>{step.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                    </li>
                  ))}
                </ol>
              )}
              {section.afterSteps?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return pages[path] ? <ContentPage page={pages[path]} /> : <HomePage />;
}

export default App;
