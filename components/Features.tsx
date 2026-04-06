import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for performance at every layer. Deploy in seconds and serve your users with sub-100ms response times.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'SOC2 compliant with end-to-end encryption, SSO, and granular role-based access controls built in by default.'
  },
  {
    icon: '🤖',
    title: 'AI-Powered Automation',
    description:
      'Let our intelligent engine handle repetitive tasks, surface insights, and suggest optimizations automatically.'
  },
  {
    icon: '🔗',
    title: '200+ Integrations',
    description:
      'Connect seamlessly with your existing tools — Slack, GitHub, Jira, Salesforce, and hundreds more.'
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description:
      'Gain instant visibility into your metrics with beautiful dashboards and customizable reports.'
  },
  {
    icon: '🌍',
    title: 'Global CDN',
    description:
      'Deliver content at the edge from 50+ data centers worldwide for a consistently fast experience.'
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Features</span>
          <h2 className={styles.title}>Everything you need to succeed</h2>
          <p className={styles.subtitle}>
            Powerful features designed to help your team move faster and build better products.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
