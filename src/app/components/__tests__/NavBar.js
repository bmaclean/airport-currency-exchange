import React from 'react';
import {shallow} from 'enzyme';
import {NavBar} from '../';

describe('AppHeader', () => {
	describe('renders', () => {
		it('without props', () => {
			const node = shallow(<NavBar />);
			expect(node).toMatchSnapshot();
		});
	});
});
