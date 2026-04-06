import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Vercel Labs',
    avatar: 'SC',
    quote:
      '"NexaFlow cut our deployment time by 70%. The automation features are simply incredible — our team ships features twice as fast now."'
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Engineer at Stripe',
    avatar: 'MJ',
    quote:
      '"The integrations are seamless. We connected all our tools in under an hour and the AI suggestions have already saved us countless hours."'
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager at Notion',
    avatar: 'PP',
    quote:
      '"Best investment we made this year. The analytics dashboard alone is worth the price — real-time data that actually drives decisions."'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>Loved by engineering teams</h2>
          <p className={styles.subtitle}>
            Join thousands of teams that trust NexaFlow to power their workflows.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
