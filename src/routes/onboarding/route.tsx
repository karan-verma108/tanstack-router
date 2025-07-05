import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/onboarding')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex'>
      <img
        src='https://m.media-amazon.com/images/I/51sG+agaZbS.jpg'
        alt='scency'
        className='w-1/2'
      />
      <div className='w-1/2'>
        <Outlet />
      </div>
    </div>
  );
}
