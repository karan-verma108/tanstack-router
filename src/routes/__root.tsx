import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Link className='' to='/'>
          Home
        </Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <Outlet />
      <footer className='text-primary'>This is my footer</footer>
    </React.Fragment>
  );
}
