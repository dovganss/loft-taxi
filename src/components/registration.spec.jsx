import React from 'react';
import { render } from '@testing-library/react';
import { registration } from './registration';

describe('registration', () => {     it('renders correctly', () => {
        const { container } = render(< Registration />)
        expect(container).toMatchSnapshot()
    });
});