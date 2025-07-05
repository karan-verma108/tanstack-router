import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/view-plans')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div> view plans</div>;
}
