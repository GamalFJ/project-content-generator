const sampleContent = [
  {
    title: "30-second sales script",
    text: "Teams lose hours every week to fragmented work. WorkflowOS brings planning, execution, and reporting into one place so teams can move faster and make better decisions."
  },
  {
    title: "Tutorial overview",
    text: "Step 1: Connect your tools. Step 2: Define the workflow. Step 3: Monitor results through a unified dashboard and optimize in real time."
  },
  {
    title: "Image prompt",
    text: "Create a premium SaaS dashboard hero with analytics panels, automation builder, collaboration cards, and polished UI. Headline: 'One workflow. Better decisions.'"
  },
  {
    title: "CTA ideas",
    text: "Book a demo, try it free, or schedule a walkthrough for your team."
  }
];

const container = document.querySelector('#demo-output');

sampleContent.forEach((item) => {
  const card = document.createElement('div');
  card.className = 'output-item';
  card.innerHTML = `<strong>${item.title}</strong><p>${item.text}</p>`;
  container.appendChild(card);
});
