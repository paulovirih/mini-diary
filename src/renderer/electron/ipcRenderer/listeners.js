import { setPreferencesVisibility, setTheme } from '../../redux/actions/appActions';
import {
	setDaySelectedNext,
	setMonthSelectedNext,
	setDateSelectedPrevious,
	setMonthSelectedPrevious
} from '../../redux/actions/diaryActions';
import { lock } from '../../redux/actions/fileActions';
import { showImportOverlay } from '../../redux/actions/importActions';
import store from '../../redux/store';
import { getSystemTheme } from '../systemTheme';

const { ipcRenderer } = window.require('electron');
const { systemPreferences } = window.require('electron').remote;


ipcRenderer.on('importDayOne', () => {
	store.dispatch(showImportOverlay('dayOne'));
});

ipcRenderer.on('importJrnl', () => {
	store.dispatch(showImportOverlay('jrnl'));
});

ipcRenderer.on('importJson', () => {
	store.dispatch(showImportOverlay('json'));
});

ipcRenderer.on('lock', () => {
	store.dispatch(lock());
});

ipcRenderer.on('nextDay', () => {
	store.dispatch(setDaySelectedNext());
});

ipcRenderer.on('nextMonth', () => {
	store.dispatch(setMonthSelectedNext());
});

ipcRenderer.on('previousDay', () => {
	store.dispatch(setDateSelectedPrevious());
});

ipcRenderer.on('previousMonth', () => {
	store.dispatch(setMonthSelectedPrevious());
});

ipcRenderer.on('showPreferences', () => {
	store.dispatch(setPreferencesVisibility(true));
});

systemPreferences.subscribeNotification('AppleInterfaceThemeChangedNotification', () => {
	const theme = getSystemTheme();
	store.dispatch(setTheme(theme));
});