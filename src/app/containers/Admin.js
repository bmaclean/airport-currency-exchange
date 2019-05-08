import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateSettings} from '../store/actions';
import {AdminPage} from '../pages';

/**
 * Admin is the container component for the Admin Page that connects to the Redux store and
 * provide AdminPage with relevant data.
 */
function Admin(props) {
	const {dispatch, settings} = props;
	const [localSettings, updateLocalSettings] = useState(settings);

	// dispatch all setting updates when 'Update' is selected on Admin page
	const update = () => {
		dispatch(updateSettings(localSettings));
	};

	// control local setting updates
	const updateSetting = (key, value) => {
		updateLocalSettings({
			...localSettings,
			[key]: {
				...localSettings[key],
				value
			}
		});
	};

	return (
		<AdminPage
			settings={localSettings}
			update={update}
			updateSetting={updateSetting}
		/>
	);
}

function mapStateToProps(state) {
	const {settings} = state;
	return {settings};
}

export default connect(mapStateToProps)(Admin);
