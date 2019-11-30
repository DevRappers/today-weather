import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

export default function App() {
	const [ isLoading, setLoading ] = useState(true);

	const getWeather = async (latitude, longitude) => {
		const { data } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
		);

		console.log(data);
	};

	const getLocation = async () => {
		try {
			// 위치정보 사용허가
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			getWeather(latitude, longitude);
			setLoading(false);
		} catch (e) {
			Alert.alert("Can't find you.", 'So sad');
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	if (isLoading) {
		return <Loading />;
	}
	return <View />;
}
