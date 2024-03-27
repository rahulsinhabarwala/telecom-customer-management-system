import { render, screen } from '../../../utils/test-utils';
import CustomersTable from '../';

describe('CustomersTable Component', () => {
  const preloadedState = {
    users: {
      users: [{ id: 1, name: 'John Doe', email: 'john@example.com', planStatus: 'Active' }],
    },
  };

  test('renders CustomersTable with data', () => {
    const preloadedState = {
      users: {
        users: [{ id: 1, name: 'John Doe', email: 'john@example.com', planStatus: 'Active' }],
      },
    };
    render(<CustomersTable />, { preloadedState });

    expect(screen.getByText('Customers')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Add Customer' })).toBeInTheDocument();
  });

   test('checks if customer profile link navigates correctly', async () => {
     render(<CustomersTable />, { preloadedState });
     expect(screen.getByRole('link', { name: 'View Profile' })).toHaveAttribute(
       'href',
       '/profile/1',
     );
   });

});
