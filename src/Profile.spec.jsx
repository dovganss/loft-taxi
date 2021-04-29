import React from 'react';
import { render } from '@testing-library/react';
import ProfileWithConnect from './Profile';

describe('Profile', () => {
    it('renders correctly', () => {
        const { container } = render(<ProfileWithConnect />)
        expect(container).toMatchSnapshot()
    });
});