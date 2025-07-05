import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/onboarding/otp-verify')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      otp verify
      <Link to='/view-plans'>view the plans</Link>
    </div>
  );
}
