import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
	state = {
		isLoading: true
	};
	getLocation = async () => {
		try {
			// 위치정보 사용허가
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			this.setState({ isLoading: false });
		} catch (e) {
			Alert.alert("Can't find you.", 'So sad');
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading /> : null;
	}
}
