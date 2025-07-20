export default function StatsSection() {
  const years = new Date().getFullYear() - new Date('2021').getFullYear();
  const stats = [
    { number: '35+', label: 'Happy Clients' },
    { number: years, label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-primary">{stat.number}</div>
          <div className="text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
