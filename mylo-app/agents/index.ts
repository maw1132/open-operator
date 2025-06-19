import { Crew } from 'crewai';

export const myloCrew = new Crew({
  agents: {
    HealthCoach: {},
    Strategist: {},
    Therapist: {}
  }
});

export async function handleTask(prompt: string) {
  const result = await myloCrew.process(prompt);
  const response = await fetch('http://localhost:3000/api/agent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'START', goal: result })
  });
  return await response.json();
}
