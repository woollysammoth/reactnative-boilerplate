import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		...Platform.select({
			ios: {
				paddingTop: 64
			}
		})
	},
	progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listHeading: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 30
	},
	listHeadingLeft: {
		color: '#333',
		fontWeight: 'bold',
		fontSize: 18
	},
	listHeadingRight: {
		color: '#333',
		...Platform.select({
			ios: {
				fontSize: 15
			},
			android: {
				fontSize: 16
			}
		})
	},
	browseList: {
		marginTop: 30,
		paddingHorizontal: 16,
		...Platform.select({
			ios: {
				marginBottom: 60
			},
			android: {
				marginBottom: 30
			}
		})
	},
	browseListItem: {
		...Platform.select({
			ios: {
				paddingVertical: 8
			},
			android: {
				paddingVertical: 10
			}
		}),
		flexDirection: 'row'
	},
	browseListItemText: {
		flex: 1,
		color: '#333',
		paddingLeft: 10,
		...Platform.select({
			ios: {
				fontSize: 15,
				fontWeight: '500'
			},
			android: {
				fontSize: 16,
				fontWeight: '100'
			}
		})
	}
});

export default styles;