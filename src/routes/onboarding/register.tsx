import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/onboarding/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div> register form</div>;
}
