import { fireEvent, screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/component-render';

import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('test sidebar render', () => {
    /* const SidebarWithTranslation = withTranslation()(Sidebar);
    render(<SidebarWithTranslation />); */

    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle sidebar', () => {
    ComponentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
