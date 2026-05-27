window.SeqriteConfig = {
  consent: {
    categories: [
      { name: 'necessary', required: true },
      { name: 'analytics', required: false },
      { name: 'marketing', required: false },
      { name: 'functional', required: false }
    ]
  },
  services: [
    { name: 'analytics', category: 'analytics' },
    { name: 'marketing', category: 'marketing' },
    { name: 'functional', category: 'functional' }
  ]
};