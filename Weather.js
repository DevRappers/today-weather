import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning',
		gradient: [ '#373B44', '#4286f4' ],
		title: '천둥이 많이 치는날이에요...',
		subtitle: '벼락맞기 싫으면 집에 있으세요.'
	},
	Drizzle: {
		iconName: 'weather-hail',
		gradient: [ '#89F7FE', '#66A6FF' ],
		title: 'Drizzle',
		subtitle: 'Is like rain, but gay 🏳️‍🌈'
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: [ '#00C6FB', '#005BEA' ],
		title: '오늘은 비가 오는 날이네요...',
		subtitle: '외로워 하지 말아요.'
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: [ '#7DE2FC', '#B9B6E5' ],
		title: '오늘은 눈오는 날이에요!',
		subtitle: '첫눈은 저와 상관없는 일이죠.'
	},
	Atmosphere: {
		iconName: 'weather-hail',
		gradient: [ '#89F7FE', '#66A6FF' ]
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: [ '#FF7300', '#FEF253' ],
		title: '오늘은 날씨가 좋네요.',
		subtitle: '운동삼아 밖을 나가보는 것도 좋을 것 같아요.'
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: [ '#D7D2CC', '#304352' ],
		title: '오늘은 구름이 많아요.',
		subtitle: '금세 어두워지니 집에 일찍 귀가하세요.'
	},
	Mist: {
		iconName: 'weather-hail',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: '습도가 높아요.',
		subtitle: '이런날은 집에서 게임만 해야해요.'
	},
	Dust: {
		iconName: 'weather-hail',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: 'Dusty',
		subtitle: 'Thanks a lot China 🖕🏻'
	},
	Haze: {
		iconName: 'weather-hail',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: '안개가 가득하네요.',
		subtitle: '내맘도...'
	}
};
export default function Weather({ condition, temp }) {
	return (
		<LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Atmosphere',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Dust'
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	temp: {
		fontSize: 42,
		color: 'white'
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
		textAlign: 'left'
	},
	subtitle: {
		fontWeight: '600',
		color: 'white',
		fontSize: 24,
		textAlign: 'left'
	},
	textContainer: {
		alignItems: 'flex-start',
		paddingHorizontal: 20,
		justifyContent: 'center',
		flex: 1
	}
});
