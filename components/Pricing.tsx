import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small projects.',
    features: [
      '3 Projects',
      '5GB Storage',
      'Basic Analytics',
      'Community Support',
      '2 Team Members'
    ],
    cta: 'Get Started Free',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited Projects',
      '100GB Storage',
      'Advanced Analytics',
      'Priority Support',
      '20 Team Members',
      'AI Automation',
      'Custom Integrations'
    ],
    cta: 'Start Pro Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large organizations with advanced needs.',
    features: [
      'Unlimited Everything',
      '1TB Storage',
      'Custom Analytics',
      'Dedicated Support',
      'Unlimited Members',
      'SSO & SAML',
      'SLA Guarantee',
      'Custom Contracts'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Pricing</span>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. Cancel anytime. Start free and scale as you grow.
          </p>
        </div>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>/{plan.period}</span>
              </div>
              <p className={styles.description}>{plan.description}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`${styles.cta} ${plan.highlighted ? styles.ctaHighlighted : ''}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
