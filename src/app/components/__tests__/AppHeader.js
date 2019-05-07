import React from 'react';
import {shallow} from 'enzyme';
import {AppHeader} from '../';

describe('AppHeader', () => {
	describe('renders', () => {
		it('without props', () => {
			const node = shallow(<AppHeader />);
			expect(node).toMatchSnapshot();
		});
	});
});
