import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('test sidebar render', () => {
    /* const SidebarWithTranslation = withTranslation()(Sidebar);
    render(<SidebarWithTranslation />); */

    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle sidebar', () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
