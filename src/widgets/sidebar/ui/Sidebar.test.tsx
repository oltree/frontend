import { fireEvent, screen } from '@testing-library/react';

import { componentRenrer } from 'shared/lib/tests/componentRenrer/componentRenrer';

import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('test sidebar render', () => {
    /* const SidebarWithTranslation = withTranslation()(Sidebar);
    render(<SidebarWithTranslation />); */

    componentRenrer(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle sidebar', () => {
    componentRenrer(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
