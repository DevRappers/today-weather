import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

export default function App() {
	const [ isLoading, setLoading ] = useState(true);
	const [ temp, setTemp ] = useState(0);
	const [ condition, setCondition ] = useState('');
	const getWeather = async (latitude, longitude) => {
		const { data: { main: { temp }, weather } } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
		);

		setTemp(temp);
		setCondition(weather[0].main);
		setLoading(false);
	};

	const getLocation = async () => {
		try {
			// 위치정보 사용허가
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			getWeather(latitude, longitude);
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

	return <Weather temp={Math.round(temp)} condition={condition} />;
}
